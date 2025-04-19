
let dropdownBtn = document.getElementById("dropdownBtn");
 function selectUnit(unit){
    dropdownBtn.textContent = unit;
 };
 let convert = document.getElementById("convert");
 convert.addEventListener(`click` , function(){
     let userInput = document.getElementById("userInput").value;
   if(userInput === ""){
    alert('enter a number !')
   }else if(dropdownBtn.textContent === "fahrenheit"){
    let li = document.createElement("li");
    let tempList = document.getElementById("tempList");
    let result = (userInput * 9/5) + 32;
    li.textContent = `The ${userInput} calsius is equal to ${result} fahrenheit `
    tempList.appendChild(li);
   }else{
    let tempList = document.getElementById("tempList");
    let li = document.createElement("li");
    result = (userInput - 32) * 5/9;
    li.textContent = `The ${userInput} fahrenheit is equal to ${result} calsius `
    tempList.appendChild(li);
   }
 })


