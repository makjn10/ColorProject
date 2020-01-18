var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
//selecting the span and updating the html
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//selecting the message display
var messageDisplay = document.getElementById("message");
//reset button
var reset = document.querySelector("#reset");
reset.addEventListener("click" , function(){
    resetfunc();
});

//easy and hard buttons
var modeBtns = document.querySelectorAll(".mode");
for(var i = 0 ; i < modeBtns.length ; i++){
    modeBtns[i].addEventListener("click" , function(){
        for(var j = 0 ; j < modeBtns.length ; j++){
            modeBtns[j].classList.remove("selected");
        }
        this.classList.add("selected");
        //figure out how many squares to show
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        resetfunc();
    });
}
function resetfunc(){
    reset.textContent = "New colors";
    //new colors array
    colors = generateRandomColors(numSquares);
    //pick a newcolor
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //fill squares with the colors
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }
    //change background color of h1
    h1.style.background = "steelblue";
    //remove text content of messageDisplay
    messageDisplay.textContent = "";
}
/*
easyBtn.addEventListener("click" , function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click" , function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
});
*/
//filling squares and adding click listeners
for(var i = 0 ; i < squares.length ; i++){
    //add initial colors
    squares[i].style.background = colors[i];
    //add click listeners
    squares[i].addEventListener("click" , function(){
        //grab color of clicked square and compare
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.background = pickedColor;
            reset.textContent = "Play again?";
        }
        else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again";
        }
    });
}

//changes the color of all the squares when we get the corect answer
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color;
    }
}
//picking a color
function pickColor(){
    //picking a random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
//generates array of random colors
function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num colors
    for(var i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }
    //return the array
    return arr;
}
function randomColor(){
    //pick 3 values from 0 to 255
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var returnColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return returnColor;
}
