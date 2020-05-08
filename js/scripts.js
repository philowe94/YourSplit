function calculateYourSplit(totalPrice, subtotal, tax, tip) {
    return (totalPrice + (tax * (totalPrice / subtotal) + (tip * (totalPrice / subtotal))));
}

function submitButton() {
    var totalPrice = parseFloat(document.getElementById("totalPrice").value);
    var subtotal = parseFloat(document.getElementById("subtotal").value);
    var tax = parseFloat(document.getElementById("tax").value);
    var tip = parseFloat(document.getElementById("tip").value);

    var x = calculateYourSplit(totalPrice, subtotal, tax, tip)

    document.getElementById("yourSplitReturn").innerHTML = x;
}
