export const getRandomAvatarUrl = (gender) => {
  if (gender === "female")
    return `https://randomuser.me/api/portraits/women/${Math.floor(
      Math.random() * 100
    )}.jpg`;
  else
    return `https://randomuser.me/api/portraits/men/${Math.floor(
      Math.random() * 100
    )}.jpg`;
};
