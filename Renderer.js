class Renderer {
  constructor(data) {
    this.dataToShow = data
  }
  userRender(){
    const source = $('#user-template').html()
    const template = Handlebars.compile(source)

    const newHTML = template(this.dataToShow)
    $('.user-container').append(newHTML)
  }

}
