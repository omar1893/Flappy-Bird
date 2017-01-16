var Menu = {

    preload: function(){
        juego.stage.backgroundColor = '#FEFEFE';
        juego.load.image('boton', 'img/btn.png')
    },

    create: function(){
        var boton = this.add.button(juego.width/2, juego.height/2, 'boton', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);

        var texto = juego.add.text(juego.width/2, juego.height/2 -85, "Iniciar Juego", {font: "bold 24px sans-serif", fill:"black", align: "center"});
        texto.anchor.setTo(0.5);

        var titulo = juego.add.text(juego.width/2, juego.height/2 -125, "Flappy Bird", {font: "bold 30px sans-serif", fill:"black", align: "center"});
        titulo.anchor.setTo(0.5);
    },

    iniciarJuego: function(){
        this.state.start('Juego');
    }

};