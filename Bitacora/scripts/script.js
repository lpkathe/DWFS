
function alert(event) {
    //alert("Diste click en el botón");
    /*fetch(`https://cat-fact.herokuapp.com`)
        .then((response) => {
         alert("Diste click en el botón")
        });*/
    const image = document.querySelector('.image');
    image.src = 'https://cataas.com/cat';
}

function boton() {
    const botonAction = document.querySelector('btnAction');
    btnAction.addEventListener("click", alert);
}

boton();
