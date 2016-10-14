document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('addBtn').addEventListener('click', myAdd);
    document.getElementById('subtractBtn').addEventListener('click', mySubtract);
    document.getElementById('multiplyBtn').addEventListener('click', myMultiply);
    document.getElementById('divideBtn').addEventListener('click', myDivide);

    function myAdd() {
       var x= document.getElementById('firstNum').value;
       var y= document.getElementById('secondNum').value;
    
    //add function
        davidsLib.add(x, y, function(err, result) {
            if (err) {
                alert ("A timeout has occurred");
            } else {
                alert (result);
            }
        });
    }

function mySubtract() {
    var x = document.getElementById('firstNum').value;
    var y=document.getElementById('secondNum').value;

    //subtract function
    davidsLib.subtract(x, y, function(err, result) {
        if (err) {
            alert ("A timeout has occurred");
        } else {
            alert (result);
        }
    });
}

function myMultiply() {
    var x = document.getElementById('firstNum').value;
    var y=document.getElementById('secondNum').value;

    //multiply function
    davidsLib.multiply(x, y, function(err, result) {
        if (err) {
            alert ("A timeout has occurred");
        } else {
            alert (result);
        }
    });

}

function myDivide() {
    var x = document.getElementById('firstNum').value;
    var y=document.getElementById('secondNum').value;

    //multiply function
    davidsLib.divide(x, y, function(err, result) {
        if (err) {
            alert ("A timeout has occurred");
        } else {
            alert (result);
        }
    });

}
//ending tag for page
});