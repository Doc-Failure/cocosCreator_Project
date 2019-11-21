const {ccclass, property} = cc._decorator;
//Indicates if this is the first match
@ccclass
export default class GameMind extends cc.Component {
  isGameEnded: boolean = false;
  start() {
    if (!this.isGameEnded) {
      //if this is the first match I put the game in pause and show the menù
      cc.game.pause();
    } else {
      //else begin the match
      this.node.getParent().active = false;
    }
  }
  //handle the start button in the Menù
  onButtonClick() {
    cc.game.resume();
    if (this.isGameEnded) {
     //if the player has lost restart the game 
      cc.game.restart();
    } else {
      //in the first match update the flag
      this.isGameEnded = true;
    }
    //deactivate the menù on click
    this.node.getParent().active = false;
  }

  setGameState(gameState: boolean){
    this.node.getParent().active = true;
    this.isGameEnded=gameState;
    cc.game.pause();
  }
}
