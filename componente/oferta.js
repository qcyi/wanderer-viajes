class oferta extends HTMLElement {
  constructor() {
    super();
    this.fecha;
    this.destino;
    this.precio;
    this.imagen;
  }

  //7. Es posible añadir a la etiqueta atributos
  static get observedAttributes() {
    //nombres de los atributos
    return ["fecha", "destino", "precio", "imagen"];
  }

  //7. Sincroniza atributos con propiedades todo el rato
  get fecha() {
    return this.getAttribute("fecha");
  }
  set fecha(value) {
    this.setAttribute("fecha", value);
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
      case "fecha":
        this.fecha = newValue;
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
    this.innerHTML = `<div class="ofertCard">
                    <img src="${this.imagen}" class="ofertaImagen"></img>
                    <img src="./media/banner.png" class="ofertaImagen"></img>
                    <div class="ofertaDatos">
                    <p class="fecha">${this.fecha}</p>
                    <h3 class="destino">${this.destino}</h3>
                    <p class="fecha">desde</p>
                    <h3 class="precio">${this.precio}</h3>
                    </div>
                </div>`;
  }
}

window.customElements.define("oferta-new", oferta);
