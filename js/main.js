var customMassiv1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
var customMassiv2 = [-1, -8, -2];
var customMassiv3 = [1, 7, 3];
var customMassiv4 = [1, undefined, 3, 5, -3];
var customMassiv5 = [1, NaN, 3, 5, -3];

function customMathOper (mathematicalOperation, customMassiv) {

  //creating a new array for action on it

  var newCustomMasive = [];
	
  for (var x = 0; customMassiv.length > x; x++) {
    newCustomMasive[x] = customMassiv[x]
  }


  if (mathematicalOperation === 'MaxNumber') {

    for (var i = 0; newCustomMasive.length > i; i++) {
      if(newCustomMasive[i] > newCustomMasive[0]){
        newCustomMasive[0] = newCustomMasive[i];
      }
    }
	  
    console.log(newCustomMasive[0]);

    } else if (mathematicalOperation === 'MinNumber') {

      for (var i = 0; newCustomMasive.length > i; i++) {
        if(newCustomMasive[i] < newCustomMasive[0]){
          newCustomMasive[0] = newCustomMasive[i];
        }
      }
      console.log(newCustomMasive[0]);

    } else if (mathematicalOperation === 'SumNumbers') {

    var answerSum = 0;
		
    for (var i = 0; newCustomMasive.length > i; i++) {

      if (newCustomMasive[i] === undefined) {
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

    } else {
        console.log('\'Зазначена Вами дія не передбачення інструкціями\'');
    }
	
}

console.log("Перелік максимальних відповідей масивів:");
customMathOper ('MaxNumber', customMassiv1);
customMathOper ('MaxNumber', customMassiv2);
customMathOper ('MaxNumber', customMassiv3);
customMathOper ('MaxNumber', customMassiv4);
customMathOper ('MaxNumber', customMassiv5);

console.log("Перелік мінімальних відповідей масивів:");
customMathOper ('MinNumber', customMassiv1);
customMathOper ('MinNumber', customMassiv2);
customMathOper ('MinNumber', customMassiv3);
customMathOper ('MinNumber', customMassiv4);
customMathOper ('MinNumber', customMassiv5);

console.log("Перелік сумарних відповідей масивів:");
customMathOper ('SumNumbers', customMassiv1);
customMathOper ('SumNumbers', customMassiv2);
customMathOper ('SumNumbers', customMassiv3);
customMathOper ('SumNumbers', customMassiv4);
customMathOper ('SumNumbers', customMassiv5);