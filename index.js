const input = document.getElementById("inputText");
const container = document.getElementById("record-container");

let count = 0;
let records = [];


function addRecord(){
    if (input.value != null){  //has issue with empty string
        records[count] = addingCheckbox();
        count++;
    }

    container.appendChild(records[count-1]);
}


function addingCheckbox() {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "id" + count;
    newCheckbox.style.marginRight = "10px";

    return newCheckbox;
}