import "regenerator-runtime/runtime";
import Pokemon from "./pokemon.js";

var pokemons = [];

function insertOrd(index, element) {
	pokemons.splice(index, 0, element);
}

const getPokemon = async () => {
	for (var i = 1; i <= 151; i++) {
		const response = await fetch(
			"https://pokeapi.co/api/v2/pokemon/" + i + "/"
		);
		const poke_data = await response.json();
		const pokemon = await new Pokemon(poke_data);
		await insertOrd(i, pokemon);
	}
	await generatePokedex();
};

const pokedex = document.getElementById("pokedex");
const generatePokedex = async () => {
	for (var i = 0; i < pokemons.length; i++) {
		console.log(pokemons[i].nombre);
		const poke_info = document.createElement("div");
		const poke_imagen = document.createElement("img");
		const poke_texto = document.createElement("h5");
		poke_imagen.srcset = pokemons[i].back;
		poke_texto.innerText = pokemons[i].id + ". " + pokemons[i].nombre;
		poke_info.append(poke_imagen, poke_texto);
		pokedex.append(poke_info);
	}
};

getPokemon();
