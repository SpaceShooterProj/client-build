SpaceShooter.Tools = {
  hitSparkles: [],
  hitSparklesCount: 0,
  pickupSparkles: [],
  pickupSparklesCount: 0,
  explosions: [],
  explosionsCount: 0,
  scores: [],
  scoreCount: 0,
  bonus: [],
  bonusCount: 0
};
SpaceShooter.Tools.init = function (resources) {
  var textures = [];
  for (var i = 1; i <= 36; i++) {
    var count = '' + i;
    while (count.length < 3) count = '0' + count;
    textures.push(resources['expl1-' + count].texture);
  }
  for (var i = 0; i < 5; i++) {
    var explosion = new SpaceShooter.ExplosionBasic();
    explosion.init(textures);
    explosion.object.visible = false;
    explosion.add();
    this.explosions.push(explosion);
  }
  for (var i = 0; i < 50; i++) {
    var sparkle = new SpaceShooter.Sparkles();
    sparkle.stats = {
      color: 0xffffff,
      particlesCount: 2,
      size: { min: 2.6, max: 4.8 },
      speed: {
        x: { min: -5, max: 5 },
        y: { min: 1, max: 5 },
        reduce: {
          x: { min: 0.8, max: 1 },
          y: { min: 0.8, max: 1 }
        }
      }
    };
    sparkle.init();
    sparkle.add();
    sparkle.object.visible = false;
    this.hitSparkles.push(sparkle);
  }
  for (var i = 0; i < 5; i++) {
    var sparkle = new SpaceShooter.Sparkles();
    sparkle.stats = {
      color: 0xfff000,
      particlesCount: 20,
      size: { min: 1.6, max: 5.8 },
      speed: {
        x: { min: -6, max: 6 },
        y: { min: -6, max: 2 },
        reduce: {
          x: { min: 0.8, max: 0.9 },
          y: { min: 0.9, max: 0.99 }
        }
      }
    };
    sparkle.init();
    sparkle.add();
    sparkle.object.visible = false;
    this.pickupSparkles.push(sparkle);
  }
  for (var i = 0; i < 5; i++) {
    var textBonus = new SpaceShooter.TextBonusScore();
    textBonus.init();
    textBonus.object.visible = false;
    textBonus.add();
    this.scores.push(textBonus);
  }
  for (var i = 0; i < 12; i++) {
    var bonus = new SpaceShooter.BonusMoney();
    bonus.init();
    bonus.object.visible = false;
    bonus.add();
    this.bonus.push(bonus);
  }
  for (var i = 0; i < 1; i++) {
    var bonus = new SpaceShooter.BonusShield();
    bonus.init();
    bonus.object.visible = false;
    bonus.add();
    this.bonus.push(bonus);
  }
  for (var i = 0; i < 2; i++) {
    var bonus = new SpaceShooter.BonusGun();
    bonus.init();
    bonus.object.visible = false;
    bonus.add();
    this.bonus.push(bonus);
  }
  this.bonus.shuffle();
};
SpaceShooter.Tools.addHitSparkles = function (x, y, color) {
  if (this.hitSparkles[this.hitSparklesCount].object.visible == true) return false;
  //sounds['sound-impact'].play();
  if (color != null) {
    this.hitSparkles[this.hitSparklesCount].setColor(color);
  }
  this.hitSparkles[this.hitSparklesCount].object.position.x = x;
  this.hitSparkles[this.hitSparklesCount].object.position.y = y;
  this.hitSparkles[this.hitSparklesCount].object.visible = true;
  this.hitSparklesCount++;
  if (this.hitSparklesCount >= this.hitSparkles.length) {
    this.hitSparklesCount = 0;
  }
};
SpaceShooter.Tools.addPickupSparkles = function (x, y, color) {
  if (this.pickupSparkles[this.pickupSparklesCount].object.visible == true) return false;
  if (color != null) this.pickupSparkles[this.pickupSparklesCount].setColor(color);
  this.pickupSparkles[this.pickupSparklesCount].object.position.x = x;
  this.pickupSparkles[this.pickupSparklesCount].object.position.y = y;
  this.pickupSparkles[this.pickupSparklesCount].object.visible = true;
  this.pickupSparklesCount++;
  if (this.pickupSparklesCount >= this.pickupSparkles.length) this.pickupSparklesCount = 0;
};
SpaceShooter.Tools.addExplosion = function (x, y, color) {
  if (this.explosions[this.explosionsCount].object.visible == true) return false;  sounds['sound-explosion001'].play();
  this.explosions[this.explosionsCount].object.position.x = x;
  this.explosions[this.explosionsCount].object.position.y = y;
  this.explosions[this.explosionsCount].play(color);
  this.explosionsCount++;
  if (this.explosionsCount >= this.explosions.length) this.explosionsCount = 0;
};
SpaceShooter.Tools.addScore = function (x, y, score) {
    if (this.scores[this.scoreCount].object.visible == true) return false;
    this.scores[this.scoreCount].object.position.x = x;
    this.scores[this.scoreCount].object.position.y = y;
    this.scores[this.scoreCount].object.text = score;
    this.scores[this.scoreCount].object.visible = true;
    this.scoreCount++;
    if (this.scoreCount >= this.scores.length) this.scoreCount = 0;
};
SpaceShooter.Tools.addBonus = function (x, y) {
  if (Math.random() * 10 < 7 || this.bonus[this.bonusCount].object.visible == true) return false;
  this.bonus[this.bonusCount].object.position.x = x;
  this.bonus[this.bonusCount].object.position.y = y;
  this.bonus[this.bonusCount].object.visible = true;
  this.bonusCount++;
  if (this.bonusCount >= this.bonus.length) this.bonusCount = 0;
};
