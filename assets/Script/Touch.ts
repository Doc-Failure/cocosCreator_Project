const {ccclass, property} = cc._decorator;

@ccclass
export default class Touch extends cc.Component {
  @property(cc.Node)
  canvas: cc.Node = null;
  
  @property
  isGameOn: boolean=false;

  onLoad() {
    var self = this;
    //self.moveToPos = cc.p(0, 0);
    self.canvas.on(cc.Node.EventType.TOUCH_START, event => this.onTouch(event), self.node);
    //cc.game.pause();
  }

  onTouch(event){
    if(!this.isGameOn){
      this.isGameOn=true;
    }
  }

  getGameStatus(): boolean{
    
    return this.isGameOn;
  }

}
