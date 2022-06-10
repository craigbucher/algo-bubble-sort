var sequence = [4, 3, 5, 0, 1]
var swaps = 0

function bubbleSort(sequence){	
    let swaps = 0;	
    let iterations = 0;	
    for(let i = 0; i < sequence.length; i++){	
      for(let j = 0; j < ((sequence.length - i) - 1); j++){	
        iterations++	
        if(sequence[j] > sequence[j + 1]){	
          let temp = sequence[j];	
          sequence[j] = sequence[j + 1];	
          sequence[j + 1] = temp;	
          swaps++;        	
        }	
      }	
    }	
    return [sequence, swaps, iterations]	
  }

console.log(bubbleSort(sequence))
// console.log("Final result: " + result)
// console.log("Swaps: " + swaps)


// function bubbleSort(sequence){	
//     let swaps = 0;	
//     let iterations = 0;	
//     for(let i = 0; i < sequence.length; i++){	
//       let swapped = false;	
//       for(let j = 0; j < ((sequence.length - i) - 1); j++){	
//         iterations++	
//         if(sequence[j] > sequence[j + 1]){	
//           let temp = sequence[j];	
//           sequence[j] = sequence[j + 1];	
//           sequence[j + 1] = temp;	
//           swapped = true;	
//           swaps++;        	
//         }	
//         if (!swapped){	
//           break;	
//         }	
//       }	
//     }	
//     return [sequence, swaps, iterations]	
//   }