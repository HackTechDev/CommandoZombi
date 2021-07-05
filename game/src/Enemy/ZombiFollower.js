/**
 *
 *
 */

export default class ZombiFollower {
    constructor(scene) {
      this.scene = scene;
        
      const anims = scene.anims;
      
      anims.create({
        key: "zombi-left-walk",
        frames: anims.generateFrameNames("atlas-zombi", {
          prefix: "zombi-left-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "zombi-right-walk",
        frames: anims.generateFrameNames("atlas-zombi", {
          prefix: "zombi-right-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "zombi-front-walk",
        frames: anims.generateFrameNames("atlas-zombi", {
          prefix: "zombi-front-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });
      anims.create({
        key: "zombi-back-walk",
        frames: anims.generateFrameNames("atlas-zombi", {
          prefix: "zombi-back-walk.",
          start: 0,
          end: 3,
          zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
      });

    
  }


    freeze() {
        this.sprite.body.moves = false;
    }


    update(time, delta) {
    }

    destroy() {
        this.sprite.destroy();
    }
}

