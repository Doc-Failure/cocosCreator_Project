const {ccclass, property} = cc._decorator;

@ccclass
export default class FingerManager extends cc.Component {
    yOrigin:number;
    xOrigin:number;
    yDestination:number;
    xDestination:number;
    speed:number;
    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this.yOrigin=this.node.position.y;
        this.xOrigin=this.node.position.x;
        this.yDestination=this.node.position.y+100;
        this.xDestination=this.node.position.x+100;
    } 
    
    update(dt){
        this.node.position.y -=this.speed*dt;
        if(this.node.position.y!=this.yOrigin){
            //let randomNum : number = Math.random();
            //if(randomNum > 0.5){
            this.speed=100;
            //}
        }else if(this.node.position.y>=this.yDestination){
            this.speed=-100;
        }else{
            this.speed=0;
        }
    }
}