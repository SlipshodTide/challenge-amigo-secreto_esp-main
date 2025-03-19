// Definición de variables
const inputAmigo= document.getElementById("amigo");
const listaAmigos= [];
const textoListaAmigos= document.getElementById("listaAmigos");
const textoResultadoAmigo = document.getElementById("resultado");

//En caso de enter en Id= "amigo" y llama event igual que onclick
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (inputAmigo) {
			agregarAmigo();
            inputAmigo.value = '';
        }
    }
})

//Agregar input a Array
function agregarAmigo(){
	if(!inputAmigo.value){
		alert("Introduce un texto válido");
	}
	else{
		listaAmigos.push(inputAmigo.value);
		textoListaAmigos.innerHTML += `<li> ${inputAmigo.value}</li>`;
		inputAmigo.value = '';
	}
}

//Sorteo random * array.lenght
function sortearAmigo(){
	let x = Math.floor(Math.random()*listaAmigos.length);
	//console.log(x);
	//console.log(listaAmigos[x]);
	let amigosorpresa = listaAmigos[x];
	textoResultadoAmigo.innerHTML = `<li>${amigosorpresa}</li>`;
}