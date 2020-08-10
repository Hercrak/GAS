// Author: Henry Merchán
// Create date: 05/08/2020
// Description: Ordenar la hoja modificada
function onEdit(e) {
  var hHoja = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Log');
  hHoja.getRange(hHoja.getLastRow(), 1);
  if (e.range.getSheet().getName() == 'CRM')
    //Logger.log(e);
    //[20-08-07 07:34:50:563 VET] {authMode=LIMITED, range=Range, source=Spreadsheet, oldValue=Prospectos, user=hmerchan@agropica.com, value=Contactados}
    
    if (e.range.getColumn() == 3) {
      var hRango = e.range.getSheet().getRange("A4:H");
      hRango.sort([{column: 1, ascending: true}, {column: 2, ascending: false}]);
    }
  }
  
  function hClientesNuevo() {
  var hHoja = SpreadsheetApp.getActiveSheet();
  var hNuevoReg = hHoja.getRange('A2:F2').getValues();
  hHoja.setActiveSelection('A4');
  // Valido que las celdas obligatorias, no esten vacias
  for (var i in hNuevoReg[0])
    if (hNuevoReg[0][i]<1)
    {
      Browser.msgBox('Cliente nuevo', 'Registre datos obligatorios en cliente.', Browser.Buttons.OK);
      return;
    }
  /*
  var hUltFil = hHoja.getLastRow()+1;
  hUltFil = hHoja.getRange(hUltFil, 1);
  hHoja.setActiveSelection(hUltFil);
  var hFecha = hHoja.getRange(4, 1, 1, 2);
  hFecha.copyTo(hUltFil, {contentsOnly: true});
  hFecha.clearContent();
  */
}
  