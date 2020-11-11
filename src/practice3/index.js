export const getPoetry = async () => {
  try {
    const response = await fetch(
      "https://v1.jinrishici.com/all.json"
    ).then((res) => res.json());
    return [response.origin, response.author, response.content];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getPoetry2 = () => {
  return fetch("https://v1.jinrishici.com/all.json")
    .then((res) => res.json())
    .then((data) => {
      return [data.origin, data.author, data.content];
    })
    .catch((e) => console.log(e));
};
