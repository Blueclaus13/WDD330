function doStuff(data) {
    results = data;
    console.log('first: ', results);
    results.results.forEach((pokemon) => {
      const div = document.createElement('div');
      div.textContent = pokemon.name;
      document.querySelector('main').appendChild(div);
        // assumes you have a <main> element in your HTML document
    });
  }

const url = "https://pokeapi.co/api/v2/pokemon";
const results = fetch(url);
doStuff(results);

console.log("second: ", results);

//https://byui-cit.github.io/learning-modules/modules/js/fetch-basics/prepare1/
