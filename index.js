var Player1 = (Math.floor((Math.random()) * 6)) + 1;
var Player2 = (Math.floor((Math.random()) * 6)) + 1;

if (Player1 > Player2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
    document.querySelector("h1").style.fontSize = "5rem";
}

else if (Player1 < Player2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
    document.querySelector("h1").style.fontSize = "5rem";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
    document.querySelector("h1").style.fontSize = "5rem";
}
if(Player1==1){
    document.querySelector(".img1").setAttribute("src", "dice1.png");
}
else if(Player1==2){
    document.querySelector(".img1").setAttribute("src", "dice2.png");
}
else if(Player1==3){
    document.querySelector(".img1").setAttribute("src", "dice3.png");
}
else if(Player1==4){
    document.querySelector(".img1").setAttribute("src", "dice4.png");
}
else if(Player1==5){
    document.querySelector(".img1").setAttribute("src", "dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src", "dice6.png");
}
if(Player2==1){
    document.querySelector(".img2").setAttribute("src", "dice1.png");
}
else if(Player2==2){
    document.querySelector(".img2").setAttribute("src", "dice2.png");
}
else if(Player2==3){
    document.querySelector(".img2").setAttribute("src", "dice3.png");
}
else if(Player2==4){
    document.querySelector(".img2").setAttribute("src", "dice4.png");
}
else if(Player2==5){
    document.querySelector(".img2").setAttribute("src", "dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src", "dice6.png");
}
document.querySelector(".img1").classList.add("size");
document.querySelector(".img2").classList.add("size");
