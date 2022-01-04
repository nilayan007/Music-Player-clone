console.log("welcome to spotify");

let songindex = 0;
let audioeliment = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogress = document.getElementById("progress");
let gif = document.getElementById("gif");
let mastersonginfo = document.getElementById("mastersonginfo");
let songitems = Array.from(document.getElementsByClassName("songitem"));

let songs = [

  { nameofsongs: "Boys will be boys",   fileepath: "songs/1.mp3" , coverpath: "covers/cover.jpg"},
  { nameofsongs: "Break My Heart",      fileepath: "songs/2.mp3", coverpath: "covers/cover.jpg" },
 { nameofsongs: "Cool",                fileepath: "songs/3.mp3" , coverpath: "covers/cover.jpg"},
 { nameofsongs: "Dont Start Now",      fileepath: "songs/4.mp3" , coverpath: "covers/cover.jpg"},
 { nameofsongs: "Future Nostalgia",    fileepath: "songs/5.mp3", coverpath: "covers/cover.jpg" },
  { nameofsongs: "Good In Bed",         fileepath: "songs/6.mp3" , coverpath: "covers/cover.jpg"},
 { nameofsongs: "Hallucinate",         fileepath: "songs/7.mp3" , coverpath: "covers/cover.jpg"},
 { nameofsongs: "Levitating",          fileepath: "songs/8.mp3", coverpath: "covers/cover.jpg" },
  { nameofsongs: "Love Again",          fileepath: "songs/9.mp3" , coverpath: "covers/cover.jpg"},
  { nameofsongs: "Physical",            fileepath: "songs/10.mp3" , coverpath: "covers/cover.jpg"},
  { nameofsongs: "Pretty Please",       fileepath: "songs/11.mp3" , coverpath: "covers/cover.jpg"},

]
songitems.forEach((element , i)=>{
  

  
  element.getElementsByTagName("img")[0].src= songs[i].coverpath;
  element.getElementsByClassName("songnames")[0].innertext = songs[i].nameofsongs;


})



masterplay.addEventListener('click', () => {
  if (audioeliment.paused || audioeliment.currentTime <= 0) {
    audioeliment.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    gif.style.opacity = 1;

  }
  else {
    audioeliment.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
    gif.style.opacity = 0;

  }
})

audioeliment.addEventListener('timeupdate', () => {

  pro = parseInt((audioeliment.currentTime / audioeliment.duration) * 100);

  myprogress.value = pro;
})
myprogress.addEventListener('change', () => {

  audioeliment.currentTime = ((myprogress.value * audioeliment.duration) / 100)

})

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
  element.addEventListener('click',(e)=>{

    if (audioeliment.paused || audioeliment.currentTime <= 0) {
    //makeAllPlays();
   
    songindex = parseInt(e.target.id);
  
    audioeliment.src=`songs/${songindex+1}.mp3`;
    mastersonginfo.innerText = songs[songindex].nameofsongs;
    audioeliment.currentTime=0;
    audioeliment.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause'); 
   
    }
    else{
      audioeliment.pause();
    masterplay.classList.remove('fa-pause');
    masterplay.classList.add('fa-play');
    gif.style.opacity = 0;


    }

  })
})
document.getElementById("next").addEventListener("click",()=>{

  if(songindex>9){
    songindex=0;
  }
  else{
    songindex +=1;
  }
  audioeliment.src=`songs/${songindex+1}.mp3`;
  mastersonginfo.innerText = songs[songindex].nameofsongs;
    audioeliment.currentTime=0;
    audioeliment.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause'); 
   
})
document.getElementById("previous").addEventListener("click",()=>{

  if(songindex<=0){
    songindex=0;
  }
  else{
    songindex -=1;
  }
  audioeliment.src=`songs/${songindex+1}.mp3`;
  mastersonginfo.innerText = songs[songindex].nameofsongs;
    audioeliment.currentTime=0;
    audioeliment.play();
    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause'); 
   
})
