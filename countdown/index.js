var countdownElement = document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');
var intialcountdownVal = countdownElement.innerHTML;
setInterval(function(){
    intialcountdownVal = intialcountdownVal > 0 ? intialcountdownVal - 1 : 0;
    countdownElement.innerHTML = intialcountdownVal;
    var backImgPath = intialcountdownVal % 2 === 0 ? 'samanth.jpg' : 'sarah.jpg'
    bgImageElement.src = backImgPath;
},1000);