
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


      async function bordermove(number) {
    for(let i = 0; i  <= number; i++){
        let mydiv = document.querySelectorAll(".coder-token")
        let numberdiv = mydiv[i].id
        if (coderList[numberdiv].life == false && i != number) {
            number ++
        }   
        if (coderList[numberdiv].life == true){
            mydiv[numberdiv].classList.add("selector") 
            setTimeout(() => {
                mydiv[numberdiv].classList.remove("selector")
            }, 300)
            await sleep(3000 / number);
        }
        if (coderList[numberdiv].life == false && i === number){
            mydiv[numberdiv].classList.add("selector") 
            setTimeout(() => {
            mydiv[numberdiv].classList.remove("selector")
            }, 600)
        }
    }
}
   
*/  
/*

const botonGo = document.querySelector("#btPlay")



function winner() {
    

    let coderList = [
        {
            name: "MARCOS",
            img: "Archivos/Marciano1.png",
            id: 0,
            life: true
        },
        {
            name: "MARGARITA",
            img: "Archivos/Marciano_3.png",
            id: 1,
            life: true
        },
        {
            name:"CLAUDETTE",
            img:"Archivos/Marciano_3.png",
            id:2,
            life: true
        },
        {
            name:"MAGDALENA",
            img:"Archivos/Marciano1.png",
            id:3,
            life: true
        },
        {
            name:"ALDARA",
            img:"Archivos/Marciano2.png",
            id:4,
            life: true
        },
        {
            name:"MARY",
            img:"Archivos/Marciano_3.png",
            id:5,
            life: true
        },
        {
            name:"ROCIO",
            img:"Archivos/Marciano1.png",
            id:6,
            life: true
        },
        {
            name:"CELE",
            img:"Archivos/Marciano2.png",
            id:7,
            life: true
        },
        {
            name:"ROSIMERY",
            img:"Archivos/Marciano_3.png",
            id:8,
            life: true
        },
        {
            name:"CARMEN",
            img:"Archivos/Marciano1.png",
            id:9,
            life: true
        },
        {
            name:"JENNIFER",
            img:"Archivos/Marciano2.png",
            id:10,
            life: true
        },
        {
            name:"DELIA",
            img:"Archivos/Marciano_3.png",
            id:11,
            life: true
        },
        {
            name:"NOHE",
            img:"Archivos/Marciano1.png",
            id:12,
            life: true
        },
        {
            name:"EVA",
            img:"Archivos/Marciano2.png",
            id:13,
            life: true
        },
        {
            name:"AINHOA",
            img:"Archivos/Marciano_3.png",
            id:14,
            life: true
        },
        {
            name:"MIRIAM",
            img:"Archivos/Marciano1.png",
            id:15,
            life: true
        },
        {
            name:"MILA",
            img:"Archivos/Marciano2.png",
            id:16,
            life: true
        },
        {
            name:"MARTA",
            img:"Archivos/Marciano_3.png",
            id:17,
            life: true
        },
        {
            name:"MARIA",
            img:"Archivos/Marciano1.png",
            id:18,
            life: true
        },
        {
            name:"ROSIBEL",
            img:"Archivos/Marciano2.png",
            id:19,
            life: true
        },
        {
            name:"ANYI",
            img:"Archivos/Marciano_3.png",
            id:20,
            life: true
        },
        {
            name:"CELIA",
            img:"Archivos/Marciano1.png",
            id:21,
            life: true
        },
        {
            name:"DIANA",
            img:"Archivos/Marciano2.png",
            id:22,
            life: true
        },
        {
            name:"ANA",
            img:"Archivos/Marciano_3.png",
            id:23,
            life: true
        },{
            name:"PAOLA",
            img:"Archivos/Marciano1.png",
            id:24,
            life: true
        },
        {
            name:"SERGIO",
            img:"Archivos/Marciano2.png",
            id:25,
            life: true
        },
        {
            name:"MIRIAN",
            img:"Archivos/Marciano_3.png",
            id:26,
            life: true
        },
    ];

    Math.floor(Math.random() * coderList.length - 1)+1;
    console.log(Math.floor((Math.random() * coderList.length - 1)+1));

}
botonGo.addEventListener("click", winner)


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

   
*/  



// AÑADIR PARTICIPANTE

/*let coderList = [
    {
        name: "MARCOS",
        img: "Archivos/Marciano1.png",
        id: 0,
        life: true
    },
    {
        name: "MARGARITA",
        img: "Archivos/Marciano2.png",
        id: 1,
        life: true
    },
    {
        name:"CLAUDETTE",
        img:"Archivos/Marciano_3.png",
        id:2,
        life: true
    },
    {
        name:"MAGDALENA",
        img:"Archivos/Marciano1.png",
        id:3,
        life: true
    },
    {
        name:"ALDARA",
        img:"Archivos/Marciano2.png",
        id:4,
        life: true
    },
    {
        name:"MARY",
        img:"Archivos/Marciano_3.png",
        id:5,
        life: true
    },
    {
        name:"ROCIO",
        img:"Archivos/Marciano1.png",
        id:6,
        life: true
    },
    {
        name:"CELE",
        img:"Archivos/Marciano2.png",
        id:7,
        life: true
    },
    {
        name:"ROSIMERY",
        img:"Archivos/Marciano_3.png",
        id:8,
        life: true
    },
    {
        name:"CARMEN",
        img:"Archivos/Marciano1.png",
        id:9,
        life: true
    },
    {
        name:"JENNIFER",
        img:"Archivos/Marciano2.png",
        id:10,
        life: true
    },
    {
        name:"DELIA",
        img:"Archivos/Marciano_3.png",
        id:11,
        life: true
    },
    {
        name:"NOHE",
        img:"Archivos/Marciano1.png",
        id:12,
        life: true
    },
    {
        name:"EVA",
        img:"Archivos/Marciano2.png",
        id:13,
        life: true
    },
    {
        name:"AINHOA",
        img:"Archivos/Marciano_3.png",
        id:14,
        life: true
    },
    {
        name:"MIRIAM",
        img:"Archivos/Marciano1.png",
        id:15,
        life: true
    },
    {
        name:"MILA",
        img:"Archivos/Marciano2.png",
        id:16,
        life: true
    },
    {
        name:"MARTA",
        img:"Archivos/Marciano_3.png",
        id:17,
        life: true
    },
    {
        name:"MARIA",
        img:"Archivos/Marciano1.png",
        id:18,
        life: true
    },
    {
        name:"ROSIBEL",
        img:"Archivos/Marciano2.png",
        id:19,
        life: true
    },
    {
        name:"ANYI",
        img:"Archivos/Marciano_3.png",
        id:20,
        life: true
    },
    {
        name:"CELIA",
        img:"Archivos/Marciano1.png",
        id:21,
        life: true
    },
    {
        name:"DIANA",
        img:"Archivos/Marciano2.png",
        id:22,
        life: true
    },
    {
        name:"ANA",
        img:"Archivos/Marciano_3.png",
        id:23,
        life: true
    },{
        name:"PAOLA",
        img:"Archivos/Marciano1.png",
        id:24,
        life: true
    },
    {
        name:"SERGIO",
        img:"Archivos/Marciano2.png",
        id:25,
        life: true
    },
    {
        name:"MIRIAN",
        img:"Archivos/Marciano_3.png",
        id:26,
        life: true
    },
];
for (let i = 0; i < coderList.length; i++){
    if (coderList[i].life === true) {
        coder += ``

for (let contador = 0; contador < coderList.length; contador++);
function change() {
    for (let contador = 0; contador < coderList.length; contador++);
    let articleElement = document.querySelector('article');
   
        articleElement.innerHTML += `<div class='coderList'><h1>${coderList[contador].name}</h1></div>`;

    
    



}




// BOTON TRASH

function renderCross() {
    let arrayDelete = document.querySelectorAll('.delete')
    for (let i=0; i<arrayDelete.length; i++) {
        if (arrayDelete[i].style.display == "none") {
            arrayDelete[i].style.display = "block";
        }
        else if (arrayDelete[i].style.display == "block") {
            arrayDelete[i].style.display = 'none';
        }
    }

}



document.querySelector("#btn-agregar").addEventListener("click", agregar);

function agregar() {
    let nombre = document.querySelector('#nombre').value;

    // agrego elemento al array
    array_players.push(nombre);
    console.log(array_players);

    // vaciar el input
    document.querySelector('#nombre').value = "";
    
}
*/