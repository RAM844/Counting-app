//sudo code
//initialize the count to 0
//listen for clicks for buttuns here
//increment the count when it is clicked
//change the count-el in the html to reflect the new count



//listen for clicks for buttuns here
/* use onclick event listner in the button as attribute
<button id="increment-btn" onclick="here the functions that needs to be triggered is written">INCREMENT</button>
*/
let countEl=document.getElementById("count-el")
let count=0;
function increment() {
    count+=1;
    countEl.innerText = count;
  
}

//change the count-el in the html to reflect the new count

function decrement() {
    count-=1;
    countEl.innerText = count;

}
let arr=[];
function save() {
    console.log(count)
    
    arr.push(count)
    console.log(arr);
    document.getElementById("saved").innerText=arr;
    count=0;
    countEl.innerText=count;
    
}
function delet() {
    arr=[];
    document.getElementById("saved").innerText=0
    
}