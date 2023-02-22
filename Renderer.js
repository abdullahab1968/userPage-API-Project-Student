class Renderer {
  constructor(data) {
    this.dataToShow = data
    console.log(this.dataToShow)
  }
  userRender(){
    const source = $('#user-template').html()
    const template = Handlebars.compile(source)

    const newHTML = template(this.dataToShow.mainUser)
    $('.user-container').append(newHTML)
  }

}
