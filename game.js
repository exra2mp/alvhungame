
let playerName1="";
let playerName2="";
let scoreP1 = 0;
let scoreP2 = 0;
let started = false;
let promptView = false;
let userChoice1 = "";
let userChoice2 = "";
let randomNumber= (Math.floor(Math.random ()*4)+1);
let playersButtons= $(".shape").length;
let backGaudio = new Audio("./public/backmusic/better"+randomNumber+".mp3");
let tieAudio= new Audio("./public/backmusic/iftie.mp3");

// pendiente revisar el porque de iteraciones de pvp luego de sobrepasar el marcador de 3
$(document).keypress(function(){
    if(!started){
        promptExe();
        $(".nam1").text("Player 1: "+playerName1);
        $(".nam2").text("Player 2: "+playerName2);
        $(".gameMod").text("Game Started");
        $(".sco1").text("Score P1: "+scoreP1);
        $(".sco2").text("Score P2: "+scoreP2);
        playSound();
        $(".gameStat").text("Make your choice");
        $("#ready").attr("src", "./images/fight1.gif");
        $(".imgP1").attr("src", "./images/standStill1.gif");
        $(".imgP2").attr("src", "./images/standStill2.gif");       
        started = true;
    }
})


$(document).keydown(function(event){
    choiceP1(event.key);
    choiceP2(event.key);
    btnAnimation(event.key);
    test(userChoice1, userChoice2);
    endgameCheck(scoreP1, scoreP2);
})


for(let i=0; i<playersButtons;i++){
    $(".shape").on("click", function(){
    let buttonText=$(this).text();
    choiceP1(buttonText.toLowerCase());
    choiceP2(buttonText);
    btnAnimation(buttonText);
    test(userChoice1, userChoice2);
    endgameCheck(scoreP1, scoreP2);
});
}

function playSound(){
    backGaudio.play();
}

function stopSound(){
    backGaudio.pause();
}

function btnAnimation (eventKey){
    const btnOptions = ["a", "s", "s", "1", "2", "3"]
    if(!btnOptions.includes(eventKey)) return null

    const activeBtnClass = `.${eventKey}`
    let activeBtn= $(activeBtnClass);
    activeBtn.addClass("pressed");
    setTimeout(function(){
        activeBtn.removeClass("pressed")
    }, 100);
}

function choiceP1(key) {
    switch(key){
        case "a":
            let rockS1= new Audio ("./public/sounds/rockReal.mp3");
            rockS1.play();
            $(".imgP1").attr("src", "./images/rock.gif");
            userChoice1 = "rock";
            if (playerName2 === "CPU"){
                cpuPlayer();
            }
            break;
    
        case "s":
            let paperS1 = new Audio ("./public/sounds/paperReal.mp3");
            paperS1.play();
            $(".imgP1").attr("src","./images/paper.gif");
            userChoice1 = "paper";
            if (playerName2 === "CPU"){
                cpuPlayer();
            }
            break;

        case "d":
            let scissorS1 = new Audio ("./public/sounds/scissors.mp3");
            scissorS1.play();
            $(".imgP1").attr("src","./images/scissors1.gif");
            userChoice1="scissor";
            if (playerName2 === "CPU"){
                cpuPlayer();
            }
            break;
            
            // default: console.log(key);
    }
}

function choiceP2(key){
    let imageURL = "";
    if(playerName2 === "CPU"){
        console.log("CPU Playing");
    }else{
    switch(key){
        case "1":
            imageURL = "./images/rock.gif"
            let rockS2= new Audio ("./public/sounds/rockReal.mp3");
            rockS2.play();
            $(".imgP2").attr("src", imageURL);
            userChoice2 = "rock";
            break;
        
        case "2":
            imageURL = "./images/paper2.gif"
            let paperS2 = new Audio ("./public/sounds/paperReal.mp3");
            paperS2.play();
            $(".imgP2").attr("src", imageURL);
            userChoice2 = "paper";
            break;
        
        case "3":
            imageURL = "./images/scissors2.gif"
            let scissorS2 = new Audio ("./public/sounds/scissors.mp3");
            scissorS2.play();
            userChoice2 = "scissor";
            $(".imgP2").attr("src", imageURL);
            break;    
        }
   }
}

function test(userChoice1,userChoice2){
    if (userChoice1 === "rock" && userChoice2 === "rock"){
        setTimeout(function(){ 
            $("#ready").attr("src", "./images/stovSton3.gif");
            $(".gameStat").text("Draw!!");},200);
        } else if (userChoice1 === "paper" && userChoice2 === "paper"){
            setTimeout(function(){
             $("#ready").attr("src", "./images/papvPapnew.gif");
             $(".gameStat").text("Draw!!");},200);
        } else if(userChoice1 === "scissor" && userChoice2 === "scissor"){
            setTimeout(function(){
             $("#ready").attr("src","./images/scissorf.gif");
             $(".gameStat").text("Draw!!");},200);
        } else if(userChoice1 === "rock" && userChoice2 === "scissor"){
           setTimeout(function(){
             $("#ready").attr("src","./images/rocVsciP13.gif")
             $(".gameStat").text("Player 1 Wins!!");},200); 
             scoreP1++;
             $(".sco1").text("Score P1: "+scoreP1);
        } else if(userChoice1 === "paper" && userChoice2 === "rock"){
            setTimeout(function(){
                $("#ready").attr("src", "./images/papvsto1.gif");
                $(".gameStat").text("Player 1 Wins!!");},200);
                scoreP1++;
                $(".sco1").text("Score P1: "+scoreP1);
        } else if(userChoice1 === "scissor" && userChoice2 === "paper"){
            setTimeout(function(){
                $("#ready").attr("src", "./images/scisVpap1.gif");
                $(".gameStat").text("Player 1 Wins!!");},200);
                scoreP1++;
                $(".sco1").text("Score P1: "+scoreP1);
        } else if (userChoice1 === "scissor" && userChoice2 === "rock"){
            setTimeout(function(){
                $("#ready").attr("src", "./images/rocVsciP23.gif");
                $(".gameStat").text("Player 2 Wins!!");},200);
                scoreP2++;
                $(".sco2").text("Score P2: "+scoreP2);
        } else if(userChoice1 === "rock" && userChoice2 === "paper"){
            setTimeout(function(){
                $("#ready").attr("src","./images/papvsto2.gif");
                $(".gameStat").text("Player 2 Wins!!");},200);
                scoreP2++;
                $(".sco2").text("Score P2: "+scoreP2);
        } else if(userChoice1 === "paper" && userChoice2 === "scissor"){
            setTimeout(function(){
                $("#ready").attr("src","./images/scisVpap2.gif");
                $(".gameStat").text("Player 2 Wins!!");},200);
                scoreP2++;
                $(".sco2").text("Score P2: "+scoreP2);
        } else{
            setTimeout(function(){
                $(".gameStat").text("Players Make Your Choice!!");},200);
        }
    }

function endgameCheck(scoreP1,scoreP2){
    
    if (scoreP1 === 3) {
        $(".gameMod").text("Player 1 is the Winner of the Game!!");
        $(".gameStat").text("Player 2 lose");
        $("#ready").attr("src","./images/endGam.gif");
        stopSound();
        let endingP1 = new Audio ("./public/backmusic/endGame1.mp3");
        endingP1.play();
        // startOver();
    } else if(scoreP2 === 3)  {
        $(".gameMod").text("Player 2 is the Winner of the Game!!");
        $(".gameStat").text("Player 1 lose");
        $("#ready").attr("src","./images/endGam.gif");
        stopSound();
        let endingP2 = new Audio ("./public/backmusic/endGame2.mp3");
        endingP2.play();
        // startOver();
    } else if(scoreP1 === 2 && scoreP2 === 2){
        stopSound();
        backGaudio = tieAudio;
        playSound();
        $(".gameStat").text("Anyone can Win!!");
    } else {
        $(".gameStat").text("Keep going!!"); 
    }
}

// pendiente verificar esta función, ya que se ha enfocado en crear el juego de pvp
function cpuPlayer(){
    let randomCpuCh= (Math.floor(Math.random ()*3)+1);
    let imageURL = "";
    if(randomCpuCh === 1){
        userChoice2 = "rock";
        imageURL = "./images/rock.gif"
        let rockS2= new Audio ("./public/sounds/rockReal.mp3");
        rockS2.play();
        $(".imgP2").attr("src", imageURL);
    } else if (randomCpuCh === 2){
        userChoice2 = "paper";
        imageURL = "./images/paper2.gif"
        let paperS2 = new Audio ("./public/sounds/paperReal.mp3");
        paperS2.play();
        $(".imgP2").attr("src", imageURL);
    } else { 
        userChoice2 = "scissor";
        imageURL = "./images/scissors2.gif"
        let scissorS2 = new Audio ("./public/sounds/scissors.mp3");
        scissorS2.play();
        $(".imgP2").attr("src", imageURL);
    }
}

function promptExe(){
    if(!promptView){
        playerName1= prompt("Write the name of Player 1");
        playerName2= prompt("Write the name of Player 2");
        promptView = true;
        };
}

// pendiente de activar el uso de esta funcion
function startOver() {
    playerName1="";
    playerName2="";
    scoreP1 = 0;
    scoreP2 = 0;
    started = false;
    promptView = false;
    userChoice1 = "";
    userChoice2 = "";
    randomNumber= (Math.floor(Math.random ()*4)+1);
    playersButtons= $(".shape").length;
    backGaudio = new Audio("./public/backmusic/better"+randomNumber+".mp3");
    tieAudio= new Audio("./public/backmusic/iftie.mp3");
}

