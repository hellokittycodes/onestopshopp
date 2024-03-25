let SHEET_ID = '1PwuLU4j3HbBFNkbwVR9_TFwqNq7-AGA_1KHCUxCwksk';
let SHEET_TITLE = 'teacher_names';
let SHEET_RANGE = 'B3:J27';
let FULL_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE; 

function saveJSON(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

function loadJSON() {
    const jsonData = localStorage.getItem('data');
    return JSON.parse(jsonData);
}

function inputting() {
    const data = loadJSON();
    const userInput = document.getElementById("search-box").value.toLowerCase();
  
    for (let i = 1; i < data.table.rows.length; i++) {
        let name = data.table.rows[i].c[1].v.toLowerCase(); 
        if (name === userInput) {
            let output = data.table.rows[i].c[0].v; 
            var a = $('#a');
            var b = $('#b');
            var c = $('#c');
            var d = $('#d');
            var e = $('#e');
            var f = $('#f');
            var email = $('#email');

            var tr = document.querySelector("tbody tr");
            tr.children[0].innerHTML = "NEW NAME"; 
            a[0].innerHTML = data.table.rows[i].c[2].v.toString(); 
            b[0].innerHTML = data.table.rows[i].c[3].v.toString(); 
            c[0].innerHTML = data.table.rows[i].c[4].v.toString(); 
            d[0].innerHTML = data.table.rows[i].c[5].v.toString(); 
            e[0].innerHTML = data.table.rows[i].c[6].v.toString(); 
            f[0].innerHTML = data.table.rows[i].c[7].v.toString(); 
            email[0].innerHTML = data.table.rows[i].c[8].v.toString(); 
        } 
    }
}

$(document).ready(function() {
    fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0,-2));
        saveJSON(data);
    });
});