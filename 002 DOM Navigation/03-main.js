let table = document.querySelector("#statsTable");
let sum1 = document.querySelector("#department1");
let sum2 = document.querySelector("#department2");
let rst = document.querySelector("#result");
let qSum1 = 0;
let qSum2 = 0;

for (let i = 1; i < table.rows.length-1; i++) {
    qSum1 += Number(table.rows[i].cells[1].textContent);
    qSum2 += Number(table.rows[i].cells[2].textContent);
    sum1.innerHTML = qSum1;
    sum2.innerHTML = qSum2;
}
if (qSum1 > qSum2) {
    rst.innerHTML = "Отдел 1 сделал больше продаж";
} else {
    rst.innerHTML = "Отдел 2 сделал больше продаж";
}
