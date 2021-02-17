let { cursos } = require('./Cursos');


let fs = require('fs');

let opciones = {
    Id: {
        demand: true,
        alias: 'I'
    },
    Nombre: {
        demand: true,
        alias: 'NN'
    },
    Cedula: {
        demand: true,
        alias: 'CC'
    }
}



let argv = require('yargs')
    .command('inscribir', 'matricular', opciones)
    .argv;



let matricularC = () => {

    if (argv.Id == 1 || argv.Id == 2 || argv.Id == 3) {
        let mensaje = `La persona ${argv.Nombre} Con cedula ${argv.Cedula} Esta matriculado en el curso ${cursos[argv.Id - 1].nombreCurso} Con un valor  de ${cursos[argv.Id - 1].precio} Y una intencidad horaria de  ${cursos[argv.Id - 1].Duracion}`;
        fs.writeFile('IncripcionCursos.txt', mensaje, (err) => {
            if (err) throw (err);
            console.log('Su incripcion fue existosa,Bienvenido');
        })

    } else {
        console.log('El ID ingresado no corresponde a ninguno de nuestros cursos, porfavor ingrese un ID valido');
    }
};


matricularC();