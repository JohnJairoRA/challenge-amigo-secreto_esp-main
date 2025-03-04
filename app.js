// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array de amigos
let Amigos = [];
let numeroDeAmigos = 0;
// Función para guardar el número de amigos
function guardarNumeroDeAmigos() {
    const numeroDeAmigosInput = document.getElementById('numeroDeAmigos');
    numeroDeAmigos = parseInt(numeroDeAmigosInput.value, 10);

    if (isNaN(numeroDeAmigos) || numeroDeAmigos < 1 || numeroDeAmigos > 100) {
        alert('Agrega la cantidad de amigos que van a participar en el sorteo de 1 a 100');
        numeroDeAmigosInput.value = ''; // Limpiar el campo de entrada
    } else {
        // Aquí puedes agregar la lógica para guardar el número de amigos
        console.log(`Número de amigos guardado: ${numeroDeAmigos}`);
        establecerNumeroDeAmigos(numeroDeAmigos);
    }
}
// Función para establecer el número de amigos en el cuadro de texto "Escribe un nombre"
function establecerNumeroDeAmigos(numeroDeAmigos) {
    const amigoInput = document.getElementById('amigo');
    amigoInput.placeholder = `Escribe un nombre (1 de ${numeroDeAmigos})`;
}
// Función para agregar un amigo y limpiar la caja de texto
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim();

    if (Amigos.length >= numeroDeAmigos) {
        alert('El límite de amigos fue alcanzado, no puedes agregar más amigos.');
    } else if (!nombreAmigo || !isNaN(nombreAmigo)) {
        alert('Digita un nombre, el número no es válido.');
    } else {
        Amigos.push(nombreAmigo);
        console.log(`Amigo añadido: ${nombreAmigo}`);
        actualizarListaAmigos();
        amigoInput.value = ''; // Limpiar la caja de texto
    }
}