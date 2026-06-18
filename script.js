function calculateTrade() {

    const risk =
        Number(document.getElementById("risk").value);

    const stop =
        Number(document.getElementById("stop").value);

    const rr =
        Number(document.getElementById("rr").value);

    if (!risk || !stop || !rr) {
        alert("Please fill all fields");
        return;
    }

    const positionSize =
        risk / ((stop * 10) + 5);

    const grossProfit =
        risk * rr;

    const commission =
        positionSize * 5;

    const netProfit =
        grossProfit - commission;

    const effectiveRR =
        netProfit / risk;

    document.getElementById("sizeResult").innerHTML =
        `Position Size: ${positionSize.toFixed(2)} Lot`;

    document.getElementById("profitResult").innerHTML =
        `
        Gross Profit: ${grossProfit.toFixed(2)}$<br>
        Commission: ${commission.toFixed(2)}$<br>
        Net Profit: ${netProfit.toFixed(2)}$<br>
        Effective RR: ${effectiveRR.toFixed(2)}
        `;

    document
        .getElementById("sizeResult")
        .classList.add("show");

    document
        .getElementById("profitResult")
        .classList.add("show");
}


function riskManagement() {

    const margin =
        Number(document.getElementById("margin").value);

    const percent =
        Number(document.getElementById("percent").value);

    const riskAmount =
        margin * (percent / 100);

    document.getElementById("riskResult").innerHTML =
        `Risk Amount: ${riskAmount.toFixed(2)}$`;

    document
        .getElementById("riskResult")
        .classList.add("show");
}
