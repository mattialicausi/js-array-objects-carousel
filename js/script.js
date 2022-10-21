'use scrict';

/*
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
*/
/*
<div id="my-container">
            <div class="contenitore-generale">
                <div class="img-top">
                    <img class="img-corrente" src="" alt="">
                    <div class="testo-luogo">
                        <h1>INSERIRE TITLE</h1>
                        <p>INSERIRE DESCRIPTION</p>
                    </div>
                </div>
                <div class="img-bottom">
                    <div class="row">
                        <div class="col p-0 pb-0 img-icona">
                            <img class="img-carosello" src="INSERIRE URL" alt="">
                            <div class="container-icon container-icon-left">
                                <i class="fa-solid fa-arrow-left"></i>
                            </div>
                        </div>
                        <div class="col p-0 pb-0"><img class="img-carosello" src="INSERIRE URL" alt=""></div>
                        <div class="col p-0 pb-0"><img class="img-carosello" src="INSERIRE URL" alt=""></div>
                        <div class="col p-0 pb-0"><img class="img-carosello" src="INSERIRE URL" alt=""></div>
                        <div class="col p-0 pb-0 img-icona">
                            <img class="img-carosello" src="INSERIRE URL" alt="">
                            <div class="container-icon container-icon-right">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="container-buttons d-flex justify-content-center">
                    <button type="button" class="btn btn-primary m-2">Inverti l'ordine di scorrimento</button>
                    <button type="button" class="btn btn-primary m-2">Interrompi lo scorrimento</button>
                </div>
            </div>
        </div>
*/

//ARRAY IMG
const images = [
    {
        'url': 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        'title': 'Svezia',
        'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        'url': 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        'title': 'Perù',
        'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        'url': 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        'title': 'Chile',
        'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        'url': 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        'title': 'Argentina',
        'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
       ' url': 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        'title': 'Colombia',
        'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// OGGETTI PRESI DA HTML
const contenitorePadre = document.getElementById('contenitore-padre');

// TUTTE LE FUNZIONI

// funzione per visualizzare valori e indici dell'array in console
images.forEach(stampafoto);
    function stampafoto(valori){
        // console.log(valori.url);
        // console.log(valori.title);
        // console.log(valori.description);
    }

//funzione per ciclare gli elementi dell'array
function ciclaArray(){
    images.forEach(ciclaInfo);
    function ciclaInfo(valoriInfo){
        let linkFoto = valoriInfo.url;
        let titolo = valoriInfo.title;
        let descrizioneFoto = valoriInfo.description;
    }  
}

//funzione per ciclare array ed inserire elementi in un nuovo array
const arrayUrl = images.map((value) => value.url);
console.log(arrayUrl);

const arrayTitle = images.map((value) => value.title);
console.log(arrayTitle);

const arrayDescription = images.map((value) => value.description);
console.log(arrayDescription);


// funzione per creare layout dimanico
function creaLayout(){
    const layoutCreato = `
    <div id="my-container">
    <div class="contenitore-generale">
        <div class="img-top">
            <img class="img-corrente" src="" alt="">
            <div class="testo-luogo">
                <h1>${arrayTitle[0]}</h1>
                <p>${arrayDescription[0]}</p>
            </div>
        </div>
        <div class="img-bottom">
            <div class="row">
                <div class="col p-0 pb-0 img-icona">
                    <img class="img-carosello" src="${arrayUrl[0]}" alt="">
                    <div class="container-icon container-icon-left">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                </div>
                <div class="col p-0 pb-0"><img class="img-carosello" src="${arrayUrl[1]}" alt=""></div>
                <div class="col p-0 pb-0"><img class="img-carosello" src="${arrayUrl[2]}" alt=""></div>
                <div class="col p-0 pb-0"><img class="img-carosello" src="${arrayUrl[3]}" alt=""></div>
                <div class="col p-0 pb-0 img-icona">
                    <img class="img-carosello" src="${arrayUrl[4]}" alt="">
                    <div class="container-icon container-icon-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="container-buttons d-flex justify-content-center">
            <button type="button" class="btn btn-primary m-2">Inverti l'ordine di scorrimento</button>
            <button type="button" class="btn btn-primary m-2">Interrompi lo scorrimento</button>
        </div>
    </div>
</div>
    `;

    contenitorePadre.append(layoutCreato);
}

// RICHIAMO FUNZIONI

creaLayout();
