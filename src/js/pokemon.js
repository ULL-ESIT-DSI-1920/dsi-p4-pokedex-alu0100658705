export default class Pokemon {
	constructor(poke_data) {
		this.nombre = poke_data.name;
		this.id = poke_data.id;
		this.back = poke_data.sprites.back_default;
		this.front = poke_data.sprites.front_default;
	}
}
