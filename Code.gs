function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Get the form data
  var name = data.name;
  var phone = data.phone;
  var location = data.location;
  var photo1Url = data.photo1Url;
  var photo2Url = data.photo2Url;
  var timestamp = new Date();
  
  // Add the data to the sheet
  sheet.appendRow([name, phone, location, photo1Url, photo2Url, timestamp]);
  
  // Return success response
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'success',
    'row': sheet.getLastRow()
  })).setMimeType(ContentService.MimeType.JSON);
} 