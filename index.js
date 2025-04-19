
  let dropdownBtn = document.getElementById("dropdownBtn");
  function selectUnit(unit){
      dropdownBtn.textContent = unit;
  };
  let convert = document.getElementById("convert");
  convert.addEventListener(`click` , function(){
      let userInput = document.getElementById("userInput").value;
      let number = parseFloat(userInput);
      
    if(userInput === "" || isNaN(number) ){
      alert('enter a number !')
    }else if(dropdownBtn.textContent.trim() === "select Temp"){
      alert("select a temperatur unit")
    }else if(dropdownBtn.textContent === "fahrenheit" ){
      let li = document.createElement("li");
      let tempList = document.getElementById("tempList");
      let result = ((number * 9/5) + 32).toFixed(2);
      li.textContent = `The ${number} celsius is equal to ${result} fahrenheit `
      tempList.appendChild(li);
    }else{
      let tempList = document.getElementById("tempList");
      let li = document.createElement("li");
      let result = ((number - 32) * 5/9).toFixed(2);
      li.textContent = `The ${number} fahrenheit is equal to ${result} celsius `
      tempList.appendChild(li);
    }
  })


