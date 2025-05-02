function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data
    var formData = e.parameter;
    
    // Get the current timestamp
    var timestamp = new Date();
    
    // Prepare the row data
    var rowData = [
      timestamp,
      formData.name,
      formData.phone,
      formData.location,
      formData.face_photo,
      formData.body_photo
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return HtmlService.createHtmlOutput('Success');
    
  } catch(error) {
    // Return error response
    return HtmlService.createHtmlOutput('Error: ' + error.toString());
  }
}

// Handle OPTIONS request for CORS
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function doGet(e) {
  try {
    // Log the incoming request
    console.log('Received request with parameters:', e.parameter);
    
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Get form data from URL parameters
    var formData = e.parameter;
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.location) {
      throw new Error('Missing required fields');
    }
    
    // Get the current timestamp
    var timestamp = new Date();
    
    // Prepare the row data
    var rowData = [
      timestamp,
      formData.name,
      formData.phone,
      formData.location
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Log success
    console.log('Successfully added row:', rowData);
    
    // Return success response
    return ContentService.createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
    
  } catch(error) {
    // Log error
    console.error('Error in doGet:', error);
    
    // Return error response
    return ContentService.createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
} 