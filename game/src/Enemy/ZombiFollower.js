/**
 *
 *
 */


export default class ZombiFollower  extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
      super(scene, x, y, texture);

      this.scene = scene;
      this.texture = texture;
        
      console.log("npcZombiFollower constructor");


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

        this.createPath();
    }

    createPath() {
        console.log("npcZombiFollower create");

        this.path = new Phaser.Curves.Path();
        this.path.moveTo(436, 3190);
        this.path.lineTo(1351, 3190);
        this.path.lineTo(1351, 3700);
        this.path.lineTo(436, 3700);
        this.path.lineTo(436, 3190);

        this.zombiFollower = this.scene.add
                                .follower(this.path, 0, 0, this.texture)
                                .startFollow({ duration: 80000, loop: -1 });

    }



    freeze() {
        this.sprite.body.moves = false;
    }


    update(time, delta) {
        var t = this.zombiFollower.pathTween.getValue();

        var p1 = this.path.getPoint(Phaser.Math.Clamp(t - 1e-6, 0, 1));
        var p2 = this.path.getPoint(Phaser.Math.Clamp(t + 1e-6, 0, 1));
        var dir = p2.clone().subtract(p1);

        if (dir.x > 0) {
            this.zombiFollower.anims.play('zombi-right-walk', true);
        } else if (dir.x < 0) {
            this.zombiFollower.anims.play('zombi-left-walk', true);
        } else if (dir.y > 0) {
            this.zombiFollower.anims.play('zombi-front-walk', true);
        } else if (dir.y < 0) {
            this.zombiFollower.anims.play('zombi-back-walk', true);
        } else {
            dir.anims.stop();
        }


    }

    collision(p) {
        var distanceBetween2PC = Phaser.Math.Distance.Between(p.sprite.x, p.sprite.y, this.zombiFollower.x,  this.zombiFollower.y);
        if(distanceBetween2PC <= 50) {
            console.log("Touch");
            this.zombiFollower.pauseFollow();
        } else {
            this.zombiFollower.resumeFollow();
        }

    }

    destroy() {
        this.sprite.destroy();
    }
}

