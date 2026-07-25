const input = document.getElementById("input");
const C = document.getElementById("Celsius");
const F = document.getElementById("Fahrenheit");
const K = document.getElementById("Kelvin");
const displays = document.querySelectorAll(".output");
const merc = document.getElementById("mercury");
C.addEventListener("click",function(){
    console.log("Celsius Conversion!");
        displays[0].value = Number(input.value);
        displays[1].value = ((Number(input.value)*(9/5)) + 32).toFixed(2);
        displays[2].value = (Number(input.value) + 273.15).toFixed(2);
        
        if(displays[0].value < 0)
        merc.style.height = "10%";
       else if (displays[0].value <= 5)
    merc.style.height = "14.5%";
else if (displays[0].value <= 10)
    merc.style.height = "19%";
else if (displays[0].value <= 15)
    merc.style.height = "23.5%";
else if (displays[0].value <= 20)
    merc.style.height = "28%";
else if (displays[0].value <= 25)
    merc.style.height = "32.5%";
else if (displays[0].value <= 30)
    merc.style.height = "37%";
else if (displays[0].value <= 35)
    merc.style.height = "41.5%";
else if (displays[0].value <= 40)
    merc.style.height = "46%";
else if (displays[0].value <= 45)
    merc.style.height = "50.5%";
else if (displays[0].value <= 50)
    merc.style.height = "55%";
else if (displays[0].value <= 55)
    merc.style.height = "59.5%";
else if (displays[0].value <= 60)
    merc.style.height = "64%";
else if (displays[0].value <= 65)
    merc.style.height = "68.5%";
else if (displays[0].value <= 70)
    merc.style.height = "73%";
else if (displays[0].value <= 75)
    merc.style.height = "77.5%";
else if (displays[0].value <= 80)
    merc.style.height = "82%";
else if (displays[0].value <= 85)
    merc.style.height = "86.5%";
else if (displays[0].value <= 90)
    merc.style.height = "91%";
else if (displays[0].value <= 95)
    merc.style.height = "95.5%";
else if (displays[0].value <= 100)
    merc.style.height = "99%";

    })

F.addEventListener("click",function(){
    console.log("Fahrenheit Conversion!");
    displays[0].value = (((Number(input.value)) - 32)* (5/9)).toFixed(2);
        displays[1].value = Number(input.value);
        displays[2].value = ((((Number(input.value)) - 32)* (5/9)) + 273.15).toFixed(2);

    if(displays[1].value < 0)
        merc.style.height = "10%";
       else if (displays[1].value <= 5)
    merc.style.height = "14.5%";
else if (displays[1].value <= 10)
    merc.style.height = "19%";
else if (displays[1].value <= 15)
    merc.style.height = "23.5%";
else if (displays[1].value <= 20)
    merc.style.height = "28%";
else if (displays[1].value <= 25)
    merc.style.height = "32.5%";
else if (displays[1].value <= 30)
    merc.style.height = "37%";
else if (displays[1].value <= 35)
    merc.style.height = "41.5%";
else if (displays[1].value <= 40)
    merc.style.height = "46%";
else if (displays[1].value <= 45)
    merc.style.height = "50.5%";
else if (displays[1].value <= 50)
    merc.style.height = "55%";
else if (displays[1].value <= 55)
    merc.style.height = "59.5%";
else if (displays[1].value <= 60)
    merc.style.height = "64%";
else if (displays[1].value <= 65)
    merc.style.height = "68.5%";
else if (displays[1].value <= 70)
    merc.style.height = "73%";
else if (displays[1].value <= 75)
    merc.style.height = "77.5%";
else if (displays[1].value <= 80)
    merc.style.height = "82%";
else if (displays[1].value <= 85)
    merc.style.height = "86.5%";
else if (displays[1].value <= 90)
    merc.style.height = "91%";
else if (displays[1].value <= 95)
    merc.style.height = "95.5%";
else if (displays[1].value <= 100)
    merc.style.height = "99%";

})

K.addEventListener("click",function(){
    console.log("Kelvin Conversion!");
    displays[0].value = (Number(input.value) - 273.15).toFixed(2);
        displays[1].value = (((Number(input.value) - 273.15) * (9/5)) + 32).toFixed(2);
        displays[2].value = Number(input.value);

    if(displays[2].value < 0)
        merc.style.height = "10%";
      else if (displays[2].value <= 5)
    merc.style.height = "14.5%";
else if (displays[2].value <= 10)
    merc.style.height = "19%";
else if (displays[2].value <= 15)
    merc.style.height = "23.5%";
else if (displays[2].value <= 20)
    merc.style.height = "28%";
else if (displays[2].value <= 25)
    merc.style.height = "32.5%";
else if (displays[2].value <= 30)
    merc.style.height = "37%";
else if (displays[2].value <= 35)
    merc.style.height = "41.5%";
else if (displays[2].value <= 40)
    merc.style.height = "46%";
else if (displays[2].value <= 45)
    merc.style.height = "50.5%";
else if (displays[2].value <= 50)
    merc.style.height = "55%";
else if (displays[2].value <= 55)
    merc.style.height = "59.5%";
else if (displays[2].value <= 60)
    merc.style.height = "64%";
else if (displays[2].value <= 65)
    merc.style.height = "68.5%";
else if (displays[2].value <= 70)
    merc.style.height = "73%";
else if (displays[2].value <= 75)
    merc.style.height = "77.5%";
else if (displays[2].value <= 80)
    merc.style.height = "82%";
else if (displays[2].value <= 85)
    merc.style.height = "86.5%";
else if (displays[2].value <= 90)
    merc.style.height = "91%";
else if (displays[2].value <= 95)
    merc.style.height = "95.5%";
else if (displays[2].value <= 100)
    merc.style.height = "99%";

})