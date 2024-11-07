export default function json2html(data) {
    // Extract unique headers from the data array
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start the HTML string with the table and add data-user attribute
    let html = `<table data-user="chakaliprakash0304@gmail.com">\n  <thead>\n    <tr>`;
  
    // Add headers to the table
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr>\n  </thead>\n  <tbody>\n`;
  
    // Add rows for each object in the data array
    data.forEach(item => {
      html += `    <tr>`;
      headers.forEach(header => {
        html += `<td>${item[header] || ''}</td>`;
      });
      html += `</tr>\n`;
    });
  
    html += `  </tbody>\n</table>`;
    return html;
  }
  