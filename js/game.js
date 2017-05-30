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
    game.load.image('boat', 'img/cat.png')

}

function create() {
    createPlayer()
}

function update() {
    game.physics.arcade.velocityFromRotation(player.rotation, currentSpeed, player.body.velocity)
    gamepadControls()
}

function createPlayer() {

}

function gamepadControls() {

}