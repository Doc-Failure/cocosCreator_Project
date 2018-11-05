const {ccclass, property} = cc._decorator;
//Indicates if this is the first match
var isGameEnded = false;
@ccclass
export default class NewClass extends cc.Component {
  start() {
    if (!isGameEnded) {
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
    if (isGameEnded) {
     //if the player has lost restart the game 
      cc.game.restart();
    } else {
      //in the first match update the flag
      isGameEnded = true;
    }
    //deactivate the menù on click
    this.node.getParent().active = false;
  }
}
