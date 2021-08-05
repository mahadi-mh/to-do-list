const input = document.getElementById("inputText");
const container = document.getElementById("record-container");

let count = 0;
let records = [];


function addRecord() {
    let recordText = container.appendChild(internalConatiner()); //hold checkbox and the 
    recordText.addEventListener("click", function() {
        recordText.style.display = "none";
    })

}

function internalConatiner() {
    let div = document.createElement('DIV');
    styleInternalConatainer(div);

    div.appendChild(checkbox());
    div.appendChild(to_doNote());

    return div;
}


function styleInternalConatainer(div) {
    let divStyle = div.style;

    divStyle.width = "525px";
    divStyle.height = "50px";
    divStyle.border = "2px solid grey";
    divStyle.borderRadius = "5px";
    divStyle.marginBottom = "10px";
    divStyle.display = "flex";
    divStyle.alignItems = "center";
}


function to_doNote() {
    let paragraph = document.createElement('P');
    paragraph.textContent = input.value;

    return paragraph;
}



function checkbox() {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "id" + count;
    newCheckbox.style.marginRight = "10px";

    return newCheckbox;
}