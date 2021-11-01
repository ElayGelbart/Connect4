import Connect4 from './model.js';
import View from './view.js';

class Controller {
  constructor() {
    this.model = new Connect4();
    this.view = new View();

    this.view.playEvent.addListener(move => { this.model.play(move); });

    this.model.updateCellEvent.addListener(data => { this.view.updateCell(data); });
    this.model.victoryEvent.addListener(winner => { this.view.victory(winner); });
    this.model.drawEvent.addListener(() => { this.view.draw(); });
  }

  run() {
    this.view.render();
  }
  type() {
    console.log("haha");
  }
}

export default Controller;