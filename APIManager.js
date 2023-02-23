//This is the class that will manage all your APIs
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon/'

class APIManager {
    constructor() {
        this.data = {}

    }
    randomUserAPI(){
        return $.get('https://randomuser.me/api/?results=7')
                                                    .then(users => {
                                                        this.data.mainUser = {}
                                                        let mainUser = this.data.mainUser
                                                        mainUser.firstName = users.results[0].name.first 
                                                        mainUser.lastName = users.results[0].name.last 
                                                        mainUser.city = users.results[0].location.city
                                                        mainUser.state = users.results[0].location.state
                                                        mainUser.img = users.results[0].picture.large
                                                        mainUser.friends = []
                                                        
                                                        for(let i=1; i < users.results.length; i++){
                                                            let friendName = users.results[i].name.last + ' ' + users.results[i].name.first 
                                                            mainUser.friends.push(friendName)
                                                        }
                                                        const render = new Renderer(this.data.mainUser)
                                                        render.userRender()

                                                    })

    }
    randomKanyeQuoteAPI(){
        return $.get('https://api.kanye.rest')
                                    .then(quote => { 
                                        this.data.quote = quote
                                        const render = new Renderer(this.data.quote)
                                        render.quoteRender()
                                    })
    }

    pokeAPI(){
        return $.get('https://pokeapi.co/api/v2/pokemon/?limit=100')
                                                            .then( pokemons => {
                                                                let randomNumber = Math.floor(Math.random() * 100)
                                                                return pokemons.results[randomNumber]
                                                            }
                                                            )
                                                            .then(pokemon => { return $.get(pokemon.url)})
                                                            .then(pokemonData => {
                                                                    this.data.pokemon = {}
                                                                    let pokemon = this.data.pokemon
                                                                    pokemon.name = pokemonData.name
                                                                    pokemon.img = pokemonData.sprites.front_default
                                                                    const render = new Renderer(this.data.pokemon)
                                                                    render.pokemonRender()
                                                            })    
    }
    // render(renderData){
    //     const render = new Renderer(this.data)
    //     render
    // }

    baconIpsumAPI(){
        return $.get('https://baconipsum.com/api/?type=all-meat&sentences=1')
                                                                            .then(text =>{
                                                                                 this.data.aboutMeat = text
                                                                                 const render = new Renderer(this.data.aboutMeat)
                                                                                 render.aboutRender()
                                                                                })

    }

}
