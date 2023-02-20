const firstRow = document.querySelector(".firstRow");
const secondRow = document.querySelector(".secondRow");
const thirdRow = document.querySelector(".thirdRow");



let arr = []

 function handleCLick(e) {
    if(e.target.style.backgroundColor === 'red')return;
   
    e.target.style.backgroundColor = 'red';
    arr.push(e.target)
    const count = checkForBackgroundColor(e);
  if (count === 7) {
        removeAllColors(arr);
    
    }
}

function checkForBackgroundColor() {
  let count = 0;
  for (let index = 0; index < firstRow.childElementCount; index++) {
    if (firstRow.children[index].style.backgroundColor ==='red') count++;

    // for second row
    if (index === 0) {
      if (secondRow.children[index].style.backgroundColor ==='red') count++;
    }

    if (thirdRow.children[index].style.backgroundColor ==='red') count++;
  }

  return count;
}

async function removeAllColors(arr) {

 
 let setIntervalId =  setInterval(() => {
 let firstEl = arr.shift();
   firstEl.style.backgroundColor = 'white'    
   if(arr.length ===0){
       clearInterval(setIntervalId)
   }
}, 1000);

}
