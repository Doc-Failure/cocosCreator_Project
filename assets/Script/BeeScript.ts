const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

  //Speed of the movement of the Bee
  @property
  duration: number = 0.1;
  
  yDistance: number = 220;
  @property
  xDistance: number = 400;
  //indicates the vertical direction of the Bee, if the Bee goes down it's -1, if the Bee goes up +1
  direction: number = -1;


  update(_dt){
    this.moveBee();
  }

  //xDirection = -1/0/1
  moveBee(xDirection?:number) {
    //If the Bee is in the bottom of the screen
    
     if(xDirection!=undefined){
      //if the bee is in the top of the screen
      //if (this.node.position.y > 300 && this.direction < 0) {
        //we choose which finger we need to sting
        //move the Bee to the bottom of the screen
        this.node.runAction(cc.moveTo(0.2, 0, -this.yDistance));
        //We increase the difficulty of the game
        this.direction = +1;
     // }
    }else{
      debugger;
      if (this.node.position.y <= -this.yDistance && this.direction > 0) {
        //move the Bee to the top of the screen
        this.node.runAction(cc.moveTo(0.2, 0, this.yDistance*1.8));
        this.direction = -1;
      } 
    }
  }
}
