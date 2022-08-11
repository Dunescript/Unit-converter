/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("conrvert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")



//parseFloat("123.456").toFixed(2)


inputEl.addEventListener("keyup",function(){
        lengthEl.textContent = `${inputEl.value} meters = ${parseFloat(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${parseFloat(inputEl.value/3.281).toFixed(3)} meters`
        
        volumeEl.textContent = `${inputEl.value} liters = ${parseFloat(inputEl.value*0.264).toFixed(3)} gallons  | ${inputEl.value} gallons  = ${parseFloat(inputEl.value/0.264).toFixed(3)} liters`
        
        massEl.textContent = `${inputEl.value} kilos  = ${parseFloat(inputEl.value*2.204).toFixed(3)} pounds  | ${inputEl.value} pounds  = ${parseFloat(inputEl.value/2.204).toFixed(3)} kilos `
    }
)


    


