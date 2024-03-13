//simple addition calc

// btn event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    //input
    let bill = document.getElementById("bill-in").value;
    let TipPercentage = document.getElementById("TipPercentage-in").value;
    //process
    let tip= (TipPercentage % bill);
    let GST= (5%bill);
    let total = (bill + tip + GST);
    //output
    document.getElementById("output1").innerHTML = tip;
    document.getElementById("output2").innerHTML = GST;
    document.getElementById("output3").innerHTML = total;
}