const Servicios = document.querySelector("#Servicios")
const Servicios2 = document.querySelector("#Servicios2")
const Inicio = document.querySelector("#Inicio")
const Contactos = document.querySelector("#Contactos")


Servicios.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS=document.querySelector(".Servicios");
    sectionS.scrollIntoView({behavior: "smooth"});

})

Servicios2.addEventListener("click", (s2) => {
    s2.preventDefault();
    const sectionS2=document.querySelector(".Servicios");
    sectionS2.scrollIntoView({behavior: "smooth"});

})

Inicio.addEventListener("click", (i) => {
    i.preventDefault();
    const sectionI=document.querySelector(".Banner");
    sectionI.scrollIntoView({behavior: "smooth"});
})

Contactos.addEventListener("click", (c) => {
    c.preventDefault();
    const sectionC=document.querySelector(".Contactos");
    sectionC.scrollIntoView({behavior: "smooth"});
})
