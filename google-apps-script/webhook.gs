function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),                    // Timestamp
      data.type || "unknown",        // Form type: "alert_signup" or "calculate_impact"
      data.email || "",              // Email (for alerts)
      data.commodity || "",          // Selected commodity
      data.startDate || "",          // Start date (for calculator)
      data.endDate || "",            // End date (for calculator)
      data.result || "",             // Calculation result
      data.userAgent || "",          // Browser info
      data.referrer || ""            // Where they came from
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
