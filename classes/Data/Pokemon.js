class Pokemon {
  static async getPokemonTypesList() {
    const response = await fetch(
      'https://pokeapi.co/api/v2/type?offset=1&limit=21'
    );
    const data = await response.json();

    return data;
  }

  static async getPokemonListByType(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data.pokemon;
  }

  static async getPokemonsList(url = 'https://pokeapi.co/api/v2/pokemon') {
    //fetching the list
    const response = await fetch(url);
    const data = await response.json();

    //fetching every pokemon individual

    const pokemonsData = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokeResponse = await fetch(pokemon.url);
        const pokeData = await pokeResponse.json();

        return pokeData;
      })
    );

    data.results = pokemonsData;

    return data;
  }

  static async getPokemonByName(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
}
