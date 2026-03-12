// when user installs add-on
function onInstall(e){
  onOpen(e);
}

// when user opens spreadsheet
function onOpen(e){
  var ui = SpreadsheetApp.getUi();
  ui.createAddonMenu()
    .addItem("Export to LaTex", "showExportDialog")
    .addToUi();
}

function setup() {
  var maxCol = SpreadsheetApp.getActiveSheet().getMaxColumns();
  SpreadsheetApp.getActiveSheet().getRange(1,1,1,maxCol).setBackground("black");
}

function showExportDialog(){
  var ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutputFromFile('ExportDialog')
      .setWidth(400)
      .setHeight(300);
  
  ui.showModelessDialog(html, 'Export to LaTex');

}

function exportToLatex(cols) {
  const sheet = SpreadsheetApp.getActiveSheet();

  const data = sheet.getDataRange().getValues();
}

function getColumnNames(){
  const sheet = SpreadsheetApp.getActiveSheet();
  const numOfCols = sheet.getLastColumn();

  var col_names = [];

  for (let i = 0; i < numOfCols; i++){
    
  }

  //getLastRow()
}
