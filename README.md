<h1 align="center">Amigo Secreto</h1>

## Definiciones de las Propiedades
Estas son las propiedades implementadas dentro de las funciones:

- **Amigos**: Array que almacena los nombres de los amigos.
- **numeroDeAmigos**: Número total de amigos que participarán en el sorteo.
- **numeroDeAmigosInput**: Elemento de entrada para capturar el número de amigos.
- **amigoInput**: Elemento de entrada para capturar el nombre de un amigo.
- **listaAmigos**: Elemento de la lista donde se muestran los amigos añadidos.
- **ganadorElemento**: Elemento donde se muestra el nombre del amigo ganador.

## Resumen de Comandos
A continuación, se describen los comandos usados en cada función y su propósito:

### **guardarNumeroDeAmigos**
- `document.getElementById('numeroDeAmigos')`: Obtiene el elemento de entrada para el número de amigos.
- `parseInt(numeroDeAmigosInput.value, 10)`: Convierte el valor de entrada a un número entero.
- `isNaN(numeroDeAmigos)`: Verifica si el valor no es un número.
- `alert('mensaje')`: Muestra un mensaje de alerta.
- `numeroDeAmigosInput.value = ''`: Limpia el campo de entrada.
- `console.log('mensaje')`: Imprime un mensaje en la consola.
- `establecerNumeroDeAmigos(numeroDeAmigos)`: Llama a la función para establecer el número de amigos.

### **establecerNumeroDeAmigos**
- `document.getElementById('amigo')`: Obtiene el elemento de entrada para el nombre del amigo.
- `amigoInput.placeholder = 'mensaje'`: Establece el texto del marcador de posición.

### **agregarAmigo**
- `document.getElementById('amigo')`: Obtiene el elemento de entrada para el nombre del amigo.
- `amigoInput.value.trim()`: Obtiene y recorta el valor de entrada.
- `Amigos.push(nombreAmigo)`: Agrega el nombre del amigo al array `Amigos`.
- `console.log('mensaje')`: Imprime un mensaje en la consola.
- `actualizarListaAmigos()`: Llama a la función para actualizar la lista de amigos.
- `amigoInput.value = ''`: Limpia la caja de texto.

### **actualizarListaAmigos**
- `document.getElementById('listaAmigos')`: Obtiene el elemento de la lista de amigos.
- `listaAmigos.innerHTML = ''`: Limpia la lista actual.
- `Amigos.forEach((amigo, index) => { ... })`: Itera sobre el array `Amigos`.
- `document.createElement('li')`: Crea un nuevo elemento de lista.
- `li.textContent = 'mensaje'`: Establece el contenido de texto del elemento de lista.
- `listaAmigos.appendChild(li)`: Agrega el elemento de lista a la lista de amigos.

### **sortearAmigo**
- `Math.floor(Math.random() * Amigos.length)`: Genera un índice aleatorio.
- `document.getElementById('ganador')`: Obtiene el elemento donde se muestra el ganador.
- `ganadorElemento.textContent = 'mensaje'`: Establece el contenido de texto del elemento ganador.

### **reiniciarSorteo**
- `Amigos = []`: Reinicia el array de amigos.
- `numeroDeAmigos = 0`: Reinicia el número de amigos.
- `document.getElementById('numeroDeAmigos').value = ''`: Limpia el campo de entrada del número de amigos.
- `document.getElementById('amigo').value = ''`: Limpia el campo de entrada del nombre del amigo.
- `document.getElementById('listaAmigos').innerHTML = ''`: Limpia la lista de amigos.
- `document.getElementById('ganador').textContent = ''`: Limpia el contenido del elemento ganador.

## ¿Cómo utilizarlo?
1. Establece el número de amigos que participarán en el sorteo.
2. Añade los nombres de los amigos uno por uno.
3. Revisa la lista de amigos añadidos.
4. Sortea al azar y descubre quién es el "Amigo Secreto".
5. Si deseas reiniciar el sorteo, utiliza la función de reinicio para empezar de nuevo.

¡Buena suerte y que gane el mejor "Amigo Secreto"! 🎉
