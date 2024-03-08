class hotel extends HTMLElement {
  constructor() {
    super();
    this.desc;
    this.destino;
    this.precio;
    this.imagen;
  }

  //7. Es posible añadir a la etiqueta atributos
  static get observedAttributes() {
    //nombres de los atributos
    return ["desc", "destino", "precio", "imagen"];
  }

  //7. Sincroniza atributos con propiedades todo el rato
  get desc() {
    return this.getAttribute("desc");
  }
  set desc(value) {
    this.setAttribute("desc", value);
  }
  get destino() {
    return this.getAttribute("destino");
  }
  set destino(value) {
    this.setAttribute("destino", value);
  }
  get precio() {
    return this.getAttribute("precio");
  }
  set precio(value) {
    this.setAttribute("precio", value);
  }
  get imagen() {
    return this.getAttribute("imagen");
  }
  set imagen(value) {
    this.setAttribute("imagen", value);
  }

  //8. Mediante esta otra función, recuperaremos lo que
  //se establecen en los atributos de la etiqueta
  //pasará por argumentos, el valor de valores anteriores (por si sucede el cambio)
  attributeChangeCallback(nombreAtr, oldValue, newValue) {
    //To lower case para evitar errores de case sensitive
    switch (nombreAtr.toLowerCase()) {
      //10. Filtramos por nombreAtr y asignamos el valor
      case "desc":
        this.desc = newValue;
        break;
      case "destino":
        this.destino = newValue;
        break;
      case "precio":
        this.precio = newValue;
        break;
      case "imagen":
        this.imagen = newValue;
        break;
    }
  }

  //4. Editamos el componente
  connectedCallback() {
    //11. Integramos el valor de los atributos
    this.innerHTML = `<div class="hotelCard">
                    <div><img src="${this.imagen}" class="popularImagen"></img></div>
                    <div>
                    <h3 class="destinoPopular">${this.destino}</h3>
                    <p class="desc">${this.desc}</p>
                    <h3 class="precioPopular">${this.precio}</h3>
                    </div>
                    <button onclick="location.href='./hotel.html';">Reservar</button>
                </div>`;
  }
}

window.customElements.define("hotel-new", hotel);
