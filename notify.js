let btn = document.querySelector("#enter");
const display = document.querySelector('#celebrate');
btn.addEventListener("click",()=>{
    btn.style.display = "none";
    display.style.display = "flex";
    function show(){
        return new Promise((resolve)=>{
            display.innerHTML = "Loading....";
            setTimeout(()=>{
                resolve("Happy birthday");
            },3000)
        })
    }
    let song = new Audio("birthday.mp3");
    show().then((rlt)=>{
        display.innerHTML = rlt;
        celebrate();
        display.style.fontSize = "60px";
        song.play();
    });

});
const celebrate=()=>{
    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: .6 }
    });
}