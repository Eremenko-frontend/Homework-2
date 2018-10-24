/* max number */

var massiv1 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var massiv2 = [-1,-8,-2];
var massiv3 = [1,7,3];
var massiv4 = [1,undefined,3,5,-3];
var massiv5 = [1,NaN,3,5,-3];

function customMaxNum (massiv) {
    var newCustomMasive = [];
    for (var x = 0; massiv.length > x; x++) {

        newCustomMasive[x] = massiv[x]
    }
    for (var i = 0; newCustomMasive.length > i; i++) {
        if(newCustomMasive[i] > newCustomMasive[0]){
            newCustomMasive[0] = newCustomMasive[i];
        }

    }
    console.log(newCustomMasive[0]);
}
console.log("Перелік максимальних відповідей масивів:");
customMaxNum (massiv1);
customMaxNum (massiv2);
customMaxNum (massiv3);
customMaxNum (massiv4);
customMaxNum (massiv5);

/* min number */

function customMinNum (massiv) {
    var newCustomMasive = [];
    for (var x = 0; massiv.length > x; x++) {

        newCustomMasive[x] = massiv[x]
    }
    for (var i = 0; newCustomMasive.length > i; i++) {
        if(newCustomMasive[i] < newCustomMasive[0]){
            newCustomMasive[0] = newCustomMasive[i];
        }

    }
    console.log(newCustomMasive[0]);
}
console.log("Перелік мінімальних відповідей масивів:");
customMinNum (massiv1);
customMinNum (massiv2);
customMinNum (massiv3);
customMinNum (massiv4);
customMinNum (massiv5);

/* sum number */

function customSum (massiv) {
    var newCustomMasive = [];
    for (var x = 0; massiv.length > x; x++) {

        newCustomMasive[x] = massiv[x]
    }
    var answerSum = 0;
    for (var i = 0; newCustomMasive.length > i; i++) {
        if (newCustomMasive[i] == undefined) {
            var changeType = newCustomMasive[i];
            newCustomMasive[i] = Boolean(changeType);
            newCustomMasive[i] = Number(newCustomMasive[i]);
        }

        if (isNaN(newCustomMasive[i])) {

            newCustomMasive[i] = 0;

        }
        answerSum = answerSum + newCustomMasive[i];



    }
    console.log(answerSum);
}
console.log("Перелік сумарних відповідей масивів:");
customSum (massiv1);
customSum (massiv2);
customSum (massiv3);
customSum (massiv4);
customSum (massiv5);



