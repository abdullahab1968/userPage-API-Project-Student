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

}
