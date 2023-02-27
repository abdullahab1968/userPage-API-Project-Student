class Renderer {
  constructor(data) {
    this.dataToShow = data
  }
  userRender(){
    this.renderTemplateScripts('#user-template', '.user-container')
    this.renderTemplateScripts('#friends-template', '.friends-container')
  }

  quoteRender(){
    this.renderTemplateScripts('#quote-template', '.quote-container')
  }

  pokemonRender(){
    this.renderTemplateScripts('#pokemon-template', '.pokemon-container')
  }

  aboutRender(){
    this.renderTemplateScripts('#about-template', '.meat-container')
  }
  renderTemplateScripts(scriptID, divToAppend){
    const source = $(scriptID).html()
    const template =  Handlebars.compile(source)
    const newHTML = template(this.dataToShow)
    $(divToAppend).append(newHTML)
  }
}
