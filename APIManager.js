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


                                                    })

    }
    randomKanyeQuoteAPI(){
        return $.get('https://api.kanye.rest')
                                    .then(quote => 
                                        console.log(quote))
    }

    pokeAPI(){
        return $.get('https://pokeapi.co/api/v2/pokemon/?limit=100')
                                                            .then( pokemons => {
                                                                let randomNumber = Math.floor(Math.random() * 100)
                                                                console.log(pokemons.results[randomNumber])
                                                                return pokemons.results[randomNumber]
                                                            }
                                                            )
                                                            .then(pokemon => {
                                                                console.log(pokemon.url)
                                                                return $.get(pokemon.url)
                                                            })
                                                            .then(data => console.log(data))    
    }

    baconipsumAPI(){
        return $.get('https://baconipsum.com/api/?type=all-meat&sentences=1')

    }

}
