var Text = document.getElementById("inputText").value;
var storeData = "";

var data = document.getElementById("listCheckBox");

var submitButton = document.getElementById("addButton");
console.log(Text);
submitButton.addEventListener("click", function() {
    storeData += "<li>" + Text + "</li>";
    data.innerText = storeData;
})