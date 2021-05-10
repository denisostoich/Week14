var validation = document.querySelector('.validation');
var list = document.querySelector('.list');

var fieldsQuantity = function () {
    validation.style.display = 'flex';
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber == 3) {
        var fieldsNode = document.createElement("LI");
        var fieldsText = document.createTextNode('Input fields are correct');
        fieldsNode.appendChild(fieldsText);
        list.appendChild(fieldsNode);
    }
    else {
        var nFieldsNode = document.createElement("LI");
        var nFieldsText = document.createTextNode('There are missing inputs');
        nFieldsNode.appendChild(nFieldsText);
        list.appendChild(nFieldsNode)
    }
}
fieldsQuantity()

var validAnchor = function () {
    validation.style.display = 'flex';
    var anchor = document.querySelector('#form a').href;
    var validHref = 'register.html';
    if (anchor == validHref) {
        var anchorNode = document.createElement("LI");
        var anchorText = document.createTextNode('Anchor tag is valid');
        anchorNode.appendChild(anchorText);
        list.appendChild(anchorNode);
    }
    else {
        var nAnchorNode = document.createElement("LI");
        var nAnchorText = document.createTextNode('Anchor tag is invalid');
        nAnchorNode.appendChild(nAnchorText);
        list.appendChild(nAnchorNode);
    }
}
validAnchor();

var validBtns = function() {
    validation.style.display = 'flex';
    var submitBtn = document.querySelector('input[type="submit"]').value;
    var submitValue = 'Log in';
    if (submitBtn == submitValue) {
        var btnsNode = document.createElement("LI");
        var btnsText = document.createTextNode('Buttons content is correct');
        btnsNode.appendChild(btnsText);
        list.appendChild(btnsNode);
    }
    else {
        var nBtnsNode = document.createElement("LI");
        var nBtnsText = document.createTextNode('Buttons content is wrong');
        nBtnsNode.appendChild(nBtnsText);
        list.appendChild(nBtnsNode);
    }
}
validBtns();

var finalValidation = function () {
    if ((fieldsQuantity == true) && (validAnchor == true) && (validBtns == true)) {
        validation.style.display = 'flex';
        validation.style.color = 'green';
        validation.textContent = 'Every validation has passed';
    }
}
finalValidation();