/*let audios = [
    {
        songname: "Someone Like You",
        songartist: "Adele",
        songimg: "images/adelesong.jpg",
        song: "document.querySelector('.song')[0]"
        
    },
    {
        songname: "Faded",
        songartist: "Alan Walker",
        songimg: "images/images (11).jpeg",
        song: "document.querySelector(playsong"
    },
    {
        songname: "Holy Ground",
        songartist: "David ft Nicky Minaj",
        songimg: "images/images (8).jpeg",
        song: "document.querySelector('.song')[2]"
    },
    {
        songname: "Champion",
        songartist: "Fireboy DML",
        songimg: "images/images (14).jpeg",
        song: "document.querySelector('.song')[3]"
    },
    {
        songname: "Xtra Cool",
        songartist: "Young John",
        songimg: "images/images (11).jpeg",
        song: "document.querySelector('.song')[4]"
    },
    {
        songname: "Promises",
        songartist: "Maverick",
        songimg: "images/images (11).jpeg",
        song: "document.querySelector('.song')[5]"
    },
    {
        songname: "Gentility",
        songartist: "Melvitto",
        songimg: "images/images (11).jpeg",
        song: "document.querySelector('.song')[6]"
    }
]

//calling variables from DOM
let songs = document.querySelectorAll('.song')
let ctrlBtns = document.querySelectorAll(".featured-play")
let range = document.querySelector("#range")
let nextBtn = document.querySelector("#nextbtn")
let backbtn = document.querySelector("#backbtn")
let playsong = document.querySelector("#playbtn")

songs[0].onload = () => {
    range.max = songs[0].duration
    range.value = songs[0].currentTime
}

playsong.onclick = function () {
    if (playsong.classList.contains("fa-pause")) {
        songs[0].pause()
        playsong.classList.add("fa-play")
        playsong.classList.remove("fa-pause")
    } else {
        songs[0].play()
        playsong.classList.add("fa-pause")
        playsong.classList.remove("fa-play")

    }
}
    
*/

let homeBtn = document.querySelector("#home-btn")
let searchBtn = document.querySelector("#search-btn")
let libraryBtn = document.querySelector("#library-btn")
let homePage = document.querySelector(".home-page")
let searchPage = document.querySelector(".search-container")
let searchMainPage = document.querySelector(".search-expand-body")
let libraryPage = document.querySelector(".library-body")
let likedSongBody = document.querySelector(".liked-songs-body")
let mainPlayer = document.querySelector(".main-player-container")
let playerBottom = document.querySelector(".player-bottom-body")
let footerHome = document.querySelector("footer")



function displayHome(){
  homePage.style.display = "block"
  searchPage.style.display = "none"
  libraryPage.style.display = "none"
}




function displayLibrary(){
    searchPage.style.display = "none"
  homePage.style.display = "none"
  libraryPage.style.display = "block"
}

function displayLikedSongs() {
    likedSongBody.style.display = "block"
    homePage.style.display = "none"
    searchPage.style.display = "none"
    libraryPage.style.display = "none"

}

function displayPrevious() {
    likedSongBody.style.display = "none"
    homePage.style.display = "block"
    searchPage.style.display = "none"
    libraryPage.style.display = "none"
}

function displaySearchBox(){
    searchPage.style.display = "block"
    homePage.style.display = "none"
    libraryPage.style.display = "none"
    likedSongBody.style.display = "none"
  }


function displayMainPlayer() {
    mainPlayer.style.display = "block"
    searchPage.style.display = "none"
    homePage.style.display = "none"
    libraryPage.style.display = "none"
    likedSongBody.style.display = "none"
    playerBottom.style.display = "none"
    footerHome.style.display = "none"

}

function displayPlayerBottom() {
    playerBottom.style.style = "block"
    searchPage.style.display = "none"
    homePage.style.display = "block"
    libraryPage.style.display = "none"
    likedSongBody.style.display = "none"
    footerHome.style.display = "block"
    mainPlayer.style.display = "none"
}