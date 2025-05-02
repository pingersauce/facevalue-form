function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the form data
    var formData = JSON.parse(e.postData.contents);
    
    // Get the current timestamp
    var timestamp = new Date();
    
    // Prepare the row data
    var rowData = [
      timestamp,
      formData.name,
      formData.phone,
      formData.location,
      formData.face_photo_url,
      formData.body_photo_url
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'success',
      'row': rowData
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'result': 'error',
      'error': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
} 