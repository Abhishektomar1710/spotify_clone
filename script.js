console.log("welcome to ")
//initialise the variabe 
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masteplay= document.getElementById('masterplay');
let progressBar = document.getElementById('ProgressBar');
let gif =document.getElementById('gif');
let mastersongname =document.getElementById('mastersongname');
let songItem =Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Aaj Din Chadheya", filePath:"songs/1.mp3",coverPath: "covers/aaj din.jpg"},
    {songName: "Agar Tum Saath Ho", filePath:"songs/2.mp3",coverPath: "covers/agar tum sath.jpg"},
    {songName: "Ek Tarfa", filePath:"songs/3.mp3",coverPath: "covers/ektarfa.jpg"},
    {songName: "Kaise Hua", filePath:"songs/4.mp3",coverPath: "covers/kese hua.jpg"},
    {songName: "Kun Faya Kun", filePath:"songs/5.mp3",coverPath: "covers/kun faya kun.png"},
    {songName: "Mann Mera", filePath:"songs/6.mp3",coverPath: "covers/mann mera.jpg"},
    {songName: "Mitti Di Khushboo", filePath:"7.mp3",coverPath: "covers/mitti di.jpg"},
    {songName: "Nazm Nazm", filePath:"songs/8.mp3",coverPath: "covers/nazm.jpg"},
    {songName: "Ranjha", filePath:"songs/9.mp3",coverPath: "covers/ranjha.png"},
    {songName: "Tere Sang Yaara", filePath:"songs/10.mp3",coverPath: "covers/tere sang.jpg"},
    {songName: "Tu Aake Dekhle", filePath:"songs/11.mp3",coverPath: "covers/tu aake dekhle.jpg"},
    {songName: "Tum Se Hi", filePath:"songs/12.mp3",coverPath: "covers/tum se hi.jpg"},
]
//add song name and cover
songItem.forEach((element, i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handele play pause click
masteplay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masteplay.classList.remove('fa-play-circle');
        masteplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masteplay.classList.remove('fa-pause-circle');
        masteplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})
//https://youtu.be/ANzPM5-lwXc?list=LL&t=3575
//update seek bar
audioElement.addEventListener('timeupdate', ()=>
{
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    ProgressBar.value = progress;
})
ProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
})


//change play and pause in song container list
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.target.classList.add('fa-play-circle');
    })
}

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(element)=>{
        
        // makeallplays();
        songindex = parseInt(element.target.id);
        console.log(element.target);
        element.target.classList.remove('fa-play-circle');
        element.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText= songs[songindex-1].songName;
        gif.style.opacity=1;
        console.log(songindex);
        audioElement.currentTime = 0;
        audioElement.play();
        masteplay.classList.remove('fa-play-circle');
        masteplay.classList.add('fa-pause-circle');
    })
    
})

// change and play
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=12){
        songindex =0;
    }
    else{
        songindex+=1;
        audioElement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText= songs[songindex-1].songName;
        gif.style.opacity=1;
        console.log(songindex);
        audioElement.currentTime = 0;
        audioElement.play();
        masteplay.classList.remove('fa-play-circle');
        masteplay.classList.add('fa-pause-circle');
    }
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex =0;
    }
    else{
        songindex-=1;
        audioElement.src = `songs/${songindex}.mp3`;
        mastersongname.innerText= songs[songindex-1].songName;
        gif.style.opacity=1;
        console.log(songindex);
        audioElement.currentTime = 0;
        audioElement.play();
        masteplay.classList.remove('fa-play-circle');
        masteplay.classList.add('fa-pause-circle');
    }
})




// https://youtu.be/ANzPM5-lwXc?list=LL&t=4923