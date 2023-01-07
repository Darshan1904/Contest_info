if(screen.availWidth <= 425){
    let nav = document.getElementById("nav");
    nav.innerHTML =`
    <div class="container-fluid d-grid">
            <div><a class="navbar-brand fs-5 m-auto" id="home"><i class="fas fa-code"></i></a>/div>
            <div><a class="navbar-brand fs-5" id="codeforces">Codeforces</a></div>
            <div><a class="navbar-brand fs-5" id="codechef">Codechef</a></div>
            <div><a class="navbar-brand fs-5" id="hackerrank">Hacker Rank</a></div>
            <div><a class="navbar-brand fs-5" id="hackerearth">Hacker Earth</a></div>
    </div>`
}
else{
    let nav = document.getElementById("nav");
    nav.innerHTML =`
    <div class="container-fluid d-flex">
            <div><a class="navbar-brand fs-5" id="home"><i class="fas fa-code"></i></a></div>
            <div><a class="navbar-brand fs-5" id="codeforces">Codeforces</a></div>
            <div><a class="navbar-brand fs-5" id="codechef">Codechef</a></div>
            <div><a class="navbar-brand fs-5" id="hackerrank">Hacker Rank</a></div>
            <div><a class="navbar-brand fs-5" id="hackerearth">Hacker Earth</a></div>
    </div>`
}

const list = document.getElementById("list");
const codeforces = document.getElementById("codeforces");
const codechef = document.getElementById("codechef");
const hackerrank = document.getElementById("hackerrank");
const hackerearth = document.getElementById("hackerearth");
const home = document.getElementById("home");

let url = "https://kontests.net/api/v1/all"
let url1 = "https://kontests.net/api/v1/codeforces"
let url2 = "https://kontests.net/api/v1/code_chef"
let url3 = "https://kontests.net/api/v1/hacker_rank"
let url4 = "https://kontests.net/api/v1/hacker_earth"

const add = (url,img)=>{
    list.innerHTML=``;
    let responce = fetch(url);

    responce.then((v)=>{
        return v.json();
    }).then((v)=>{
        for(item in v){
            let d = Number.parseInt(v[item].duration);
            d = d/3600;
            d = Math.round(d);
            let date = "",time = "",edate="",etime="";
            for(let i=0; i<10; i++){
                date += v[item].start_time[i];
            }
            for(i=11; i<v[item].start_time.length-4; i++){
                time += v[item].start_time[i];
            }
            console.log(v[item]);
            list.innerHTML += `<div class="col" id="col">
            <div class="card" id="card">
            <img src="${img}" class="card-img-top" alt="..." id="img">
            <div class="card-body">
                <h4 class="card-title"><b>${v[item].name}</b></h4>
                <hr>
                <p class="card-text">Date : ${date}</p>
                <p class="card-text">Start Time : ${time} UTC</p>
                <p class="card-text">Duration : ${d} Hours</p>
                <button id="reg"><a href="${v[item].url}">Register <i class="fas fa-link"></i></a></button>
            </div>
            </div>
        </div>`;
        }
    })
}

let imgUrl = './img/img.jpg';
let imgUrl1 = './img/codeforces.jpg';
let imgUrl2 = './img/codechef.jpg';
let imgUrl3 = './img/hackerrank.jpg';
let imgUrl4 = './img/hackerearth.jpg';

codeforces.onclick = function(){
    add(url1,imgUrl1);
}

codechef.onclick = function(){
    add(url2,imgUrl2);
}

hackerrank.onclick = function(){
    add(url3,imgUrl3);
}

hackerearth.onclick = function(){
    add(url4,imgUrl4);
}

home.onclick = function(){
    add(url,imgUrl);
}

add(url,imgUrl);