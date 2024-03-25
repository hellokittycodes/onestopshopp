let SHEET_ID = '1PwuLU4j3HbBFNkbwVR9_TFwqNq7-AGA_1KHCUxCwksk';
let SHEET_TITLE = 'teacher_names';
let SHEET_RANGE = 'B3:J27';
let FULL_URL = 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE;

console.log("Fetching data from:", FULL_URL);

function hello() {
    console.log("hello");
}
function saveJSON(data) {
    localStorage.setItem('data', JSON.stringify(data));
    console.log("Data saved to local storage:", data);
}

function loadJSON() {
    const jsonData = localStorage.getItem('data');
    console.log("Loading data from local storage:", jsonData);
    return JSON.parse(jsonData);
}

function inputting() {
    console.log("Running inputting function");
    const data = loadJSON();
    if (!data) {
        console.error("Data not found in local storage");
        return;
    }

    const userInput = document.getElementById("search-box").value.toLowerCase();
    console.log("User input:", userInput);

    for (let i = 1; i < data.table.rows.length; i++) {
        let name = data.table.rows[i].c[1].v.toLowerCase();
        if (name === userInput) {
            console.log("Match found for user input:", name);
            let output = data.table.rows[i].c[0].v;
            var a = document.getElementById('a');
            var b = document.getElementById('b');
            var c = document.getElementById('c');
            var d = document.getElementById('d');
            var e = document.getElementById('e');
            var f = document.getElementById('f');
            var email = document.getElementById('email');

            var tr = document.querySelector("tbody tr");
            tr.children[0].innerHTML = "NEW NAME";
            a.innerHTML = data.table.rows[i].c[2].v.toString();
            b.innerHTML = data.table.rows[i].c[3].v.toString();
            c.innerHTML = data.table.rows[i].c[4].v.toString();
            d.innerHTML = data.table.rows[i].c[5].v.toString();
            e.innerHTML = data.table.rows[i].c[6].v.toString();
            f.innerHTML = data.table.rows[i].c[7].v.toString();
            email.innerHTML = data.table.rows[i].c[8].v.toString();
            return; // Exit the loop after finding the first match
        }
    }

    console.log("No match found for user input:", userInput);
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready, initiating data fetch");
    fetch(FULL_URL)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            console.log("Data fetched successfully:", data);
            saveJSON(data);
        })
        .catch(error => console.error("Error fetching data:", error));
});
