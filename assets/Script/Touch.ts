const {ccclass, property} = cc._decorator;

@ccclass
export default class Touch extends cc.Component {
  @property(cc.Node)
  canvas: cc.Node = null;

  @property(cc.Node)
  beeManager: cc.Node = null;
  @property(cc.Node)
  fingersManager: cc.Node = null;
  
  isGameOn: boolean=false;

  onLoad() {
    var self = this;
    //self.moveToPos = cc.p(0, 0);
    self.canvas.on(cc.Node.EventType.TOUCH_START, (event) => this.onTouch(event), self.node);
    //cc.game.pause();
  }

  onTouch(event){
    if(!this.isGameOn){
      this.isGameOn=true;
      this.fingersManager.getChildByName('leftFinger').getComponent('FingerManager').setFingerLive(true);
      this.fingersManager.getChildByName('middleFinger').getComponent('FingerManager').setFingerLive(true);
      this.fingersManager.getChildByName('rightFinger').getComponent('FingerManager').setFingerLive(true);
      //Fare il restart se tutte le dita sono morte
      cc.game.resume();
    } 
    if(event.getLocation().x < cc.view.getCanvasSize().width / 3){
      this.beeManager.getComponent('BeeScript').moveBee(-1);
    }else if( event.getLocation().x > cc.view.getCanvasSize().width / 3 && event.getLocation().x < cc.view.getCanvasSize().width / 3 *2){
      this.beeManager.getComponent('BeeScript').moveBee(0);
    }else{
      this.beeManager.getComponent('BeeScript').moveBee(1);
    }
  }

  getGameStatus(): boolean{
    return this.isGameOn;
  }

  setGameStatus(newGameStatus: boolean): boolean{
    this.isGameOn=newGameStatus;
    if(!newGameStatus){
      cc.game.pause();
    }
    return this.isGameOn;
  }

}
