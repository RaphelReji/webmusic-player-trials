let currentMusic=0;

const music=document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName=document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk=document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn=document.querySelector('.forward-btn');
const backwardBtn=document.querySelector('.backward-btn');

playBtn.addEventListener('click',()=>{
    if(playBtn.className.includes('pause')){
        music.play()
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause')
    disk.classList.toggle('play');
});


const setMusic= (i)=>{
    seekBar.value= 0;
    let song = songs[i];
    currentMusic=i;
    music.src=song.path;

    songName.innerHTML=song.name;
    artistName.innerHTML=song.artist;
    disk.style.backgroundImage=`url('${song.cover}')`;

    currentTime.innerHTML='00:00';
    setTimeout(()=>{
        seekBar.max=music.duration;
        musicDuration.innerHTML=formatTime(music.duration);
    },300);
}

setMusic(0);

//time in min sec formating
const formatTime=(time)=>{
    let min=Math.floor(time/60);
    if(min<10){
        min=`0${min}`;
    }
    let sec=Math.floor(time % 60);
    if(sec<10){
        sec=`0${sec}`;
    } 
     return `${min} :${sec}`;
}

//bar
setInterval(()=>{
    seekBar.value=music.currentTime;
    currentTime.innerHTML=formatTime(music.currentTime);
    if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
     forwardBtn.click();   
    }
},500)

seekBar.addEventListener('change',()=>{
    music.currentTime=seekBar.value;
})

const playMusic = ()=>{
    music.play()
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}
//front and back

forwardBtn.addEventListener('click',() =>{
    if(currentTime >= songs.length - 1){
        currentMusic=0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click',() =>{
    if(currentTime <= 0){
        currentMusic  = songs.length - 1;
    }else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})

const sidePanel = document.getElementById("sidePanel");
const sideOverlay = document.getElementById("sideOverlay");

function openSidePanel() {
    sidePanel.classList.add("active");
    sideOverlay.classList.add("active");
}

function closeSidePanel() {
    sidePanel.classList.remove("active");
    sideOverlay.classList.remove("active");
}


const root=document.documentElement;

document.querySelector("#white-theme-btn").onclick=()=>{
    root.style.setProperty("--bg","white")
    root.style.setProperty("--text-color","black")
    root.style.setProperty("--seek-bar-bg","black")
    root.style.setProperty("--musicplayer-bg","#f1ddc3")
    root.style.setProperty("--disk-center","red")
    root.style.setProperty("--seek-bar-flow","#f3d2aa")
    root.style.setProperty("--btn-bg","red")
    root.style.setProperty("--btn-span","#f3d2aa")
}

const addMonkeyBtn=document.getElementById("add-monkey-btn");
const monkeyBtn=document.getElementById("dancing-monkey-btn")
const monkey=document.getElementById("headphonemonkey");
monkeyBtn.addEventListener("click",function()
{
    if (monkey.style.display==="none"){
        monkey.style.display="block";
        addMonkeyBtn.textContent="remove";
    }

    else{
        monkey.style.display="none";
        addMonkeyBtn.textContent="add";
    }
}
);

const addDiscoBtn=document.getElementById("add-disco-btn");
const discoBtn=document.getElementById("dancing-disco-btn")
const disco=document.getElementById("partylight-gif");
discoBtn.addEventListener("click",function()
{
    if (disco.style.display==="none"){
        disco.style.display="block";
        addDiscoBtn.textContent="remove";
    }

    else{
        disco.style.display="none";
        addDiscoBtn.textContent="add";
    }
}
);

const addLightBtn=document.getElementById("add-light-btn");
const lightBtn=document.getElementById("dancing-light-btn")
const light=document.getElementById("light-gif");
lightBtn.addEventListener("click",function()
{
    if (light.style.display==="none"){
        light.style.display="block";
        addLightBtn.textContent="remove";
    }

    else{
        light.style.display="none";
        addLightBtn.textContent="add";
    }
}
);

const addNotesBtn=document.getElementById("add-notes-btn");
const notesBtn=document.getElementById("dancing-notes-btn")
const notes=document.getElementById("music-notes");
notesBtn.addEventListener("click",function()
{
    if (notes.style.display==="none"){
        notes.style.display="block";
        addNotesBtn.textContent="remove";
    }

    else{
        notes.style.display="none";
        addNotesBtn.textContent="add";
    }
}
);

const widgetsMain=document.getElementById("widgets-main");
const settingsMain=document.getElementById("Settings-main");
const settingsBtn=document.getElementById("appearance-select-stngs");
const widgetBtn=document.getElementById("appearance-select-wids");
settingsBtn.addEventListener("click",function(){
    settingsMain.style.display="block";
    widgetsMain.style.display="none";
});
widgetBtn.addEventListener("click",function(){
    widgetsMain.style.display="block";
    settingsMain.style.display="none";
});

const body=document.getElementById("body");
const pixelBg=document.getElementById("pixel-bg");
const carBg=document.getElementById("car-bg");
const jungleBg=document.getElementById("jungle-bg");
const nightBg=document.getElementById("night-bg");

pixelBg.addEventListener("click",function(){
body.style.backgroundImage="url(images/bluepixel.png)";
});

carBg.addEventListener("click",function(){
body.style.backgroundImage="url(images/car.png)";
});

jungleBg.addEventListener("click",function(){
body.style.backgroundImage="url(images/jungle.jpg)";
});

nightBg.addEventListener("click",function(){
body.style.backgroundImage="url(images/night.jpg)";
});

const signOutMsgCut=document.getElementById("login-close");
const signOutMsg=document.getElementById("login-yet-window")
const signOut=document.getElementById("sign-out-btn");
signOut.addEventListener("click",function(){
    setTimeout(() => {
        signOut.style.display="none";
        signOutMsg.style.display="block";
    }, 1000);

});
signOutMsgCut.addEventListener("click",function(){
    signOutMsg.style.display="none";
})