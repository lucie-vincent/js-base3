let carres = document.querySelectorAll(".carreVert");

// for...of  pour itérer un NodeList (querySelectorAll)
for (let carreIndex of carres) {
    carreIndex.addEventListener("click", () => {
        carreIndex.classList.toggle("carreRouge"); // pas de . avant carreRouge
    })
}

