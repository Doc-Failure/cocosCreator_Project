const {ccclass, property} = cc._decorator;

@ccclass
export default class BeeScript extends cc.Component {

  //Speed of the movement of the Bee
  duration: number = 0.3;
  
  yDistance: number = 230;
  xDistance: number = 220;
  //indicates the vertical direction of the Bee, if the Bee goes down it's -1, if the Bee goes up +1
  direction: number = -1;

  @property(cc.Node)
  leftFinger: cc.Node = null;
  @property(cc.Node)
  middleFinger: cc.Node = null;
  @property(cc.Node)
  rightFinger: cc.Node = null;
  @property(cc.Node)
  gameMind: cc.Node = null;

  update(_dt){
    this.moveBee();
    if(!this.leftFinger.getComponent('FingerManager').getIsFingerAlive() &&
        !this.middleFinger.getComponent('FingerManager').getIsFingerAlive() &&
          !this.rightFinger.getComponent('FingerManager').getIsFingerAlive()){
            this.gameMind.getComponent('Touch').setGameStatus(false);
    }
  }

  //xDirection = 1,2,3
  moveBee(xDirection?:number) {
    //If the Bee is in the bottom of the screen
    if (this.node.position.y <= -this.yDistance+50 && this.direction > 0) {
      //move the Bee to the top of the screen
      this.node.runAction(cc.moveTo(this.duration, 0, this.yDistance*1.8));
      this.direction = -1;
    }else{
      if(xDirection!=undefined){
        //if the bee is in the top of the screen
        if (this.node.position.y > 350) {
          //we choose which finger we need to sting
          //move the Bee to the bottom of the screen
          this.node.runAction(cc.moveTo(this.duration, cc.p(this.xDistance*xDirection, -this.yDistance)));
          //We increase the difficulty of the game
          this.direction = +1;
        }
      }
    }
  }
}
