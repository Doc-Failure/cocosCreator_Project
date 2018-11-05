const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Label)
  lbl_score: cc.Label = null;

  //Speed of the movement of the Bee
  speed: number = 1;
  //indicates the vertical direction of the Bee, if the Bee goes down it's -1, if the Bee goes up +1
  direction: number = -1;
  //indicates the orizontal direction of the Bee, if the Bee goes to the right +1, if left -1 or 0 for the middle 
  Xdirection: number = 0;
  //Indicates how many times the bee has fallen
  score: number = 0;

  onLoad(){
      this.score=0;
  }

  update(dt) {
    //If the Bee is in the bottom of the screen
    if (this.node.position.y < -170 && this.direction > 0) {
      //move the Bee to the top of the screen
      this.node.runAction(cc.moveTo(this.speed, cc.p(0, 350)));
      this.direction = -1;
      //increase the score
      this.score+=1;
      this.lbl_score.string = 'Score: ' + this.score.toString();
    }
    //if the bee is in the top of the screen
    if (this.node.position.y > 300 && this.direction < 0) {
      //we choose which finger we need to sting
      this.Xdirection = Math.floor(Math.random() * 3) - 1;
      //move the Bee to the bottom of the screen
      this.node.runAction(cc.moveTo(this.speed, cc.p(256 * this.Xdirection, -220)));
      //We increase the difficulty of the game
      this.speed *= 0.95;
      this.direction = +1;
    }
  }
}
