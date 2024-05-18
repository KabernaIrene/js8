//Напишіть функцію capitalizeStrings, яка приймає на вхід масив рядків і повертає новий масив, 
//у якому кожен рядок має першу літеру у верхньому регістрі, а решту літер - у нижньому регістрі.

const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings (arr) {

    const someArr = []

    for(let i = 0; i<arr.length; i++){
        
        let strArr = arr[i][0];
        someArr.push(strArr.toUpperCase() + arr[i].slice(1).toLowerCase())
    }

    arr = someArr

    console.log(arr)

}

capitalizeStrings(words)//console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]



//Напишіть функцію findCommonElements, яка приймає на вхід два масиви і повертає новий масив, 
//що містить елементи, які є в обох вихідних масивах.


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


function findCommonElements (arr1, arr2){
    const concatenetedArr = arr1.concat(arr2);
    console.log(concatenetedArr);


    const valuesArray = []

    for(let i = 0; i < concatenetedArr.length; i++){
      for(let j = 0; j < i; j++){
        if (concatenetedArr[j] === concatenetedArr[i]) {
          valuesArray.push(concatenetedArr[i])
      }
      }
    }

      return valuesArray;

}

console.log(findCommonElements(array1, array2)); // [3, 4, 5]


//Напишіть функцію analyzeArray, яка приймає на вхід масив чисел і повертає об'єкт з такими властивостями:
//sum - сума всіх елементів масиву
//average - середнє значення елементів масиву
//min - мінімальне значення в масиві
//max - максимальне значення в масиві

const numbers = [1, 2, 3, 4, 5];

function analyzeArray (arr){

    console.log(arr)

    const numbersData = new Object();

    let sum = 0;
    let average = 0;
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
      
        sum += arr[i]

        if(min > arr[i]){
          min = arr[i]
        } 
        
        if(max < arr[i]){
          max = arr[i]
        }
    }

    average = sum/arr.length

    numbersData.sum = sum;
    numbersData.average = average;
    numbersData.min = min;
    numbersData.max = max;

    console.log(numbersData)
    
}

analyzeArray(numbers); // { sum: 15, average: 3, min: 1, max: 5 }