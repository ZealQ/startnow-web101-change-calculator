// all  variables id's in HTML 

var inputT = document.getElementById("amount-due");
var inputP = document.getElementById("amount-received");
var submitTl = document.getElementById("calculate-change");
var output = document.getElementById("output");

var dolr20 = document.getElementById("20-dollars-output");
var dolr10 = document.getElementById("10-dollars-output");
var dolr5 = document.getElementById("5-dollars-output");
var dolr2 = document.getElementById("2-dollars-output");
var dolr = document.getElementById("dollars-output");
var q = document.getElementById("quarters-output");
var d = document.getElementById("dimes-output");
var n = document.getElementById("nickels-output");
var p = document.getElementById("pennies-output");

// this function is the one that will set you total in to an array to  give money value
// the amount must be multiplied by 100 in order to later  give you desmial form
function money(amount) {
    return [2000, 1000, 500, 200, 100, 25, 10, 5, 1].map(function (money) {
        return [~~(amount / money), amount %= money][0];
    });
}

// my equation compiler
submitTl.onclick = function (e) {
    // parsefloat is for desmals parseint is whole numbers
    var total = parseFloat(inputT.value);
    var payed = parseFloat(inputP.value);
    // need to multiply inputs by 100 to make whole numbers
    var dm = Math.floor((total * 100) - (payed * 100));
    if(payed < total) {
       alert ("ERROR More Money")
    }
    // need to divided by 100 to get results in desmial
    output.innerHTML = Math.abs(dm / 100)
    // placement of  the 100 is importent as javaS reads left to right
    
    //this  array is  used  so that  the total can  pick the place the array and appoint it  to the total and value
    var result = money(Math.abs(dm));

         var ids = [
            dolr20,
            dolr10,
            dolr5,
            dolr2,
            dolr,
            q,
            d,
            n,
            p
        ];
        // this for loop helps pick in the array
        for(var i = 0; i < result.length; i++ ){
            ids[i].innerHTML = result[i]

        }    
        return(result);
};

