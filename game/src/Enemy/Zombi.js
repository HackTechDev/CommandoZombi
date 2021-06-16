/**
 *
 *
 */

export default class Zombi {
    constructor(scene, x, y) {
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

    
     this.sprite = scene.physics.add
        .sprite(x, y, "atlas-zombi", "zombi-front")
        .setSize(30, 40)
        .setOffset(10, 24);

    /*
    this.keys = scene.input.keyboard.createCursorKeys();
    */

  }


    freeze() {
        this.sprite.body.moves = false;
    }


    update(time, delta) {
    /*
        const keys = this.keys;

        const sprite = this.sprite;
        const speed = 175;
        const prevVelocity = sprite.body.velocity.clone();



        sprite.body.setVelocity(0);

        if (keys.left.isDown) {
            if(sprite.x > 0) {
                sprite.body.setVelocityX(-speed);
            }
        } else if (keys.right.isDown) {
            if(sprite.x < 4096) {
                sprite.body.setVelocityX(speed);
            }
        }

        if (keys.up.isDown) {
            if(sprite.y > 0) {
                sprite.body.setVelocityY(-speed);
            }
        } else if (keys.down.isDown) {
            if(sprite.y < 4096) {
                sprite.body.setVelocityY(speed);
            }
        }

        sprite.body.velocity.normalize().scale(speed);

        if (keys.left.isDown) {
            sprite.anims.play("zombi-left-walk", true);
        } else if (keys.right.isDown) {
            sprite.anims.play("zombi-right-walk", true);
        } else if (keys.up.isDown) {
            sprite.anims.play("zombi-back-walk", true);
        } else if (keys.down.isDown) {
            sprite.anims.play("zombi-front-walk", true);
        } else {
            sprite.anims.stop();

            if (prevVelocity.x < 0) {
                sprite.setTexture("atlas-zombi", "zombi-left");
            } else if (prevVelocity.x > 0) { 
                sprite.setTexture("atlas-zombi", "zombi-right");
            } else if (prevVelocity.y < 0) { 
                sprite.setTexture("atlas-zombi", "zombi-back");
            } else if (prevVelocity.y > 0) {
                sprite.setTexture("atlas-zombi", "zombi-front");
            }
        }
    */

    }

    destroy() {
        this.sprite.destroy();
    }
}

