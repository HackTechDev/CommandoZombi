/**
 *
 *
 */

export default class Soldier {
    constructor(scene, x, y) {
          this.scene = scene;
            

          const anims = scene.anims;
          anims.create({
            key: "soldier-left-walk",
            frames: anims.generateFrameNames("atlas-soldier", {
              prefix: "soldier-left-walk.",
              start: 0,
              end: 3,
              zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
          });
          anims.create({
            key: "soldier-right-walk",
            frames: anims.generateFrameNames("atlas-soldier", {
              prefix: "soldier-right-walk.",
              start: 0,
              end: 3,
              zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
          });
          anims.create({
            key: "soldier-front-walk",
            frames: anims.generateFrameNames("atlas-soldier", {
              prefix: "soldier-front-walk.",
              start: 0,
              end: 3,
              zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
          });
          anims.create({
            key: "soldier-back-walk",
            frames: anims.generateFrameNames("atlas-soldier", {
              prefix: "soldier-back-walk.",
              start: 0,
              end: 3,
              zeroPad: 3
            }),
            frameRate: 10,
            repeat: -1
          });

         this.sprite = scene.physics.add
            .sprite(x, y, "atlas-soldier", "soldier-front")
            .setSize(30, 40)
            .setOffset(10, 24);

        this.keys = scene.input.keyboard.createCursorKeys();


  }


    freeze() {
        this.sprite.body.moves = false;
    }


    update(time, delta) {
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
            sprite.anims.play("soldier-left-walk", true);
        } else if (keys.right.isDown) {
            sprite.anims.play("soldier-right-walk", true);
        } else if (keys.up.isDown) {
            sprite.anims.play("soldier-back-walk", true);
        } else if (keys.down.isDown) {
            sprite.anims.play("soldier-front-walk", true);
        } else {
            sprite.anims.stop();

            if (prevVelocity.x < 0) {
                sprite.setTexture("atlas-soldier", "soldier-left");
            } else if (prevVelocity.x > 0) { 
                sprite.setTexture("atlas-soldier", "soldier-right");
            } else if (prevVelocity.y < 0) { 
                sprite.setTexture("atlas-soldier", "soldier-back");
            } else if (prevVelocity.y > 0) {
                sprite.setTexture("atlas-soldier", "soldier-front");
            }
        }


    }

    destroy() {
        this.sprite.destroy();
    }
}

