let home = document.getElementById("score-home")
let guest = document.getElementById("score-guest")
let home_score=0
let guest_score=0
let period = document.getElementById('period-el')
let game_period=1

function incrementH1(){
  home_score+=1
  home.textContent = home_score
  updateLeader()
}
function incrementH2(){
  home_score+=2
  home.textContent = home_score
  updateLeader()
}
function incrementH3(){
  home_score+=3
  home.textContent = home_score
  updateLeader()
}

function incrementG1(){
  guest_score+=1
  guest.textContent = guest_score
  updateLeader()
}
function incrementG2(){
  guest_score+=2
  guest.textContent = guest_score
  updateLeader()
}
function incrementG3(){
  guest_score+=3
  guest.textContent = guest_score
  updateLeader()
}
function reset(){
  home_score = 0
  guest_score = 0
  home.textContent = 0
  guest.textContent = 0
  game_period+=1
  period.textContent = `Period: ${game_period}`
  updateLeader()
  
}

function updateLeader(){
if (home_score > guest_score){
  document.getElementById('leader').textContent="Leader: Home"
}
else if (guest_score > home_score){
  document.getElementById('leader').textContent = "Leader: Away"
}
else{
  document.getElementById('leader').textContent="Leader: Tie"
}
}

function submit(){
  winner = document.getElementById('leader').textContent
  alert(winner)
}