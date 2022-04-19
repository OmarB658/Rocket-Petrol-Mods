class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
      this.load.audio('sfx_scream', './assets/scream.wav');
      this.load.image('starfield', './assets/starfield.png');
      this.load.audio('bgm', './assets/bgm.wav');


    }

    create() {

      this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

      let menuConfig = {
        fontFamily: 'Roboto',
        fontSize: '24px',
        backgroundColor: '#39D7F5',
        color: '#843605',
        align: 'right',
          padding: {
            top: 5,
            bottom: 5,
          },
        fixedWidth: 0
      }
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL (Medieval edition)', menuConfig).setOrigin(0.5, 2);
      this.add.text(game.config.width/2, game.config.height/2, 'Player 1: Use ←→ keys to move and ↑ to fire', menuConfig).setOrigin(0.5, 1.9);
      this.add.text(game.config.width/2, game.config.height/2, 'Player 2: WA keys to move and W to fire', menuConfig).setOrigin(0.5);

      menuConfig.backgroundColor = '#FAFB9E';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');  
        this.sound.play('bgm');  
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 5,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');
        this.sound.play('bgm');  
    
      }
    }
  }