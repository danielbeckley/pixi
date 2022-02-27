const button = document.getElementById('btn');

button.addEventListener('click', () => {
  getPolygonPoints();
});

// Create the application helper and add its render target to the page
let app = new PIXI.Application({ width: 420, height: 360, transparent: true });
const renderer = document.querySelector('.display');

renderer.appendChild(app.view);

const graphics = new PIXI.Graphics();

const getPolygonPoints = () => {
  fetch('http://localhost:8080/polygon')
    .then((res) => res.json())
    .then((data) => {
      const poly = new PIXI.Polygon(data[0].points);
      graphics.beginFill(0x5d0015);
      graphics.drawPolygon(poly);
      graphics.endFill();
      app.stage.addChild(graphics);
    })
    .catch((err) => console.error(err));
};
