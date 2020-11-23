const googleCredentials = {
  cx: "017576662512468239146:omuauf_lfve",
  key: "AIzaSyCLIvpzNqvE3rXXC1OHTXDw37cDePjhSXs",
};

const request = (query) => {
  return fetch(
    `https://www.googleapis.com/customsearch/v1?key=${
      googleCredentials.key
    }&cx=${googleCredentials.cx}&q=${query}`
  )
    .then((res) => {
      if (res.status === 200) return res.json();
    })
    .catch((err) => console.log(err));
};

export const googleSearch = (query) => request(query);
