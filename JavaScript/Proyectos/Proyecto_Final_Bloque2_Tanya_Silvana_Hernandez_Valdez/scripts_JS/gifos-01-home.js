
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10 ) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
});

let a=document.getElementById('enlace');
a.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href="gifos-05-favoritos.html",1000);
});

let a1=document.getElementById('enlacegif');
a1.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href="gifos-07-mis-gifos.html",1000);
});

let a2=document.getElementById('enlace-crear');
a2.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
  setTimeout(()=> location.href="gifos-09-crear-gifos-1.html",1000);
});

//Conexión a la API
let imgCtn2 = document.getElementById("galeria");

async function getDogImg() {
    let api = "https://api.giphy.com/v1/gifs/search?";
    let apiKey = "&dc6zaTOxFJmzC";
    let query = "&q=rainbow";
    let url = api + apiKey + query;
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
};


let dog = getDogImg();

dog.then(data => {
    var imgPath = json.data[0].images.fixed_height.url;
    var img = document.createElement('img');
    img.setAttribute("src", imgPath);
    imgCtn2.appendChild(img);
}).catch(err => {
    console.error('fetch failed', err);
});