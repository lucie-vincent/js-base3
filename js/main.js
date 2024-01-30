let carre1 = document.querySelector("#carre1");
let carre2 = document.querySelector("#carre2");
let carre3 = document.querySelector("#carre3");
let carre4 = document.querySelector("#carre4");


function animerCarre(carre) {
    //changer la taille
    carre.style.width = "180px";
    carre.style.height = "180px";
    // rotate
    carre.style.transform = "rotate(360deg)";
    // carre.style = "transform: rotate(" + 0 + "360deg)";
    //changer la couleur
    carre.style.backgroundColor = "red";
}



carre1.addEventListener('click', function() {
    animerCarre(carre1);
});
carre2.addEventListener('click', function() {
    animerCarre(carre2);
});
carre3.addEventListener('click', function() {
    animerCarre(carre3);
});
carre4.addEventListener('click', function() {
    animerCarre(carre4);
});