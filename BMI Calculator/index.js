function calculate() {
    const msg = document.querySelector('#errormsg');
    const res = document.getElementById('displayValue');
 const p = document.getElementById('pound');
 const ee = document.getElementById('height');


if(isNaN(p.value) || isNaN(ee.value) && ee.value == 0 || p.value == 0) {
  msg.innerHTML = 'Enter Number and it should be atleast 1';
} else if(!p.value || !ee.value) {
  msg.innerHTML = 'you havent entered anything';
  
} else if(ee.value < 10 || p.value < 30) {
  msg.innerHTML = 'The minimum height(inches) is 10 and minimum weight(pounds) is 30'
}
else {
  return contend();
}

function contend() {
 const inc = {
   toCent(heights){
     return Math.pow((heights / 100 ),2);
   },
   toKilo(kilos){
     return kilos / 2.2046;
   },
   calc(kiloz,centimeters) {
     return kiloz / centimeters;
   }
 }
 let t = inc.toCent(ee.value);
 let g = inc.toKilo(p.value);
 let result = inc.calc(g,t).toFixed(2);
   res.innerHTML = result;
  return resetForms();
 }
 function resetForms() {
   p.value = '';
   ee.value = '';
   msg.innerHTML = '';
 }
  }