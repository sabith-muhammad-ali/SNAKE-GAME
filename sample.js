//-1-Varible Declaration.
let cvs=document.getElementById("canvas").getContext("2d");//getcontex use cheyth canvasil eth tharathillula drewing anno cheyyunath 2d,3d  yano aa oru contextn. 
let sPosx = 80;//snake position x-width
let sPosy = 80;//snake positon y-row
let nposx = 0;//next positin  x-width  snake countine ayit povan.
let nposy = 0;//next position y-row     ""        ""      ""     .
let fPosx = 140;//fruite position marran
let fPosy = 140;//fruite position marran
let snakeTail = [];//snake tail varan
let snakeSize = 1;
let score = 0;
let gameStatus = "Ready";




//-2-Onlod Function           // window in load fuction window open ayi verumbol ethokke functin run akkanam athin ann 
window.onload = function () {//onload is an event that's used to execute code when a web page or an image has finished loading in the browser. 
    document.addEventListener("keydown" ,inputControl );
    game=setInterval(mainGame,150);//setInterval is used to repeatedly execute a function at specified time intervals. 
}





//-3-Main Game Function

function mainGame(){
    document.getElementById("game-status").innerHTML=gameStatus;
    document.getElementById("score").innerHTML= score;

    //move snake
    sPosx += nposx;  //snake adth kalilek asign akkum
    sPosy += nposy;



    //control snake movement  ==== left endillode snake poyala snake right sidelode varan.
    if (sPosx > 400) {
        sPosx = 0;
    }

    if (sPosy > 400) {
        sPosy = 0;
    }
    // 0 lode poyal snake 400 varan
    if (sPosx < 0){
        sPosx = 400;
    }

    if (sPosy < 0){
        sPosy = 400;
    }



    //Game Area

   //Backround Color
   cvs.fillStyle = "black";//It specifies the fill color that will be applied to the interior of the drawn shapes. 
   cvs.fillRect(0, 0, 400, 400 );// It's a simple way to create solid-colored rectangles or shapes on the canvas.

    // gridLine
    for(let cl=0; cl<400; cl  += 20){
        cvs.moveTo(cl, 0);
        cvs.lineTo(cl ,400 );
    }

    for(let rl=0; rl<400; rl+= 20){
        cvs.moveTo(0, rl);
        cvs.lineTo(400 ,rl );
    }
    cvs.strokeStyle= "black";// strokeStyle property nnn line tte style mattan .color.
    cvs.stroke()//line varanulla function.


    // Snake
    cvs.fillStyle = "yellow";
    // cvs.fillRect(sPosx,sPosy,20,20);
    for(let i=0; i<snakeTail.length; i++){
        cvs.fillRect(
            snakeTail[i].x, snakeTail[i].y,20,20
        )
            //game over

            if(sPosx == snakeTail[i].x && sPosy == snakeTail[i].y && snakeSize > 1){
                clearInterval(game); //clear interval setinterval codutha karyam ellam stop akkum
                gameStatus = "Game over";
                document.getElementById("game-status").innerHTML = gameStatus;
            }

    }





    //Fruite
    cvs.fillStyle = "red"
    cvs.fillRect(fPosx,fPosy,20,20);
    

    //If snake eat Fruite
    if(sPosx == fPosx && sPosy == fPosy){
    snakeSize++;
    score += 1;
    fPosx = Math.floor(Math.random() * 20) * 20;
    fPosy = Math.floor(Math.random() * 20) * 20;
    }


    // snake tail add 
    snakeTail.push({ x: sPosx, y: sPosy});
    while(snakeTail.length > snakeSize){
        snakeTail.shift();
    }
    
    
}



//-4- Input Control Function
function inputControl(e){
    console.log(e.keyCode);// keyboard key tte valuse ariyan.
    console.log(e.key);// athe key ann press cheyunath ariyan.

    switch(e.keyCode){
        case 38:
            nposy -= 20;  //position marikond nikkan vendiyan nPosx,y kodukkunath.
            nposx=0;     // coract snake pokan position alingment crct akkan.
            //up
            break;
        case 40:
            nposy += 20;
            nposx=0;
            //down
            break;
        case 39:
            nposx += 20;
            nposy=0;
            //right 
            break;
        case 37:
            nposx -= 20;
            nposy=0;
            //left
            break;
    }
    if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
        gameStatus = "Game Started";
        document.getElementById("game-status").innerHTML = gameStatus;
    }
}