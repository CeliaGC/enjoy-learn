
let coderList = [
    {
        name: "MARCOS",
        img: "Archivos/marcianitas/Marciano1.png",
        id: 0,
        life: true
    },
    {
        name: "MARGARITA",
        img: "Archivos/marcianitas/Marciano2.png",
        id: 1,
        life: true
    },
    {
        name:"CLAUDETTE",
        img:"Archivos/marcianitas/Marciano3.png",
        id:2,
        life: true
    },
    {
        name:"MAGDALENA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:3,
        life: true
    },
    {
        name:"ALDARA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:4,
        life: true
    },
    {
        name:"MARY",
        img:"Archivos/marcianitas/Marciano3.png",
        id:5,
        life: true
    },
    {
        name:"ROCIO",
        img:"Archivos/marcianitas/Marciano1.png",
        id:6,
        life: true
    },
    {
        name:"CELE",
        img:"Archivos/marcianitas/Marciano2.png",
        id:7,
        life: true
    },
    {
        name:"ROSIMERY",
        img:"Archivos/marcianitas/Marciano3.png",
        id:8,
        life: true
    },
    {
        name:"CARMEN",
        img:"Archivos/marcianitas/Marciano1.png",
        id:9,
        life: true
    },
    {
        name:"JENNIFER",
        img:"Archivos/marcianitas/Marciano2.png",
        id:10,
        life: true
    },
    {
        name:"DELIA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:11,
        life: true
    },
    {
        name:"NOHE",
        img:"Archivos/marcianitas/Marciano1.png",
        id:12,
        life: true
    },
    {
        name:"EVA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:13,
        life: true
    },
    {
        name:"AINHOA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:14,
        life: true
    },
    {
        name:"MIRIAM",
        img:"Archivos/marcianitas/Marciano1.png",
        id:15,
        life: true
    },
    {
        name:"MILA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:16,
        life: true
    },
    {
        name:"MARTA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:17,
        life: true
    },
    {
        name:"MARIA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:18,
        life: true
    },
    {
        name:"ROSIBEL",
        img:"Archivos/marcianitas/Marciano2.png",
        id:19,
        life: true
    },
    {
        name:"ANYI",
        img:"Archivos/marcianitas/Marciano3.png",
        id:20,
        life: true
    },
    {
        name:"CELIA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:21,
        life: true
    },
    {
        name:"DIANA",
        img:"Archivos/marcianitas/Marciano2.png",
        id:22,
        life: true
    },
    {
        name:"ANA",
        img:"Archivos/marcianitas/Marciano3.png",
        id:23,
        life: true
    },{
        name:"PAOLA",
        img:"Archivos/marcianitas/Marciano1.png",
        id:24,
        life: true
    },
    {
        name:"SERGIO",
        img:"Archivos/marcianitas/Marciano2.png",
        id:25,
        life: true
    },
    {
        name:"MIRIAN",
        img:"Archivos/marcianitas/Marciano3.png",
        id:26,
        life: true
    }
];

let addMartian = document.getElementById('addMartian');


for (let i= 0; i < 27; i++) {
    var divElement = document.createElement("div");
    var imgElement = document.createElement("img");
    var pElement = document.createElement("p");

    divElement.id = "divItem" + (i + 1);
    imgElement.id = "hItem" + (i + 1);
    pElement.id = "pItem" + (i + 1);

     imgElement.innerHTML = `<img src='Archivos/marcianitas.png></img>`;
     pElement.innerText =  coderList.map(player => player.name);
        
    }


   addMartian.appendChild(divElement);
    divElement.appendChild(pElement);
    divElement.appendChild(imgElement);
   
   









/*function printCoders(array) {
    let codersPrinted = "";
    array.forEach(item => {
        codersPrinted += `<div class="ctCoders" data-set="${item.id}"><h2>${item.name}</h2>
    <img src="${item.img}" alt="freakCoder" class="freakCoder">
    <img src="img/telonCoders.jpg" alt="stage" class="stage">
    <img src="img/barril.png" alt ="barril" class="barril">
    <img src="img/telonClose.png" alt ="telon cerrado" class="telon">
    </div>`
    });

    document.querySelector(".ctFichas").innerHTML = codersPrinted;
};



function printPlayers(array) {
    coderList.forEach(player => {
        playersPrinted = `<article id="addMartian" data-set="${player.id}"><h2>${player.name}</h2>
        <img src="${player.img}" alt="martianList" class="martianList">`
    });
}
addMartian.innerHTML += `<div><h2>${name}</h2></div>`;

import { coderList } from "./Celia";
*/

 

// LA GARRA TE HA ELEGIDO 

/*

if(document.getElementById("btPlay")){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("btPlay");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}
*/
