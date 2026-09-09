function calculateTrade() {

    const risk = parseFloat(document.getElementById("risk").value);
    const stop = parseFloat(document.getElementById("stop").value);
    const rr = parseFloat(document.getElementById("rr").value);

    if (isNaN(risk) || isNaN(stop) || isNaN(rr)) return;

    const positionSize = risk / ((stop * 10) + 5);

    const grossProfit = risk * rr;
    const commission = positionSize * 5;
    const netProfit = grossProfit - commission;
    const effectiveRR = netProfit / risk;

    document.getElementById("sizeResult").innerHTML =
        `<strong>Position Size:</strong> ${positionSize.toFixed(2)} Lot`;

    document.getElementById("profitResult").innerHTML =
        `
        <strong>Gross Profit:</strong> $${grossProfit.toFixed(2)}<br>
        <strong>Commission:</strong> $${commission.toFixed(2)}<br>
        <strong>Net Profit:</strong> $${netProfit.toFixed(2)}<br>
        <strong>Effective RR:</strong> ${effectiveRR.toFixed(2)}
        `;
}

function riskManagement() {

    const margin = parseFloat(document.getElementById("margin").value);
    const percent = parseFloat(document.getElementById("percent").value);

    if (isNaN(margin) || isNaN(percent)) return;

    const riskAmount = margin * (percent / 100);

    document.getElementById("riskResult").innerHTML =
        `<strong>Risk Amount:</strong> $${riskAmount.toFixed(2)}`;
}

function calculateGoldTrade() {

    const risk = parseFloat(document.getElementById("goldRisk").value);
    const stop = parseFloat(document.getElementById("goldStop").value);
    const rr = parseFloat(document.getElementById("goldRR").value);

    if (isNaN(risk) || isNaN(stop) || isNaN(rr)) return;

    const lotSize = risk / ((stop * 100) + 5);

    const grossProfit = risk * rr;
    const commission = lotSize * 5;
    const netProfit = grossProfit - commission;
    const effectiveRR = netProfit / risk;

    document.getElementById("goldSizeResult").innerHTML =
        `<strong>Lot Size:</strong> ${lotSize.toFixed(2)} Lot`;

    document.getElementById("goldProfitResult").innerHTML =
        `
        <strong>Gross Profit:</strong> $${grossProfit.toFixed(2)}<br>
        <strong>Commission:</strong> $${commission.toFixed(2)}<br>
        <strong>Net Profit:</strong> $${netProfit.toFixed(2)}<br>
        <strong>Effective RR:</strong> ${effectiveRR.toFixed(2)}
        `;
}

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("risk")
        .addEventListener("input", calculateTrade);

    document.getElementById("stop")
        .addEventListener("input", calculateTrade);

    document.getElementById("rr")
        .addEventListener("input", calculateTrade);

    document.getElementById("margin")
        .addEventListener("input", riskManagement);

    document.getElementById("percent")
        .addEventListener("input", riskManagement);

    document.getElementById("goldRisk")
        .addEventListener("input", calculateGoldTrade);

    document.getElementById("goldStop")
        .addEventListener("input", calculateGoldTrade);

    document.getElementById("goldRR")
        .addEventListener("input", calculateGoldTrade);

    calculateTrade();
    riskManagement();
    calculateGoldTrade();
});
