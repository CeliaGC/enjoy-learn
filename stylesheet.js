
/*let play = document.querySelector(".btPlay");
let contenedores = document.querySelectorAll(".player");
let María = document.querySelector('#María')



btPlay.addEventListener("click", ())=> {
    María.innerHtml 

    document.getElementById('María').style.background= "aquamarine"
    document.getElementById('María')
    
}

document.getElementById("capaVideo2").style.background="green" ;
document.getElementById("capaVideo").style.background="grey" ;


function functionplay() {}

function winner() {

    let nameList = document.querySelectorAll('.player');
    let players = [...nameList].map(element => element.textContent);
    let sort = Math.floor(Math.random() * players.length);
    let grabbed = document.querySelectorAll('.player').textContent;
    if(grabbed = sort) {
        grabbed.style.color = "green";
        
    } 

     let sort = Math.floor(Math.random() * players.length)
    console.log(sort)

    function winner() {
La buena:
    let nameList = document.querySelectorAll('.player');
    let players = [...nameList].map(element => element.textContent);
    return Math.floor((Math.random() * players.length - 1)+1);

}
}

let coderList = [
  {
    name: "Celia",
    id: 0,
    life: true
  },
  {
    name: "Diana",
    id: 1,
    life: true
  },
  {
      name:"Maria",
      id:2,
      life: true
  },
  {
      name:"Míriam",
      id:3,
      life: true
  },
  {
      name:"Anya",
      img:"Photos/cryptopunks/cp32.png",
      id:4,
      life: true
  },
  {
      name:"Alex",
      img:"Photos/cryptopunks/cp03.png",
      id:5,
      life: true
  },
  {
      name:"Bertha",
      img:"Photos/cryptopunks/cp11.png",
      id:6,
      life: true
  },
  {
      name:"Franco",
      img:"Photos/cryptopunks/cp16.png",
      id:7,
      life: true
  },
  {
      name:"Martin",
      img:"Photos/cryptopunks/cp17.png",
      id:8,
      life: true
  },
  {
      name:"Salomon",
      img:"Photos/cryptopunks/cp13.png",
      id:9,
      life: true
  },
  {
      name:"Amr",
      img:"Photos/cryptopunks/cp25.png",
      id:10,
      life: true
  },
  {
      name:"Andrea C",
      img:"Photos/cryptopunks/cp19.png",
      id:11,
      life: true
  },
  {
      name:"Andrea E",
      img:"Photos/cryptopunks/cp23.png",
      id:12,
      life: true
  },
  {
      name:"Jael",
      img:"Photos/cryptopunks/cp14.png",
      id:13,
      life: true
  },
  {
      name:"Jose",
      img:"Photos/cryptopunks/cp20.png",
      id:14,
      life: true
  },
  {
      name:"Sergio",
      img:"Photos/cryptopunks/cp08.png",
      id:15,
   
*/  

const botonGo = document.querySelector(".btPlay")

function winner() {

    let coderList = [
        {
          name: "Celia",
          id: 0,
          life: true
        },
        {
          name: "Diana",
          id: 1,
          life: true
        },
        {
            name:"Maria",
            id:2,
            life: true
        },
        {
            name:"Míriam",
            id:3,
            life: true
        },
    
    ]
    console.log(Math.floor((Math.random() * coderList.length - 1)+1));

}
botonGo.addEventListener("click", winner)


