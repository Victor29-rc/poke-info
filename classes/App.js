class App {
    static async init() {

        const pokemonTypes = await Pokemon.getPokemonTypesList();
        const pokemonsList = await Pokemon.getPokemonsList();


        // const pokemonToShow = {
        // abilities: [
        //     {
        //     ability: {
        //         name: 'static',
        //         url: 'https://pokeapi.co/api/v2/ability/9/',
        //     },
        //     is_hidden: false,
        //     slot: 1,
        //     },
        //     {
        //     ability: {
        //         name: 'lightning-rod',
        //         url: 'https://pokeapi.co/api/v2/ability/31/',
        //     },
        //     is_hidden: true,
        //     slot: 3,
        //     },
        // ],
        // base_experience: 112,
        // cries: {},
        // forms: [
        //     {
        //     name: 'pikachu',
        //     url: 'https://pokeapi.co/api/v2/pokemon-form/25/',
        //     },
        // ],
        // game_indices: [],
        // height: 4,
        // held_items: [],
        // id: 25,
        // is_default: true,
        // location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
        // moves: [],
        // name: 'pikachu',
        // order: 35,
        // past_abilities: [],
        // past_types: [],
        // species: {},
        // sprites: {
        //     back_default:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
        //     back_female:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
        //     back_shiny:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
        //     back_shiny_female:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
        //     front_default:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        //     front_female:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
        //     front_shiny:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
        //     front_shiny_female:
        //     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
        //     other: {},
        //     versions: {},
        // },
        // stats: [
        //     {
        //     base_stat: 35,
        //     effort: 0,
        //     stat: {
        //         name: 'hp',
        //         url: 'https://pokeapi.co/api/v2/stat/1/',
        //     },
        //     },
        //     {
        //     base_stat: 55,
        //     effort: 0,
        //     stat: {
        //         name: 'attack',
        //         url: 'https://pokeapi.co/api/v2/stat/2/',
        //     },
        //     },
        //     {
        //     base_stat: 40,
        //     effort: 0,
        //     stat: {
        //         name: 'defense',
        //         url: 'https://pokeapi.co/api/v2/stat/3/',
        //     },
        //     },
        //     {
        //     base_stat: 50,
        //     effort: 0,
        //     stat: {
        //         name: 'special-attack',
        //         url: 'https://pokeapi.co/api/v2/stat/4/',
        //     },
        //     },
        //     {
        //     base_stat: 50,
        //     effort: 0,
        //     stat: {
        //         name: 'special-defense',
        //         url: 'https://pokeapi.co/api/v2/stat/5/',
        //     },
        //     },
        //     {
        //     base_stat: 90,
        //     effort: 2,
        //     stat: {
        //         name: 'speed',
        //         url: 'https://pokeapi.co/api/v2/stat/6/',
        //     },
        //     },
        // ],
        // types: [
        //     {
        //     slot: 1,
        //     type: {
        //         name: 'electric',
        //         url: 'https://pokeapi.co/api/v2/type/13/',
        //     },
        //     },
        // ],
        // weight: 60,
        // };

        /*Showing the pokemons list  */


        const pokemonTypesList = pokemonTypes.results.map((pokemon) => {
            return PokemonUI.createPokemonsListElement(pokemon);
        });
        
        console.log(pokemonsList.results);

        const pokemonCardsList = pokemonsList.results.map((pokemon) => {
            return PokemonUI.createPokemonCardElemnt(pokemon);
        })
        
        const pokemonTypesElement = document.querySelector('.pokemon-types');
        const pokemonsCardsContainerElement = document.querySelector(
        'section.section-pokemons div.pokemons-sub-section'
        );
        
        pokemonTypesElement.append(...pokemonTypesList);
        pokemonsCardsContainerElement.append(...pokemonCardsList);

        /*Showing the pokemons list  */

        /* Showin a single pokemon */

        // const showPokemonSectionElement = document.querySelector(
        // 'section.section-pokemon-preview'
        // );

        // const rowShowPokemon = PokemonUI.showPokemon(pokemonToShow);
        // const rowPokemonEvolutions = document.createElement('div');
        // rowPokemonEvolutions.classList.add('row-pokemon-evolution');

        // showPokemonSectionElement.append(rowShowPokemon, rowPokemonEvolutions);
    }
}