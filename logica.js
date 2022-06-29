
const tierra = 9.8;

const conversion = () => {
    let usuario = document.getElementById('peso').value;
    let peso = parseFloat(usuario);
    console.log(peso);
    let selector = document.querySelectorAll('input[name="planeta"]');
    let selectorInput;
    let planetSelected;
    for (let item of selector) {
        if (item.checked){
            selectorInput = item.value;
            planetSelected = item.id;
            break;
        }
    }
    console.log("me trae del checkbox =>",selectorInput);
    let PlanetaValor = parseFloat(selectorInput);
    let resultadoFinal = (peso* PlanetaValor)/tierra;
    document.getElementById('resultado').innerHTML = `El peso en ${planetSelected} es de  ${resultadoFinal.toFixed(2)}`;

}
const reset = () => {
    document.getElementById('Pesos').reset();
}
