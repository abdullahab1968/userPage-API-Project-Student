let api = new APIManager()
api.randomUserAPI()
api.randomKanyeQuoteAPI()
api.pokeAPI()
api.baconIpsumAPI()
// console.log(api.data)
$('#generate-button').on("click", function(){
    $('.user-container').empty()
    $('.quote-container').empty()
    $('.pokemon-container').empty()
    $('.meat-container').empty()
    $('.friends-container').empty()
    


    api = new APIManager()
    api.randomUserAPI()
    api.randomKanyeQuoteAPI()
    api.pokeAPI()
    api.baconIpsumAPI()
})