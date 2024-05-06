const btnNumeros = document.getElementsByName('data-number');
const btnOperacion = document.getElementsByName('data-operacion');
const btnIgual = document.getElementsByName('data-igual')[0];
const btnDelete = document.getElementsByName('data-delete')[0];
console.log(btnOperacion)
let result = document.getElementById('result');

let opeActual = '', 
    opeAnterior = '', 
    operacion = undefined;

btnNumeros.forEach(btn => {
    btn.addEventListener('click', function(){
        agregarNumero(btn.innerText);
    });
});


btnOperacion.forEach(btn => {
    btn.addEventListener('click', function(){
        selectOperacion(btn.innerText);
    })
})

btnIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});


btnDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(ope){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular();
    }
    operacion = ope.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    
    if(isNaN(anterior) || isNaN(actual)) return;
    
    switch(operacion){
        case '+' : calculo = anterior + actual;  break; 
        case '-' : calculo = anterior - actual; break; 
        case 'x' : calculo = anterior * actual; break; 
        case '/' : calculo = anterior / actual; break; 
        default: return;
    }
opeActual = calculo;
operacion = undefined;
opeAnterior = '';
}

function agregarNumero(numero){
    opeActual = opeActual.toString() + numero.toString();
    actualizarDisplay();
}

function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();