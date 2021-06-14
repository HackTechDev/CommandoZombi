import 'phaser';
import Button from '../Buttons/Button';

var keyE;

export default class CharacterScene extends Phaser.Scene {
  constructor () {
    super('Character');
  }

  init(data){
  }

  create () {

    // Character stats
    var soldierStat = {
                        name: "Capitaine Kronos",
                        nickname: "",
                        sex: 1,
                        age: 40,
                        job: "sniper",

                        body: 100,
                        health: 200,
                        agility: 100,
                        force: 100,
                        dexterity: 100,
                        intelligence: 100,
                        knowledge: 100,
                        charism: 100,

                        weaponName1: "Couteau",
                        weaponQuantity1: 0,
                        weaponName2: "",
                        weaponQuantity2: 0,
                        weaponName3: "",
                        weaponQuantity3: 0,

                        previousScene: "",
                        posxPreviousScene: 513,
                        posyPreviousScene: 2750,

                        currentScene : "",
                        posxCurrentScene: 513,
                        posyCurrentScene: 2750,

                        mission: "Mission1"
    };

    // Save stats
    localStorage.setItem('soldierStat',JSON.stringify(soldierStat));

    // Load stat

    var file = JSON.parse(localStorage.getItem('soldierStat'));
    var name = file.name;
    var job = file.job;
    var currentScene = file.currentScene;
    var posxCurrentScene = file.posxCurrentScene;
    var posyCurrentScene = file.posyCurrentScene;
       

    console.log("Character Scene: create");
    this.text = this.add.text(300, 100, "Stat", { fontSize: 40 });
    this.stat1Text = this.add.text(200, 190, "Nom: " + name, { fontSize: 24 });
    this.stat2Text = this.add.text(200, 220, "Job: " + job, { fontSize: 24 });
    this.stat3Text = this.add.text(200, 250, "Scene: " + currentScene + " / x: " + posxCurrentScene + " / y: " + posyCurrentScene, { fontSize: 24 });


    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');

  }

  update(time, delta) {
    } 
  
};
