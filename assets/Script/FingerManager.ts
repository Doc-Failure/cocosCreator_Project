const {ccclass, property} = cc._decorator;

@ccclass
export default class FingerManager extends cc.Component {

    //Definisce di quanta distanza voglio spostare il dito
    @property
    yDistance:number=100;
    //Definisce quanto velocemente voglio spostare il dito
    @property
    duration:number=0.5;
    action_goUp:cc.ActionInterval;
    action_goDown:cc.ActionInterval;
    //Definisce la posizione iniziale del dito
    yOrigin:number;
    frames:number=1;

    onLoad() {
        this.yOrigin=this.node.position.y;
        cc.director.getCollisionManager().enabled = true;
        //Funzione per portare su le dita
        this.action_goUp = cc.moveBy(this.duration, cc.v2(0, this.yDistance)).easing(cc.easeSineOut());
        //Funzione per portare giù le dita
        this.action_goDown = cc.moveBy(this.duration, cc.v2(0, -this.yDistance)).easing(cc.easeSineOut());
    } 
    
    update(dt){
        if(this.frames%50==0){
            if(this.yOrigin-1 <=this.node.position.y && this.node.position.y<=this.yOrigin+1){
                let randomNum : number = Math.random();
                if(randomNum>0.6){
                    this.node.runAction(this.action_goUp);
                }
            }
            this.frames=1;
        }else{
            this.frames++;
        }
        console.log(this.yOrigin+' '+(this.node.position.y-this.yDistance));
        if(this.yOrigin>=(this.node.position.y-this.yDistance-1) && this.yOrigin<=(this.node.position.y-this.yDistance+1)){
            this.node.runAction(this.action_goDown);
        }
    }
}