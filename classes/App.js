class App {
  static async init() {
    const pokemonTypes = await Pokemon.getPokemonTypesList();
    const pokemonsList = await Pokemon.getPokemonsList();

    /*Showing the pokemons list by default */

    const pokemonTypesList = pokemonTypes.results.map((pokemon) => {
      return PokemonUI.createPokemonsListElement(pokemon);
    });

    const pokemonTypesElement = document.querySelector('.pokemon-types');

    pokemonTypesElement.append(...pokemonTypesList);
    this.mountPokemonList(pokemonsList);
  }

  static mountPokemonList(pokemonsList) {
    const { previous, next } = pokemonsList;

    const pokemonsCardsContainerElement = document.querySelector(
      'section.section-pokemons div.pokemons-sub-section'
    );

    const pokemonCardsList = pokemonsList.results.map((pokemon) => {
      return PokemonUI.createPokemonCardElemnt(pokemon);
    });

    pokemonsCardsContainerElement.innerHTML = '';
    pokemonsCardsContainerElement.append(...pokemonCardsList);

    const previousNextSectionElement = document.querySelector(
      '.previous-next-section'
    );

    previousNextSectionElement.innerHTML = '';

    const previousSpan = document.createElement('span');
    previousSpan.textContent = 'Previous';

    const previousContainer = createContainer([previousSpan], ['previous']);

    if (previous) {
      previousContainer.dataset.url = previous;
      previousContainer.addEventListener(
        'click',
        this.#nextPreviousPageHandler.bind(previousContainer, this)
      );
    } else {
      previousContainer.classList.add('invalid');
    }

    const nextSpan = document.createElement('span');
    nextSpan.textContent = 'Next';

    const nextContainer = createContainer([nextSpan], ['next']);

    if (next) {
      nextContainer.dataset.url = next;
      nextContainer.addEventListener(
        'click',
        this.#nextPreviousPageHandler.bind(nextContainer, this)
      );
    } else {
      nextContainer.classList.add('invalid');
    }

    previousNextSectionElement.append(previousContainer);
    previousNextSectionElement.append(nextContainer);
  }

  static async setListeners() {
    //Elements
    const gobackElement = document.querySelector('.go-back-container');
    const pokemonListContainer = document.querySelector('.section-pokemons');
    const navElement = document.querySelector('nav');
    const menuIconElement = document.querySelector('.poke-header i');
    const searchElement = document.getElementById('search');

    const pokemonPreviewContainer = document.querySelector(
      '.section-pokemon-preview'
    );

    //Handler functions

    const showPokemonHandler = (e) => {
      // if the user is clicking on the poke-card-container element or in one of its child
      if (
        e.target.classList.contains('poke-card-container') ||
        e.target.parentElement.classList.contains('poke-card-container')
      ) {
        const pokeCardContainerElement = e.target.classList.contains(
          'poke-card-container'
        )
          ? e.target
          : e.target.parentElement;

        const pokemon = JSON.parse(pokeCardContainerElement.dataset.pokemon);

        pokemonPreviewContainer.append(PokemonUI.showPokemon(pokemon));

        pokemonListContainer.setAttribute('hidden', 'hidden');
        pokemonPreviewContainer.removeAttribute('hidden');
      }
    };

    const goBackHandler = () => {
      pokemonListContainer.removeAttribute('hidden');
      pokemonPreviewContainer.setAttribute('hidden', 'hidden');

      const pokemonRowContainerElement = document.querySelector(
        '.section-pokemon-preview .row-pokemon'
      );

      if (pokemonRowContainerElement) {
        pokemonRowContainerElement.remove();
      }
    };

    const searchElementHandler = (e) => {
      const searchedValue = e.target.value;

      const pokeCards = document.querySelectorAll(
        '.pokemons-sub-section .poke-card-container'
      );

      pokeCards.forEach((pokeCardElement) => {
        const { name } = JSON.parse(pokeCardElement.dataset.pokemon);

        if (!name.toLowerCase().includes(searchedValue.trim().toLowerCase())) {
          pokeCardElement.setAttribute('hidden', 'hidden');
        } else {
          pokeCardElement.removeAttribute('hidden');
        }
      });
    };

    const displayPokemonByTypesHandler = async (e) => {
      const pokeListContainer = document.createElement('ul');
      pokeListContainer.classList.add('poke-list-by-type');

      if (
        e.target.tagName === 'LI' &&
        e.target.parentElement.classList.contains('pokemon-types')
      ) {
        const url = e.target.dataset.url;
        const pokemons = await Pokemon.getPokemonListByType(url);

        const pokemonsLi = pokemons.map(({ pokemon }) => {
          const li = document.createElement('li');
          li.textContent = ucfirst(pokemon.name);

          return li;
        });

        pokeListContainer.append(...pokemonsLi);
        e.target.append(pokeListContainer);

        pokeListContainer.addEventListener('click', async (e) => {
          if (
            e.target.tagName === 'LI' &&
            e.target.parentElement.classList.contains('poke-list-by-type')
          ) {
            const pokemonName = e.target.textContent.toLowerCase();
            const pokemon = await Pokemon.getPokemonByName(pokemonName);

            const pokemonListContainer =
              document.querySelector('.section-pokemons');

            const pokemonPreviewContainer = document.querySelector(
              '.section-pokemon-preview'
            );

            if (pokemonPreviewContainer.querySelector('.row-pokemon')) {
              pokemonPreviewContainer.querySelector('.row-pokemon').remove();
            }

            pokemonPreviewContainer.append(PokemonUI.showPokemon(pokemon));

            pokemonListContainer.setAttribute('hidden', 'hidden');
            pokemonPreviewContainer.removeAttribute('hidden');

            const nav = document.querySelector('nav');
            if (nav && nav.classList.contains('active')) {
              nav.classList.remove('active');
            }
          }
        });
      }
    };

    //Listeners
    document.addEventListener('click', () => {
      const pokeListByType = document.querySelector('.poke-list-by-type');
      if (pokeListByType) {
        pokeListByType.remove();
      }
    });
    menuIconElement.addEventListener('click', () => {
      navElement.classList.toggle('active');
    });
    searchElement.addEventListener('keyup', searchElementHandler);
    pokemonListContainer.addEventListener('click', showPokemonHandler);
    gobackElement.addEventListener('click', goBackHandler);
    navElement.addEventListener('click', displayPokemonByTypesHandler);
  }

  static async #nextPreviousPageHandler(thisClass) {
    const url = this.dataset.url;

    const pokemonsList = await Pokemon.getPokemonsList(url);

    thisClass.mountPokemonList(pokemonsList);
  }
}
