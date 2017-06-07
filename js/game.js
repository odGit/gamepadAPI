var game = new Phaser.Game(800, 640, Phaser.CANVAS, 'game', {
    preload: preload,
    create: create,
    update: update
})
var player, key = {},
    g = {}
var currentSpeed = 0,
    gamepadStatus = false

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    game.scale.pageAlignHorizontally = true
    game.scale.pageAlignVertically = true
    game.stage.backgroundColor = '#9576AA'
    game.load.image('cat', 'img/cat.png')
    game.load.image('ground', 'img/ground.png')
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE)
    platforms = game.add.group()
    platforms.enableBody = true


    createPlayer()
}

function update() {
    game.physics.arcade.velocityFromRotation(player.rotation, currentSpeed, player.body.velocity)
    gamepadControls()
}

function createPlayer() {

    player = game.add.sprite(70, 100, 'cat')
    game.physics.arcade.enable(player)
    player.body.gravity.y = 600
    player.body.bounce.y = 0.2
    player.body.collideWorldBounds = true

}

function gamepadControls() {

}
