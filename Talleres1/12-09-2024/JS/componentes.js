class titleverdeUfpso extends HTMLElement{
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML= `<p>Bienvenidos a la UFPSO</p>`;
    this.style.color="green";
    this.style.fontFamily="arial";
    this.style.fontSize="50px";
    this.style.textDecorationLine="underline";
    this.style.fontWeight="bold";
    

}
}  
class buttoncarrito extends HTMLElement{
    constructor(){
        super();
    }
connectedCallback(){
    this.innerHTML="<button> Ir al carrito </button>";
    this.style.color="blue";
}

}

window.customElements.define("titleverde-ufpso", titleverdeUfpso)
window.customElements.define("button-carrito", buttoncarrito)