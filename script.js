function calculateTrade() {

    const riskValue = document.getElementById("risk").value;
    const stopValue = document.getElementById("stop").value;
    const rrValue = document.getElementById("rr").value;

    if (!riskValue || !stopValue || !rrValue) {
        document.getElementById("sizeResult").innerHTML = "";
        document.getElementById("profitResult").innerHTML = "";
        return;
    }

    const risk = Number(riskValue);
    const stop = Number(stopValue);
    const rr = Number(rrValue);

    const positionSize = risk / ((stop * 10) + 5);

    const grossProfit = risk * rr;

    const commission = positionSize * 5;

    const netProfit = grossProfit - commission;

    const effectiveRR = netProfit / risk;

    document.getElementById("sizeResult").innerHTML = `
        Position Size: <strong>${positionSize.toFixed(2)} Lot</strong>
    `;

    document.getElementById("profitResult").innerHTML = `
        Gross Profit: ${grossProfit.toFixed(2)}$<br>
        Commission: ${commission.toFixed(2)}$<br>
        Net Profit: ${netProfit.toFixed(2)}$<br>
        Effective RR: ${effectiveRR.toFixed(2)}
    `;
}

function riskManagement() {

    const marginValue = document.getElementById("margin").value;
    const percentValue = document.getElementById("percent").value;

    if (!marginValue || !percentValue) {
        document.getElementById("riskResult").innerHTML = "";
        return;
    }

    const margin = Number(marginValue);
    const percent = Number(percentValue);

    const riskAmount = margin * (percent / 100);

    document.getElementById("riskResult").innerHTML = `
        Risk Amount: <strong>${riskAmount.toFixed(2)}$</strong>
    `;
}

document.addEventListener("DOMContentLoaded", () => {

    document
        .querySelectorAll("#risk, #stop, #rr")
        .forEach(input => {
            input.addEventListener("input", calculateTrade);
        });

    document
        .querySelectorAll("#margin, #percent")
        .forEach(input => {
            input.addEventListener("input", riskManagement);
        });

    calculateTrade();
    riskManagement();
});
