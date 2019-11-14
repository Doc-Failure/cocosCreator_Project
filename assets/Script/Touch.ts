const {ccclass, property} = cc._decorator;

@ccclass
export default class Touch extends cc.Component {
  @property(cc.Node)
  canvas: cc.Node = null;

  @property(cc.Node)
  beeManager: cc.Node = null;
  
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
    } 
    if(event.getLocation().x < cc.view.getCanvasSize().height / 3){
      this.beeManager.getComponent('BeeScript').moveBee(-1);
    }else if( event.getLocation().x > cc.view.getCanvasSize().height / 3 && event.getLocation().x < cc.view.getCanvasSize().height / 3 *2){
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
    return this.isGameOn;
  }

}
