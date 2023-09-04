const outerCircle = document.querySelector(".outer-circle");
const needle = document.querySelector(".needle");
const label = document.querySelector(".label span");
const radioButtons = document.querySelectorAll('input[name="level"]');

function base(){
    outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgb(100, 100, 100), rgb(150, 150, 150),rgb(200, 200, 200))";
  needle.style.transform = "translate(-50%, -50%) rotate(-100deg)";
  label.textContent = "Level 0";
}
function beginner() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgb(234, 62, 62) 10%, rgb(150, 150, 150) 25%,rgb(200, 200, 200) 100%";
  needle.style.transform = "translate(-50%, -50%) rotate(-80deg)";
  label.textContent = "Beginner";
}
function intermediate() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgb(234, 62, 62) 10%, yellow 55%,rgb(200, 200, 200) 75%";
    needle.style.transform = "translate(-50%, -50%) rotate(0deg)";
  label.textContent = "Intermediate";
}
function expert() {
  outerCircle.style.backgroundImage =
    "linear-gradient(to right, rgb(234, 62, 62), yellow,rgb(13, 255, 0))";
  needle.style.transform = "translate(-50%, -50%) rotate(80deg)";
  label.textContent = "Expert";
}

radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", () => {
        changeLevel(radioButton.value);
    });
})

function changeLevel(value){
    if(value === "1"){
        beginner();
    }else if(value === "2"){
        intermediate();
    }else if(value === "3"){
        expert();
    }else{
        base();
    }
}