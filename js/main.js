var massiv1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
var massiv2 = [-1, -8, -2];
var massiv3 = [1, 7, 3];
var massiv4 = [1, undefined, 3, 5, -3];
var massiv5 = [1, NaN, 3, 5, -3];

function CustomMathOper (MathematicalOperation, massiv) {

  //creating a new array for action on it

  var newCustomMasive = [];
	
  for (var x = 0; massiv.length > x; x++) {

    newCustomMasive[x] = massiv[x]
  }


  if (MathematicalOperation == 'MaxNumber') {

    for (var i = 0; newCustomMasive.length > i; i++) {
		
      if(newCustomMasive[i] > newCustomMasive[0]){
		  
        newCustomMasive[0] = newCustomMasive[i];
		  
      }

    }
	  
    console.log(newCustomMasive[0]);

    } else if (MathematicalOperation == 'MinNumber') {


      for (var i = 0; newCustomMasive.length > i; i++) {
		  
        if(newCustomMasive[i] < newCustomMasive[0]){
			
          newCustomMasive[0] = newCustomMasive[i];
        }

      }
      console.log(newCustomMasive[0]);

    } else if (MathematicalOperation == 'SumNumbers') {


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

    } else {
		
        console.log('\'Зазначена Вами дія не передбачення інструкціями\'');

    }
	
}

console.log("Перелік максимальних відповідей масивів:");
CustomMathOper ('MaxNumber', massiv1);
CustomMathOper ('MaxNumber', massiv2);
CustomMathOper ('MaxNumber', massiv3);
CustomMathOper ('MaxNumber', massiv4);
CustomMathOper ('MaxNumber', massiv5);

console.log("Перелік мінімальних відповідей масивів:");
CustomMathOper ('MinNumber', massiv1);
CustomMathOper ('MinNumber', massiv2);
CustomMathOper ('MinNumber', massiv3);
CustomMathOper ('MinNumber', massiv4);
CustomMathOper ('MinNumber', massiv5);

console.log("Перелік сумарних відповідей масивів:");
CustomMathOper ('SumNumbers', massiv1);
CustomMathOper ('SumNumbers', massiv2);
CustomMathOper ('SumNumbers', massiv3);
CustomMathOper ('SumNumbers', massiv4);
CustomMathOper ('SumNumbers', massiv5);