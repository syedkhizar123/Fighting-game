function player1keys(){
    Swal.fire("Press d to move right<br>Press a to move left<br>Press s to fight ");
}
function player2keys(){
    Swal.fire("Press l to move right<br>Press j to move left<br>Press k to fight ");
}

var amon1move = 0;
var amon2move = 0;
window.onkeydown = function(){
    console.log(event.key)
    console.log(event.keyCode)
    if(event.keyCode === 68){
        amon1move += 15;
        document.getElementById("amon1").style.marginLeft = amon1move + "px"
    } else if(event.keyCode === 65){
        amon1move += -15
        document.getElementById("amon1").style.marginLeft = amon1move + "px"
    } else if(event.keyCode === 83){
        document.getElementById("amon1").src = "./amon-fight.gif"
        document.getElementById("amon1").classList.add("amon-fight")
        setTimeout(function(){
            document.getElementById("amon1").classList.remove("amon-fight")
            document.getElementById("amon1").src = "./amon.gif"
        },800)
    } else if (event.keyCode === 74){
        amon2move += 15
        document.getElementById("amon2").style.marginRight = amon2move + "px"
    } else if(event.keyCode === 76){
        amon2move += -15
        document.getElementById("amon2").style.marginRight = amon2move + "px"
    }  else if(event.keyCode === 75){
        document.getElementById("amon2").src = "./amon-2 fight.gif"
        document.getElementById("amon2").classList.add("amon-fight")
        setTimeout(function(){
            document.getElementById("amon2").classList.remove("amon-fight")
            document.getElementById("amon2").src = "./amon-2.gif"
        },800)
    }
}

