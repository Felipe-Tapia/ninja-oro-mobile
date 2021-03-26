// GRANJA
$(function() {
    var granja = document.getElementById('foto1');
    var hammertimeUp = new Hammer.Manager(granja, {
        recognizers: [
        [Hammer.Swipe, {
            direction: Hammer.DIRECTION_UP
        }]
        ]
    });
    hammertimeUp.on("swipe", function(ev) {
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }
        var oroGranja = Math.floor(random(10,20));
        $('#texto').append(" * Recolectaste "+oroGranja+" monedas desde la Granja! \n");
        $('#contadorOro').val(oroGranja);
        
});

})

//CUEVA
$(function() {
    var cueva = document.getElementById('foto2');
    var hammertimeUp = new Hammer.Manager(cueva, {
        recognizers: [
        [Hammer.Swipe, {
            direction: Hammer.DIRECTION_UP
        }]
        ]
    });
    hammertimeUp.on("swipe", function(ev) {
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }
        var oroCueva = Math.floor(random(5,10));
        $('#texto').append(" * Recolectaste "+oroCueva+" monedas desde la Cueva! \n");
        return oroCueva;
});

})

//CASA
$(function() {
    var casa = document.getElementById('foto3');
    var hammertimeUp = new Hammer.Manager(casa, {
        recognizers: [
        [Hammer.Swipe, {
            direction: Hammer.DIRECTION_UP
        }]
        ]
    });
    hammertimeUp.on("swipe", function(ev) {
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }
        var oroCasa = Math.floor(random(2,5));
        $('#texto').append(" * Recolectaste "+oroCasa+" monedas desde la Casa! \n");
        return oroCasa;
});

})

//CASINO
$(function() {
    var casino = document.getElementById('foto4');
    var hammertimeUp = new Hammer.Manager(casino, {
        recognizers: [
        [Hammer.Swipe, {
            direction: Hammer.DIRECTION_UP
        }]
        ]
    });
    hammertimeUp.on("swipe", function(ev) {
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }
        var oroCasino = Math.floor(random(-50,50));
        if(oroCasino > 0){
        $('#texto').append(" * Ganaste "+oroCasino+" monedas en el Casino! \n");
    } else {
        $('#texto').append(" * Perdiste "+oroCasino*-1+" monedas en el Casino! \n");
    }   
});

})

//SUMA DE VALORES
