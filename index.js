var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomNumber2 = Math.floor((Math.random()*6))+1;
var im1="images/dice"+randomNumber1+".png";
var im2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute('src', im1);
document.querySelector(".img2").setAttribute('src', im2);
if(randomNumber1>randomNumber2){
document.querySelector('h1').innerHTML="🚩Player1 wins!";
}else if(randomNumber1<randomNumber2){
document.querySelector('h1').innerHTML="Player2 wins!🚩";
}else{
document.querySelector('h1').innerHTML="Draw!😕";  
}