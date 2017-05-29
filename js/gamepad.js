var gamepadAPI = {
    controller: {},
    turbo: false,
    connect: function(evt) {
        gamepadAPI.controller = evt.gamepad
        gamepadAPI.turbo = true
        console.log('Gamepad connected')
    },
    disconnect: function(evt) {
        gamepadAPI.turbo = false
        delete gamepadAPI.controller
        console.log('Gamepad disconnected')
    },
    update: function() {},
    buttonPressed: function() {},
    buttons: [ //8bitDO Nes30
        'A', 'B', 'X', 'Y',
        'Power', 'Select',
        'Axis-Left', 'Axis-Right',
        'LB', 'RB',
    ],
    buttonsCache: [],
    buttonsStatus: [],
    axesStatus: []

};
