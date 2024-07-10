const PokemonTypes = {
  count: 21,
  next: 'https://pokeapi.co/api/v2/type?offset=20&limit=1',
  previous: null,
  results: [
    {
      name: 'normal',
      url: 'https://pokeapi.co/api/v2/type/1/',
    },
    {
      name: 'fighting',
      url: 'https://pokeapi.co/api/v2/type/2/',
    },
    {
      name: 'flying',
      url: 'https://pokeapi.co/api/v2/type/3/',
    },
    {
      name: 'poison',
      url: 'https://pokeapi.co/api/v2/type/4/',
    },
    {
      name: 'ground',
      url: 'https://pokeapi.co/api/v2/type/5/',
    },
    {
      name: 'rock',
      url: 'https://pokeapi.co/api/v2/type/6/',
    },
    {
      name: 'bug',
      url: 'https://pokeapi.co/api/v2/type/7/',
    },
    {
      name: 'ghost',
      url: 'https://pokeapi.co/api/v2/type/8/',
    },
    {
      name: 'steel',
      url: 'https://pokeapi.co/api/v2/type/9/',
    },
    {
      name: 'fire',
      url: 'https://pokeapi.co/api/v2/type/10/',
    },
    {
      name: 'water',
      url: 'https://pokeapi.co/api/v2/type/11/',
    },
    {
      name: 'grass',
      url: 'https://pokeapi.co/api/v2/type/12/',
    },
    {
      name: 'electric',
      url: 'https://pokeapi.co/api/v2/type/13/',
    },
    {
      name: 'psychic',
      url: 'https://pokeapi.co/api/v2/type/14/',
    },
    {
      name: 'ice',
      url: 'https://pokeapi.co/api/v2/type/15/',
    },
    {
      name: 'dragon',
      url: 'https://pokeapi.co/api/v2/type/16/',
    },
    {
      name: 'dark',
      url: 'https://pokeapi.co/api/v2/type/17/',
    },
    {
      name: 'fairy',
      url: 'https://pokeapi.co/api/v2/type/18/',
    },
    {
      name: 'stellar',
      url: 'https://pokeapi.co/api/v2/type/19/',
    },
    {
      name: 'unknown',
      url: 'https://pokeapi.co/api/v2/type/10001/',
    },
  ],
};

const PokemonList = {
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon/7/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'wartortle',
      url: 'https://pokeapi.co/api/v2/pokemon/8/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon/9/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'caterpie',
      url: 'https://pokeapi.co/api/v2/pokemon/10/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'metapod',
      url: 'https://pokeapi.co/api/v2/pokemon/11/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'butterfree',
      url: 'https://pokeapi.co/api/v2/pokemon/12/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'weedle',
      url: 'https://pokeapi.co/api/v2/pokemon/13/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'kakuna',
      url: 'https://pokeapi.co/api/v2/pokemon/14/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon/15/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'pidgey',
      url: 'https://pokeapi.co/api/v2/pokemon/16/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'pidgeotto',
      url: 'https://pokeapi.co/api/v2/pokemon/17/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'pidgeot',
      url: 'https://pokeapi.co/api/v2/pokemon/18/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'rattata',
      url: 'https://pokeapi.co/api/v2/pokemon/19/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
    {
      name: 'raticate',
      url: 'https://pokeapi.co/api/v2/pokemon/20/',
      info: {
        abilities: [],
        base_experience: 64,
        cries: {},
        forms: [],
        game_indices: [],
        height: 7,
        held_items: [],
        id: 1,
        is_default: true,
        location_area_encounters:
          'https://pokeapi.co/api/v2/pokemon/1/encounters',
        moves: [],
        name: 'bulbasaur',
        order: 1,
        past_abilities: [],
        past_types: [],
        species: {},
        sprites: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
          front_shiny_female: null,
          other: {},
          versions: {},
        },
        stats: [],
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    },
  ],
};

const pokemonToShow = {
  abilities: [
    {
      ability: {
        name: 'static',
        url: 'https://pokeapi.co/api/v2/ability/9/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: 'lightning-rod',
        url: 'https://pokeapi.co/api/v2/ability/31/',
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 112,
  cries: {},
  forms: [
    {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon-form/25/',
    },
  ],
  game_indices: [],
  height: 4,
  held_items: [],
  id: 25,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/25/encounters',
  moves: [],
  name: 'pikachu',
  order: 35,
  past_abilities: [],
  past_types: [],
  species: {},
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
    back_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
    back_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
    front_shiny_female:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
    other: {},
    versions: {},
  },
  stats: [
    {
      base_stat: 35,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 90,
      effort: 2,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/',
      },
    },
  ],
  weight: 60,
};

/*Showing the pokemons list  */

const pokemonTypesList = [];
// const pokemonCardsList = [];

PokemonTypes.results.forEach((pokemon) => {
  pokemonTypesList.push(PokemonUI.createPokemonListElement(pokemon));
});

// PokemonList.results.forEach(({ info }) => {
//   pokemonCardsList.push(PokemonUI.createPokemonCardElemnt(info));
// });

const pokemonTypesElement = document.querySelector('.pokemon-types');
const pokemonsCardsContainerElement = document.querySelector(
  'section.section-pokemons div.pokemons-sub-section'
);

pokemonTypesElement.append(...pokemonTypesList);
// pokemonsCardsContainerElement.append(...pokemonCardsList);

/*Showing the pokemons list  */

/* Showin a single pokemon */

const showPokemonSectionElement = document.querySelector(
  'section.section-pokemon-preview'
);

showPokemonSectionElement.append(PokemonUI.createPokemonPreview(pokemonToShow));
showPokemonSectionElement.append(PokemonUI.createPokemonDescription({name: 'Pokemon name', description: 'Pokemon description example'}));
showPokemonSectionElement.append(PokemonUI.createPokemonStats(pokemonToShow));
