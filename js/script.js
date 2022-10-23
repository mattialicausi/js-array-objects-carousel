'use scrict';

/*
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
*/

//ARRAY IMG
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
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

//funzione per ciclare array ed inserire elementi in un nuovo array più specifico
const arrayUrl = images.map((value) => value.url);
//console.log(arrayUrl);

const arrayTitle = images.map((value) => value.title);
//console.log(arrayTitle);

const arrayDescription = images.map((value) => value.description);
//console.log(arrayDescription);


// funzione per creare layout dimanico
function creaLayout(){
    const layoutCreato = `
    <div id="my-container">
    <div class="contenitore-generale">
        <div class="img-top">
            <img class="img-corrente d-none" src="${arrayUrl[0]}" alt="">
            <img class="img-corrente d-none" src="${arrayUrl[1]}" alt="">
            <img class="img-corrente d-none" src="${arrayUrl[2]}" alt="">
            <img class="img-corrente d-none" src="${arrayUrl[3]}" alt="">
            <img class="img-corrente d-none" src="${arrayUrl[4]}" alt="">
            <div class="testo-luogo">
                <h1 class="titolo-corrente d-none">${arrayTitle[0]}</h1>
                <h1 class="titolo-corrente d-none">${arrayTitle[1]}</h1>
                <h1 class="titolo-corrente d-none">${arrayTitle[2]}</h1>
                <h1 class="titolo-corrente d-none">${arrayTitle[3]}</h1>
                <h1 class="titolo-corrente d-none">${arrayTitle[4]}</h1>

                <p class="testo-corrente d-none">${arrayDescription[0]}</p>
                <p class="testo-corrente d-none">${arrayDescription[1]}</p>
                <p class="testo-corrente d-none">${arrayDescription[2]}</p>
                <p class="testo-corrente d-none">${arrayDescription[3]}</p>
                <p class="testo-corrente d-none">${arrayDescription[4]}</p>
            </div>
        </div>
        <div class="img-bottom">
            <div class="row">
                <div class="col p-0 pb-0 img-icona">
                    <img class="img-carosello img-opaca"  src="${arrayUrl[0]}" alt="">
                    <div class="container-icon container-icon-left">
                        <i class="fa-solid fa-arrow-left"></i>
                    </div>
                </div>
                <div class="col p-0 pb-0"><img class="img-carosello img-opaca" src="${arrayUrl[1]}" alt=""></div>
                <div class="col p-0 pb-0"><img class="img-carosello img-opaca" src="${arrayUrl[2]}" alt=""></div>
                <div class="col p-0 pb-0"><img class="img-carosello img-opaca" src="${arrayUrl[3]}" alt=""></div>
                <div class="col p-0 pb-0 img-icona">
                    <img class="img-carosello img-opaca" src="${arrayUrl[4]}" alt="">
                    <div class="container-icon container-icon-right">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="container-buttons d-flex justify-content-center">
            <button id="btn-inverti-ordine" type="button" class="btn btn-primary m-2">Inverti l'ordine di scorrimento</button>
            <button id="btn-interrompi-scorrimento" type="button" class="btn btn-primary m-2">Interrompi lo scorrimento</button>
        </div>
    </div>
</div>
    `;

    contenitorePadre.innerHTML = layoutCreato;

}

//funzione per carosello img top
//arrayUrl.forEach(caroselloImgTop);
// arrayTitle.forEach(caroselloImgTop);
// arrayDescription.forEach(caroselloImgTop);

function caroselloImgTop(){
     let slider = 0;
    const immagini = document.querySelectorAll('.img-corrente');
    const titoli = document.querySelectorAll('.titolo-corrente');
    const testo = document.querySelectorAll('.testo-corrente');

    immagini[slider].classList.toggle('d-none');
    titoli[slider].classList.toggle('d-none');
    testo[slider].classList.toggle('d-none');

    function cicloTop(){
        if(slider < 4){
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
            slider++;
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
        } else{
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
            slider -= 4;
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
        }
       
    }

    const intervallo = setInterval(cicloTop, 3000);

// funzione al bottone per fermare lo scorrimento automatico img top
    const btnInterrompi = document.getElementById('btn-interrompi-scorrimento');
    btnInterrompi.addEventListener('click', function(){
    clearInterval(intervallo);
    })

    //funzione al bottone inverti scorrimento
    const btnInverti = document.getElementById('btn-inverti-ordine');
    btnInverti.addEventListener('click', cicloInverso);
    function cicloInverso(){
        clearInterval(intervallo);

        if(slider < 1){
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
                slider +=4;
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
        } else{
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
                slider --;
            immagini[slider].classList.toggle('d-none');
            titoli[slider].classList.toggle('d-none');
            testo[slider].classList.toggle('d-none');
        }
        setInterval(cicloInverso, 3000);
     
    }
    //-------------------------------------------------------------------------------------------------------------------
}

//funzione per creare carosello con evento dei tasti in img bottom
function caroselloImgBottom(){
    let slider = 0;
    const minore = 1;
    const maggiore = 3;
    const cards = document.querySelectorAll('.img-carosello');
    cards[slider].classList.toggle('img-opaca');
    const btnDestra = document.querySelector('.container-icon-right');
    btnDestra.addEventListener('click', scorriDestra);
    function scorriDestra(){
        
 
        if(slider > maggiore){
            cards[slider].classList.toggle('img-opaca');
                 slider -=4;
            cards[slider].classList.toggle('img-opaca');
        } else{
            cards[slider].classList.toggle('img-opaca');
                slider ++;
             cards[slider].classList.toggle('img-opaca');
        }
        //console.log('click a destra')
       
    }

    const btnSinistra = document.querySelector('.container-icon-left');
    btnSinistra.addEventListener('click', scorriSinistra);
    function scorriSinistra(){
      
        if(slider < minore){
            cards[slider].classList.toggle('img-opaca');
                slider +=4;
            cards[slider].classList.toggle('img-opaca');
        } else{
            cards[slider].classList.toggle('img-opaca');
                slider --;
            cards[slider].classList.toggle('img-opaca');
        }
        //console.log('click a sinistra')
    }
    const intervallo2 = setInterval(scorriDestra, 3000);

//funzione per far inverire senso scorrimento di img bottom al click sul bottone
    const btnInverti = document.getElementById('btn-inverti-ordine');
    btnInverti.addEventListener('click', cicloInversoImgBottom); 
    function cicloInversoImgBottom(){
        clearInterval(intervallo2);
        const intervalloInverso2 = setInterval(scorriSinistra, 3000);
    }
    //-------------------------------------------------------------------------------------------------------------------

    // funzione al bottone per fermare lo scorrimento automatico del carosello img bottom
    const btnInterrompi = document.getElementById('btn-interrompi-scorrimento');
    btnInterrompi.addEventListener('click', function(){
    clearInterval(intervallo2);
    })
    // btnInterrompi.addEventListener('click', function(){
    //     const intervallo2 = setInterval(scorriDestra, 3000);
    // })
    

    //funzione per selezionare img top tramite carosello bottom
    // cards.forEach(selezionaCard);
    // console.log(cards)
    
    // cards.addEventListener('click');
    
    // function selezionaCard(){

    //   if (cards[slider] == arrayUrl[slider]){
    //         immagini[slider].classList.toggle('d-none');
    //         titoli[slider].classList.toggle('d-none');
    //         testo[slider].classList.toggle('d-none');
    //   }
    // }

    //-------------------------------------------------------------------------------------------------------------------



}

// RICHIAMO FUNZIONI

creaLayout();
    caroselloImgTop();
    caroselloImgBottom();