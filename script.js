const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
let your_answer = document.querySelector("#your-answer")
let pc_answer = document.querySelector("#pc-answer")
let my_score = document.querySelector("#myscore")
let pc_score = document.querySelector("#pcscore")

const choose_rps =["Rock","Paper","Scissors"]

rock.addEventListener("click", function(){
    your_answer.textContent =""
    your_answer.textContent += "Your Answer: "
    your_answer.textContent += rock.textContent
    pc_answer.textContent = ""
    pc_answer.textContent += "PC Answer: " + choose_rps[Math.floor(Math.random()*3)]
    
    if (your_answer.textContent === "Your Answer: Rock" && pc_answer.textContent === "PC Answer: Scissors") {
        my_score.textContent = parseInt(my_score.textContent) + 1;
      }
      if (your_answer.textContent === "Your Answer: Rock" && pc_answer.textContent === "PC Answer: Paper") {
        pc_score.textContent = parseInt(pc_score.textContent) + 1;
      }
})
paper.addEventListener("click", function(){
    your_answer.textContent =""
    your_answer.textContent += "Your Answer: "
    your_answer.textContent += paper.textContent
    pc_answer.textContent = ""
    pc_answer.textContent += "PC Answer: " + choose_rps[Math.floor(Math.random()*3)]
    if (your_answer.textContent === "Your Answer: Paper" && pc_answer.textContent === "PC Answer: Rock") {
        my_score.textContent = parseInt(my_score.textContent) + 1;
      }
      if (your_answer.textContent === "Your Answer: Paper" && pc_answer.textContent === "PC Answer: Scissors") {
        pc_score.textContent = parseInt(pc_score.textContent) + 1;
      }
})
scissors.addEventListener("click", function(){
    your_answer.textContent =""
    your_answer.textContent += "Your Answer: "
    your_answer.textContent += scissors.textContent
    pc_answer.textContent = ""
    pc_answer.textContent += "PC Answer: " + choose_rps[Math.floor(Math.random()*3)]
    if (your_answer.textContent === "Your Answer: Scissors" && pc_answer.textContent === "PC Answer: Paper") {
        my_score.textContent = parseInt(my_score.textContent) + 1;
      }
      if (your_answer.textContent === "Your Answer: Scissors" && pc_answer.textContent === "PC Answer: Rock") {
        pc_score.textContent = parseInt(pc_score.textContent) + 1;
      }
})
