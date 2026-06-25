let counta=0
let countb=0
document.getElementById("a-score").textContent=counta
document.getElementById("b-score").textContent=countb
let score1El=document.getElementById("a-score")
let score2El=document.getElementById("b-score")
function one(){
    console.log("team-a")
    counta += 1
    score1El.textContent=counta
}
function four(){
    console.log("team-a")
    counta += 4
    score1El.textContent=counta
}
function six(){
    console.log("team-a")
    counta += 6
    score1El.textContent=counta
}

function one2(){
    console.log("team-b")
    countb += 1
    score2El.textContent=countb
}
function four2(){
    console.log("team-b")
    countb += 4
    score2El.textContent=countb
}
function six2(){
    console.log("team-b")
    countb += 6
    score2El.textContent=countb
}
