let { cursos } = require("./Cursos");

let imprimir_cursos = () => {
    let cont = 1;
    for (let i = 0; i < cursos.length; i++) {
        cont = cont + 1;
        setTimeout(() => {
            console.log(`
        El curso es: ${cursos[i].nombreCurso}
        ID del curso ${cursos[i].Id}
        Precio: ${cursos[i].Precio} 
        Duracion: ${cursos[i].Duracion}
    `);
        }, 2000 * cont);
    }
};


imprimir_cursos();

module.exports = {
    imprimir_cursos
};