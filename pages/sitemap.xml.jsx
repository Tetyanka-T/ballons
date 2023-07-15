export default function Sitemap() {
  return null;
}

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://veselavutivka.com.ua";

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>https://veselavutivka.com.ua/payment-delivery.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/contacts.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>
    
      <url>
      <loc>https://veselavutivka.com.ua/about-us.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/rules.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/gender-party.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/baby.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/baby/girl.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/birthday.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/birthday/first.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/birthday/girls.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/birthday/boys.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/birthday/she.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/birthday/he.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/photozone.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>

      <url>
      <loc>https://veselavutivka.com.ua/categories/facades.html</loc>
      <lastmod>2023-15-07</lastmod>
      </url>
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
