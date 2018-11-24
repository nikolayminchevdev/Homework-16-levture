function inputNumber(val)

{   var field = document.getElementById('phoneValidationResult');
    var number = val;
    if (number.length<6 || number.length>10) {field.innerHTML="NEVALIDEN";}
    else{
        field.innerHTML="VALIDEN";
    }
}