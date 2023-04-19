const poke_container = document.getElementById("poke-container");
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

function genAll() {
  var poke_init = 1
  var poke_end = 904

    poke_container.innerHTML=''

  pokemon(poke_init, poke_end);
}
function gen1() {
  var poke_init = 1
  var poke_end = 151;

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen2() {
  var poke_init = 152
  var poke_end = 251

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen3() {
  var poke_init = 252
  var poke_end = 386

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen4() {
  var poke_init = 387
  var poke_end = 493

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen5() {
  var poke_init = 494
  var poke_end = 649

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen6() {
  var poke_init = 650
  var poke_end = 721

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen7() {
  var poke_init = 722
  var poke_end = 809

  poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}
function gen8() {
  var poke_init = 810
  var poke_end = 904;

   poke_container.innerHTML = "";

  pokemon(poke_init, poke_end);
}

// TODO: Fix the reload on buttons

function pokemon(poke_init, poke_end) {
  const fetchPokemons = async () => {
    for (let i = poke_init; i <= poke_end; i++) {
      if (
        i === 1 ||
        i === 152 ||
        i === 252 ||
        i === 387 ||
        i === 494 ||
        i === 650 ||
        i === 722 ||
        i === 810
      ) {
        title(i);
      }
      await getPokemon(i);
    }
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    createPokemonCard(data);
  };

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");

    const poke_types = pokemon.types.map((type) => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);

    const color = colors[type];
    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.id}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;

    poke_container.appendChild(pokemonEl);
  };

  function title(i) {
    const title = document.createElement("h2");
    title.classList.add("title");
    switch (i) {
      case 1:
        title.innerText = "KANTO (GEN 1)";
        break;
      case 152:
        title.innerText = "JOHTO (GEN 2)";
        break;
      case 252:
        title.innerText = "HOENN (GEN 3)";
        break;
      case 387:
        title.innerText = "SINNOH (GEN 4)";
        break;
      case 494:
        title.innerText = "UNOVA (GEN 5)";
        break;
      case 650:
        title.innerText = "KALOS (GEN 6)";
        break;
      case 722:
        title.innerText = "ALOLA (GEN 7)";
        break;
      case 810:
        title.innerText = "GALAR/HISUI (GEN 8)";
        break;
    }

    poke_container.appendChild(title);
  }

  fetchPokemons();
}
