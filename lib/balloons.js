export const getAllBalloons = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons"

    // "https://backend-balloons.netlify.app/api/balloons"
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getGenderBalloons = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons/gender-party"

    // "https://backend-balloons.netlify.app/api/balloons"
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getBirthDayBalloons = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons/birthday"

    // "https://backend-balloons.netlify.app/api/balloons"
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getBabyBalloons = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons/baby"

    // "https://backend-balloons.netlify.app/api/balloons"
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getFasadBalloons = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons/fasad"

    // "https://backend-balloons.netlify.app/api/balloons"
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getPhotozoneBalloons = async () => {
  const response = await fetch(
    "https://balloons-shop.onrender.com/api/balloons/photo-zone"

    // "https://backend-balloons.netlify.app/api/balloons"
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getAllBalloonsLimit = async (page = 1) => {
  const response = await fetch(
    `https://balloons-shop.onrender.com/api/balloons/paginate?limit=24&${page}`
  );
  const data = await response.json();
  const balloons = await data.data;
  return balloons;
};
export const getAllBalloonsIds = async () => {
  const res = await fetch("https://balloons-shop.onrender.com/api/balloons");
  // const res = await fetch("https://backend-balloons.netlify.app/api/balloons");
  const balloons = await res.json();
  return balloons.data.map((balloon) => {
    return {
      params: {
        id: balloon._id,
      },
    };
  });
};

export const getBalloonById = async (balloonId) => {
  const res = await fetch(
    `https://balloons-shop.onrender.com/api/balloons/${balloonId}`
    // `https://backend-balloons.netlify.app/api/balloons/${balloonId}`
  );
  const data = await res.json();
  return data.data;
};
