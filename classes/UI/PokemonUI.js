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


  static createPokemonDescription(pokemon) {
    const h1 = document.createElement('h1');
    h1.textContent = pokemon.name;

    const p = document.createElement('p');
    p.textContent = pokemon.description;

    return createContainer([h1, p], ['pokemon-description']);
  }

  static createPokemonStats(pokemon) {
    const ul = document.createElement('ul');
    const pokemonTags = [];

    pokemon.types.forEach(type => {
      pokemonTags.push(this.#createPokeTypeTag(type))
    });

    ul.append(...pokemonTags);

    const span = document.createElement('span');
    span.classList.add('tag-experience')
    span.textContent = `${pokemon.base_experience} EXP`;

    //pokemon details such as the weight, heights and abilities

    const h1Height = document.createElement('h1');
    h1Height.textContent = 'Height';

    const spanHeight = document.createElement('span');
    spanHeight.textContent = pokemon.height;
  
    const heightLineElement = createContainer([h1Height, spanHeight]);

    // ----------

    const h1Weight = document.createElement('h1');
    h1Weight.textContent = 'Weight';

    const spanWeight = document.createElement('span');
    spanWeight.textContent = pokemon.weight;
  
    const weightLineElement = createContainer([h1Weight, spanWeight])

    // ----------

    const h1Abilities = document.createElement('h1');
    h1Abilities.textContent = 'Abilities';
    
    const ulAbilitiesContainer = document.createElement('ul');
    ulAbilitiesContainer.classList.add('abilities-container');

    const abilitiesItems = [];

    pokemon.abilities.forEach((abilityObj) => {
      const abilityLi = document.createElement('li');
      abilityLi.classList.add('ability-item');
      abilityLi.textContent = abilityObj.ability.name;

      abilitiesItems.push(abilityLi);
    })

    ulAbilitiesContainer.append(...abilitiesItems);

    const abilitiesLineElement = createContainer([h1Abilities, ulAbilitiesContainer]);

    // ----------

    const tags = createContainer([ul, span], ['pokemon-tags-row']);
    const attributes = createContainer([heightLineElement, weightLineElement, abilitiesLineElement], ['attributes-container']);

    return createContainer([tags, attributes], ['pokemon-stats-container']);
  }

  static #createPokeTypeTag({ type }) {
    const li = document.createElement('li');
    li.textContent = ucfirst(type.name);
    li.classList.add(`type-${type.name}`);

    return li;
  }
}
