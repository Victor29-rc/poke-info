class PokemonUI {
  static createPokemonListElement({ name, url }) {
    const li = document.createElement('li');
    li.textContent = ucfirst(name);
    li.dataset.url = url;

    return li;
  }

  static createPokemonCardElemnt(pokemonInfo) {
    const img = document.createElement('img');
    img.src = pokemonInfo.sprites.front_default;

    const h1 = document.createElement('h1');
    h1.classList.add('poke-name');
    h1.textContent = ucfirst(pokemonInfo.name);

    const ul = document.createElement('ul');
    ul.classList.add('poke-types-list-container');

    const pokemonTypeTags = [];

    pokemonInfo.types.forEach((typeObj) => {
      pokemonTypeTags.push(this.#createPokeTypeTag(typeObj));
    });

    ul.append(...pokemonTypeTags);

    return createContainer([img, h1, ul], ['poke-card-container']);
  }

  static createPokemonPreview(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    return createContainer([img], ['pokemon-preview', 'show-info-container']);
  }

  static #createPokeTypeTag({ type }) {
    const li = document.createElement('li');
    li.textContent = ucfirst(type.name);
    li.classList.add(`type-${type.name}`);

    return li;
  }
}
