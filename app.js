let a= "hola";
function contieneMayuscula() {
    let cadena= document.getElementById("textoUsuario").value;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == cadena[i].toUpperCase() && cadena[i] != cadena[i].toLowerCase()) {
            return true;
        }
    }
    
    return false;
}
function esVocal(letra) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(letra);
}
function cambio(letra) {
    if (letra == 'a') return 'ai';
    if (letra == 'e') return 'enter';
    if (letra == 'i') return 'imes';
    if (letra == 'o') return 'ober';
    if (letra == 'u') return 'ufat';
    return letra;
}
function encriptar()
{
    
    let personaje=document.getElementById("personaje");
    let infoDerecha=document.getElementById("infoDerecha");
    let copiar=document.getElementById("copiar");
    let cadena= document.getElementById("textoUsuario").value;
    let divDerecha=document.getElementById("divDerecha")
    let resultado=document.getElementById("resultado");
    let nuevaCadena='';

    if(contieneMayuscula()==true){
        alert("La cadena que ingresaste contiene letras mayusculas o acentos")
    }
    else{
        for(let i=0;i<cadena.length;i++){
            nuevaCadena+=cambio(cadena[i])
        }
    resultado.value=nuevaCadena;
    resultado.innerHTML=nuevaCadena;
        personaje.style.display="none";
        infoDerecha.style.display="none"
        copiar.style.display="block"
        divDerecha.classList.add("ajustar");
        resultado.classList.add("ajustar");
        divDerecha.style.height = "auto"; // Permite que crezca si es necesario, pero no más pequeño que el mínimo
    resultado.style.minHeight = "300px";
        return nuevaCadena;

    }


}

function desencriptar() {
    let cadena= document.getElementById("textoUsuario").value;
    let resultado=document.getElementById("resultado");
    let nuevaCadena = cadena;
    nuevaCadena = nuevaCadena.replace(/ai/g, 'a');
    nuevaCadena = nuevaCadena.replace(/enter/g, 'e');
    nuevaCadena = nuevaCadena.replace(/imes/g, 'i');
    nuevaCadena = nuevaCadena.replace(/ober/g, 'o');
    nuevaCadena = nuevaCadena.replace(/ufat/g, 'u');
    resultado.value=nuevaCadena;
    resultado.value=nuevaCadena;
    resultado.innerHTML=nuevaCadena;
        personaje.style.display="none";
        infoDerecha.style.display="none"
        copiar.style.display="block"
        divDerecha.classList.add("ajustar");
        resultado.classList.add("ajustar");
        divDerecha.style.height = "auto"; // Permite que crezca si es necesario, pero no más pequeño que el mínimo
    resultado.style.minHeight = "300px";
        return nuevaCadena;

    
}
let resultado=document.getElementById("resultado");
let copiar=document.getElementById("copiar");
copiar.addEventListener("click", ()=> {
    let texto = resultado;
	texto.select();
    document.execCommand('copy')
    
});


