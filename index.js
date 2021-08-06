const input = document.getElementById("inputText");
const container = document.getElementById("record-container");

let count = 0;
let records = [];


function addRecord() {

    let div = document.createElement('DIV');
    styleInternalConatainer(div);

    div.appendChild(checkbox());
    div.appendChild(to_doNote());
    input.value = ''; //after getting value make input field blank

    let crossIcon = div.appendChild(crossIconAdd()); //Delete Icon Added

    let recordText = container.appendChild(div); ///put all those values in container to list the data

    crossIcon.addEventListener("click", function() {
        recordText.style.display = "none";
    })
}

//function for internal Container Style
function styleInternalConatainer(div) {
    let divStyle = div.style;

    divStyle.fontSize = "35px";
    divStyle.width = "525px";
    divStyle.height = "50px";
    divStyle.border = "2px solid grey";
    divStyle.borderRadius = "5px";
    divStyle.marginBottom = "10px";
    divStyle.display = "flex";
    divStyle.alignItems = "center";
}

//function for took value from input field
function to_doNote() {
    let paragraph = document.createElement('P');
    if (input.value != "") { //if input field in not null 
        paragraph.textContent = input.value;
        return paragraph;
    } else { //if input field is null 
        alert("Input Filed Is Blank");
    }

}


//function for to create checkbox
function checkbox() {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "id" + count;
    newCheckbox.style.marginRight = "10px";

    return newCheckbox;
}


//function for delete button
function crossIconAdd() {
    let cross = document.createElement("div");
    styleCrossIcon(cross);
    cross.innerText = "❌";
    return cross;
}

//design delete button
function styleCrossIcon(cross) {
    let crossStyle = cross.style;
    crossStyle.color = "red";
    crossStyle.innerText = "Del";
    crossStyle.display = "flex";
    crossStyle.marginLeft = "auto";

}















//animation

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};