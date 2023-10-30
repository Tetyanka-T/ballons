const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/categories/baby", changefreq: "daily", priority: 0.3 },
    { url: "/categories/baby/boy", changefreq: "daily", priority: 0.3 },
    { url: "/categories/baby/girl", changefreq: "daily", priority: 0.3 },
    { url: "/categories/birthday/boys", changefreq: "daily", priority: 0.3 },
    { url: "/categories/birthday/girls", changefreq: "daily", priority: 0.3 },
    { url: "/categories/birthday/first", changefreq: "daily", priority: 0.3 },
    { url: "/categories/birthday/he", changefreq: "daily", priority: 0.3 },
    { url: "/categories/birthday/she", changefreq: "daily", priority: 0.3 },
    { url: "/categories/facades", changefreq: "daily", priority: 0.3 },
    { url: "/categories/photozone", changefreq: "daily", priority: 0.3 },
    { url: "/categories/gender-party", changefreq: "daily", priority: 0.3 },
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
