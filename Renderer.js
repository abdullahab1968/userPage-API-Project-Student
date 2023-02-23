class Renderer {
  constructor(data) {
    this.dataToShow = data
  }
  userRender(){
    let source = $('#user-template').html()
    let template = Handlebars.compile(source)
    let newHTML = template(this.dataToShow)
    $('.user-container').append(newHTML)

    source = $('#friends-template').html()
    template = Handlebars.compile(source)
    newHTML = template(this.dataToShow)
    $('.friends-container').append(newHTML)
  }
  quoteRender(){
    const source = $('#quote-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(this.dataToShow)
    $('.quote-container').append(newHTML)
  }

  pokemonRender(){
    const source = $('#pokemon-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(this.dataToShow)
    $('.pokemon-container').append(newHTML)
    
  }






  aboutRender(){
    const source = $('#about-template').html()
    const template =  Handlebars.compile(source)
    const newHTML = template(this.dataToShow)
    $('.meat-container').append(newHTML)

  }

}
