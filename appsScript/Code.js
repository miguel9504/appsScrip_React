

function doGet(){
  var template = HtmlService.createTemplateFromFile('index').evaluate().addMetaTag("viewport", "width=device-width, initial-scale=1");
  return template;
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
