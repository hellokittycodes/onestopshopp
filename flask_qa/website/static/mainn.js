let SHEET_ID = '1PwuLU4j3HbBFNkbwVR9_TFwqNq7-AGA_1KHCUxCwksk';
let SHEET_TITLE = 'teacher_names';
let SHEET_RANGE = 'B3:C60';
let FULL_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE;
let listy = ['','','','','','','','','','']; 
document.addEventListener("DOMContentLoaded", function() {
  
  let userInput = ''; // Initialize userInput here

  function saveJSON(data) {
    localStorage.setItem('data', JSON.stringify(data))
  }

  function loadJSON() {
    const jsonData = localStorage.getItem('data');
    return JSON.parse(jsonData);
  }
  // Function to handle search
  function inputting() {
    const data = loadJSON();
    userInput = document.getElementById("search-box").value.toLowerCase(); // Update userInput value
    //console.log("User Input:", userInput); // Log the user input
    
    for (let i = 1; i < data.table.rows.length; i++) {
      //console.log(data.table.rows[i].c[1].v);
      let name = data.table.rows[i].c[1].v.toLowerCase(); 
        if (name === userInput) 
        {
            let output = data.table.rows[i].c[0].v; 
            console.log("First Name:", output);
        } 
        
        }
      }
    

      fetch(FULL_URL)
      .then(res => res.text())
      .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0,-2));
        saveJSON(data);
        let teacherData = document.getElementById('teacherdata');
        let teacherData1 = document.getElementById('teacherdata1');
    
        if (teacherData1) {
          for (let i = 0; i < 57; i++) {
            let row = data.table.rows[i];
            if (row) {
              let firstName = '';
              let lastName = '';
              let c = row.c;
              if (c && c.length >= 2) {
                firstName = c[0].v;
                lastName = c[1].v;
              }
              let tr = document.createElement('tr');
              let tdFirstName = document.createElement('td');
              let tdLastName = document.createElement('td');
              tdFirstName = firstName;
              tdLastName = lastName;
              tr.appendChild(tdFirstName);
              tr.appendChild(tdLastName);
              teacherData1.appendChild(tr);
            } else {
              console.error('Error: Unable to retrieve data for row', i);
            }
          }
        }
    //hiii
        if (teacherData) {
          for (let i = 0; i < 57; i++) {
            let row = data.table.rows[i];
            if (row) {
              let firstName = '';
              let lastName = '';
              let c = row.c;
              if (c && c.length >= 2) {
                firstName = c[0].v;
                lastName = c[1].v;
              }
              let tr = document.createElement('tr');
              let tdFirstName = document.createElement('td');
              let tdLastName = document.createElement('td');
              tdFirstName.textContent = firstName;
              tdLastName.textContent = lastName;
              tr.appendChild(tdFirstName);
              tr.appendChild(tdLastName);
              teacherData.appendChild(tr);
            } else {
              console.error('Error: Unable to retrieve data for row', i);
            }
          }
        } else {
          console.error('Error: Unable to find teacherdata element.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    
  // Call inputting function when the Search button is clicked
  document.getElementById("button").addEventListener("click", inputting);
});