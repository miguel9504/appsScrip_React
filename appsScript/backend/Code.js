

function doGet() {
  var template = HtmlService.createTemplateFromFile('frontend/index')
    .evaluate()
    .addMetaTag("viewport", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimum-scale=1")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setTitle('React App')
    .setFaviconUrl('https://www.techtranz.com/wp-content/uploads/2018/05/1000px-React-icon.svg.png');
  return template;
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
