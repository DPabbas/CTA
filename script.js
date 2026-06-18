// Position Size Elements
let risk = document.getElementById("risk");
let stop = document.getElementById("stop");
let rr = document.getElementById("rr");

// Calculate Position Size
function calculateSize() {

```
return Number(risk.value) /
       ((Number(stop.value) * 10) + 5);
```

}

// Main Trade Calculator
function calculateTrade() {

```
let size = calculateSize();

let grossProfit =
    Number(risk.value) * Number(rr.value);

let commission =
    size * 5;

let netProfit =
    grossProfit - commission;

// Position Size Output
let sizeRes =
    document.getElementById("sizeResult");

sizeRes.innerHTML =
    `Position Size: <strong>${size.toFixed(2)}</strong> Lot`;

sizeRes.classList.add("show");

// Profit Output
let profitRes =
    document.getElementById("profitAmount");

profitRes.innerHTML =
    `
    Gross Profit: ${grossProfit.toFixed(2)}$<br>
    Commission: ${commission.toFixed(2)}$<br>
    Net Profit: ${netProfit.toFixed(2)}$<br>
    Effective RR: ${(netProfit / Number(risk.value)).toFixed(2)}
    `;

profitRes.classList.add("show");
```

}

// Risk Amount Section
let margin = document.getElementById("margin");
let percent = document.getElementById("percent");

function riskManagment() {

```
let riskAmount =
    Number(margin.value) *
    (Number(percent.value) / 100);

let res =
    document.getElementById("riskResult");

res.innerText =
    `Risk Amount = ${riskAmount.toFixed(2)}$`;

res.classList.add("show");
```

}
