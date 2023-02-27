callApis()
// console.log(api.data)
$('#generate-button').on("click", function(){
    emptyDynamicDivs()
    callApis()
})

function callApis(){
    const api = new APIManager()
    api.randomUserAPI()
    api.randomKanyeQuoteAPI()
    api.pokeAPI()
    api.baconIpsumAPI()
}

function emptyDynamicDivs(){
    $('.user-container').empty()
    $('.quote-container').empty()
    $('.pokemon-container').empty()
    $('.meat-container').empty()
    $('.friends-container').empty()
}