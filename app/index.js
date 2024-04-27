export class Plant {
  #colorsForFlower = ['#f30325', '#b68347', '#23fa09', '#f67e52', '#f62496', '#1bb5fe','#c7495d', '#e58718', '#f2aa08', '#e0beb2'];
  #colorsForPot = ['#63c2bb','#b69864', '#5166a9', '#95411b','#9ba9a8','#e2d5be', '#5166a9', '#95411b'];

  constructor(potColor, flowerColor) {
    this.potColor = potColor ? potColor : this.#getColor(this.#colorsForPot);
    this.flowerColor = flowerColor ? flowerColor : this.#getColor(this.#colorsForFlower);
  }

  getPlant () {
    return `
     <svg width="280" height="280" viewBox="-20 -20 280 280" style="width: 100%; height: 100%" xmlns="http://www.w3.org/2000/svg">
    <!--Горшок-->
    <rect width="60" height="10" x="90" y="190" fill="${this.potColor}" />
    <rect width="70" height="10" x="85" y="180" fill="${this.potColor}" />
    <rect width="80" height="10" x="80" y="170" fill="${this.potColor}" />
    <rect width="90" height="10" x="75" y="160" fill="${this.potColor}" />
    <rect width="100" height="10" x="70" y="150" fill="${this.potColor}" />
    <rect width="110" height="10" x="65" y="140" fill="${this.potColor}" />

    <!--ствол кактуса-->
    <rect width="10" height="70" x="100" y="70" fill="green" />
    <rect width="10" height="80" x="110" y="60" fill="#00800087" />
    <rect width="10" height="90" x="120" y="50" fill="green" />
    <rect width="10" height="80" x="130" y="60" fill="#00800087" />
    <rect width="10" height="70" x="140" y="70" fill="green" />

    <!--левая ветка-->
    <rect width="40" height="10" x="60" y="90" fill="#00800087" />
    <rect width="30" height="10" x="70" y="100" fill="green" />
    <rect width="20" height="10" x="80" y="110" fill="green" />
    <rect width="10" height="40" x="60" y="50" fill="green" />
    <rect width="10" height="50" x="70" y="40" fill="#00800087" />
    <rect width="10" height="40" x="80" y="50" fill="green" />

    <!--правая ветка-->
    <rect width="40" height="10" x="150" y="90" fill="green" />
    <rect width="30" height="10" x="150" y="100" fill="green" />
    <rect width="20" height="10" x="150" y="110" fill="#00800087" />
    <rect width="10" height="30" x="160" y="70" fill="green" />
    <rect width="10" height="40" x="170" y="60" fill="#00800087" />
    <rect width="10" height="30" x="180" y="70" fill="green" />


    <!--цветочек на правой ветке-->
    <rect width="20" height="8"  x="168" y="75"  fill="${this.flowerColor}" />
    <rect width="8" height="20"  x="173" y="68"  fill="${this.flowerColor}" />
    <rect width="8" height="8"  x="173" y="75"  fill="yellow" />

    <!--цветочек на макушке-->
    <rect width="30" height="10"  x="110" y="75"  fill="${this.flowerColor}" />
    <rect width="10" height="30"  x="120" y="65"  fill="${this.flowerColor}" />
    <rect width="10" height="10"  x="120" y="75"  fill="yellow" />
  </svg>
    `
  }

  #getColor (colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }
}





const elems = document.querySelectorAll('.element-plant');

elems.forEach((elem)=> {
  elem.innerHTML = new Plant().getPlant();
})

export default Plant;
