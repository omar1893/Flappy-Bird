var juego = new Phaser.Game(370,550, Phaser.CANVAS, 'bloque-juego');

juego.state.add('Menu', Menu);
juego.state.add('Juego', Juego);
//juego.state.add('Game_Over', Game_over);

juego.state.start('Menu');