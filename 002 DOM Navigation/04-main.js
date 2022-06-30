let table = document.querySelector("#statsTable");
let qSum1 = 0;

for (let i = 0; i < table.rows.length-1; i++) {
    qSum1 = Number(table.rows[i].cells[1].textContent);
    if (qSum1 > 100) {
        table.rows[i].style.backgroundColor = "#00ff33";
    } else {
        table.rows[i].style.backgroundColor = "#ff002a";
    }
}
