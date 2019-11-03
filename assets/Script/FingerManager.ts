const {ccclass, property} = cc._decorator;

@ccclass
export default class FingerManager extends cc.Component {
    yOrigin:number;
    xOrigin:number;
    yDestination:number;
    xDestination:number;
    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this.yOrigin=this.node.position.y;
        this.xOrigin=this.node.position.x;
        this.yDestination=this.node.position.y+100;
        this.xDestination=this.node.position.x+100;
    } 
    
    update(){
        
        if(this.node.position.y===this.yOrigin){
            let randomNum : number = Math.random();
            if(randomNum > 0.5){
                console.log(randomNum+'');
                //this.
                //this.moveToPos = cc.p(0, 0);
                //this.m (this.xOrigin, this.yDestination+1);

            }
        }
        /*if(this.node.position.y>this.yDestination){
            this.node.setPosition(this.xOrigin, this.yOrigin);
        }*/
    }
}