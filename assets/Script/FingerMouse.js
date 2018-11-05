cc.Class({
  extends: cc.Component,
  //Parameters
  properties: {
    GameManager: {
      default: null,
      type: cc.Node
    },
    Bee: {
      default: null,
      type: cc.Node
    },
    isFingerPressed: {
      default: false
    },
    isFingerAlive: {
      default: true
    },
    finger1: {
      default: null,
      type: cc.Node
    },
    finger2: {
      default: null,
      type: cc.Node
    }
  },

  onLoad() {
    cc.director.getCollisionManager().enabled = true;
    //Manager the Mouse click on the finger
    this.node.on("mousedown", event => this.pressFinger(event));
    if (this.isFingerPressed) {
      this.isFingerPressed = false;
      this.pressFinger();
    }
  },

  //Callback function for the click on the finger
  pressFinger(event) {
    if (!this.isFingerPressed && this.isFingerAlive) {
      //if a finger is pressed we send the current finger forward
      this.node.setPosition(this.node.position.x, this.node.position.y + 100);
      //update the boolean of the position
      this.isFingerPressed = true;
      //and call the function otherFingerPressed of the other 2 finger
      this.finger1.getComponent("FingerMouse").otherFingerPressed();
      this.finger2.getComponent("FingerMouse").otherFingerPressed();
    }
    return true;
  },
  //this function is called when another finger is Pressed
  otherFingerPressed() {
    //if this finger is forward we send it back
    if (this.isFingerPressed) {
      this.node.setPosition(this.node.position.x, this.node.position.y - 100);
      this.isFingerPressed = false;
    }
    return true;
  },
  //when the Bee touch a finger it is not more usable
  onCollisionEnter(other, self) {
    //we change the color of the finger
    this.node.setColor(new cc.Color(255, 0, 0));
    //we send the finger back
    this.otherFingerPressed();
    //set the finger as dead
    this.isFingerAlive = false;
    //and finally send forward another finger.
    if (this.finger1.getComponent("FingerMouse").isFingerAlive) {
      this.finger1.getComponent("FingerMouse").pressFinger();
    } else if (this.finger2.getComponent("FingerMouse").isFingerAlive) {
      this.finger2.getComponent("FingerMouse").pressFinger();
    } else {
      //if all the finger are dead the game is over! :)
      cc.game.pause();
      this.GameManager.active = true;
    }
  }
});
