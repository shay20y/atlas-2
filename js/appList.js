import AppClass from "./appItem.js"

export const doApi = async () => {
  const query = new URLSearchParams(window.location.search);
  let searchFor = query.get("search") || "israel";
  let url = `https://restcountries.com/v3.1/name/${searchFor}?fullText=true`;
  let resp = await fetch(url);
  let data = await resp.json();
  // console.log(data);

  let borders_arr = data[0].borders ? await countryLoop(data[0].borders) : ["none"];
    // console.log(borders_arr)

  createList(data ,borders_arr)
}

const borderCountry = async item => {
  let url = `https://restcountries.com/v3.1/alpha/${item}`;
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  return data;
}

const countryLoop = async arr => { 
  let border_ar = [];

  for (let i = 0; i < arr.length; i++) {
      let resp = await borderCountry(arr[i]).then(data => {
          border_ar.push(data[0].name.common);
      })
  }
  return border_ar;
}

const createList = (_ar ,_borders) => {
  _ar.forEach(item => {
    let app = new AppClass("#id_row", item ,_borders);
    app.render();
  })
}

