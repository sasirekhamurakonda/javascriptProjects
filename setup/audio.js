let sounds=['bubbles.mp3','clay.mp3','confetti.mp3','corona.mp3','dotted-spiral.mp3','flash-1.mp3','flash-2.mp3','flash-3.mp3','glimmer.mp3','moon.mp3'];
let btn=document.getElementById("btn");

btn.addEventListener('click',()=>{
    let audio='sounds/';
    audio+=sounds[getRandomNumber()];
    var sound = new Howl({
        src: [audio]
      });
      
      sound.play();
});
getRandomNumber=()=>{
    return Math.floor(Math.random()*sounds.length);
}