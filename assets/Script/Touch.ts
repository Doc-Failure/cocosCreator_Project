const {ccclass, property} = cc._decorator;

@ccclass
export default class Touch extends cc.Component {
  @property(cc.Node)
  canvas: cc.Node = null;
  
  @property(cc.Node)
  node_title: cc.Node = null;
  
  @property
  isGameStarted: boolean=false;


  onLoad() {
    var self = this;
    //self.moveToPos = cc.p(0, 0);
    self.canvas.on(cc.Node.EventType.TOUCH_START, event => this.onTouch(event), self.node);
  }

  onTouch(event){
    if(!this.isGameStarted){
      this.isGameStarted=true;
      this.node_title.active=false;
    }
  }

}
