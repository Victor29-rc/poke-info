class PokemonUI {
  static createPokemonsListElement({ name, url }) {
    const li = document.createElement('li');
    li.textContent = ucfirst(name);
    li.dataset.url = url;
    li.classList.add(`type-${name}`);

    return li;
  }

  static createPokemonCardElemnt(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h1 = document.createElement('h1');
    h1.classList.add('poke-name');
    h1.textContent = ucfirst(pokemon.name);

    const ul = document.createElement('ul');
    ul.classList.add('poke-types-list-container');

    const pokemonTypeTags = [];

    pokemon.types.forEach((typeObj) => {
      pokemonTypeTags.push(this.#createPokeTypeTag(typeObj));
    });

    ul.append(...pokemonTypeTags);

    const pokemonCard = createContainer([img, h1, ul], ['poke-card-container']);

    const pokemonInfo = {
      name: pokemon.name,
      abilities: pokemon.abilities,
      types: pokemon.types,
      sprites: pokemon.sprites,
      stats: pokemon.stats,
      base_experience: pokemon.base_experience,
      height: pokemon.height,
      weight: pokemon.weight,
    };

    pokemonCard.dataset.pokemon = JSON.stringify(pokemonInfo);

    return pokemonCard;
  }

  static showPokemon(pokemon) {
    const columnPokemonPreview = createContainer(
      [
        this.#createPokemonPreview(pokemon),
        this.#createPokemonDescription({
          name: ucfirst(pokemon.name),
          // description: 'Pokemon description example',
        }),
      ],
      ['pokemon-preview-container']
    );

    const columnPokemonStats = this.#createPokemonStats(pokemon);

    const rowShowPokemon = createContainer(
      [columnPokemonPreview, columnPokemonStats],
      ['row-pokemon']
    );

    return rowShowPokemon;
  }

  static #createPokemonStats(pokemon) {
    const ul = document.createElement('ul');
    const pokemonTags = [];

    pokemon.types.forEach((type) => {
      pokemonTags.push(this.#createPokeTypeTag(type));
    });

    ul.append(...pokemonTags);

    const span = document.createElement('span');
    span.classList.add('tag-experience');
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

    const weightLineElement = createContainer([h1Weight, spanWeight]);

    // ----------

    const h1Abilities = document.createElement('h1');
    h1Abilities.textContent = 'Abilities';

    const ulAbilitiesContainer = document.createElement('ul');
    ulAbilitiesContainer.classList.add('abilities-container');

    const abilitiesItems = [];

    pokemon.abilities.forEach((abilityObj) => {
      const abilityLi = document.createElement('li');
      abilityLi.classList.add('ability-item');
      abilityLi.textContent = ucfirst(abilityObj.ability.name);

      abilitiesItems.push(abilityLi);
    });

    ulAbilitiesContainer.append(...abilitiesItems);

    const abilitiesLineElement = createContainer([
      h1Abilities,
      ulAbilitiesContainer,
    ]);

    // ----------

    const tags = createContainer([ul, span], ['pokemon-tags-row']);
    const chart = this.#createPokemonChart(pokemon);
    const attributes = createContainer(
      [heightLineElement, weightLineElement, abilitiesLineElement],
      ['pokemon-attributes-container']
    );

    return createContainer(
      [tags, chart, attributes],
      ['pokemon-stats-container', 'box-shadow']
    );
  }

  static #createPokemonPreview(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    return createContainer(
      [img],
      ['pokemon-preview', 'show-info-container', 'box-shadow']
    );
  }

  static #createPokemonDescription(pokemon) {
    const h1 = document.createElement('h1');
    h1.textContent = pokemon.name;

    // const p = document.createElement('p');
    // p.textContent = pokemon.description;

    return createContainer([h1], ['pokemon-description', 'box-shadow']);
  }

  static #createPokemonChart({ stats }) {
    const chartLabels = [];
    const chartBars = [];

    let maxStat = 0;

    stats.forEach((stat) => {
      if (stat.base_stat > maxStat) {
        maxStat = stat.base_stat;
      }
    });

    stats.forEach((stat) => {
      const item = createContainer([], ['label-item']);
      item.textContent = ucfirst(stat.stat.name);

      const bar = createContainer([], ['bar-item']);
      bar.textContent = stat.base_stat;
      bar.style.height = `${getPercentageBaseOnAMaxValue(
        maxStat,
        stat.base_stat
      )}%`;

      chartLabels.push(item);
      chartBars.push(bar);
    });

    const chartLabelsCotainer = createContainer(chartLabels, [
      'labels-container',
    ]);
    const chartBarsCotainer = createContainer(chartBars, ['bars-container']);

    return createContainer(
      [chartLabelsCotainer, chartBarsCotainer],
      ['charts-container']
    );
  }

  static #createPokeTypeTag({ type }) {
    const li = document.createElement('li');
    li.textContent = ucfirst(type.name);
    li.classList.add(`type-${type.name}`);

    return li;
  }
}
