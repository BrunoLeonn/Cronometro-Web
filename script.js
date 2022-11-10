/* Neste código JavaScript, definimos nossas variáveis de controle e associamos 
as funções aos seus botões.*/

"use strict";
// Strict mode é uma forma de optar por uma variante restrita do JS.


let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

/* let: declara uma variável local no escopo do bloco atual, opcionalmente iniciando com um valor
 # let só funciona no bloco declarado #
 var: declara variável global no código
 const: não pode atribuir algo a constante, diferente de let.
 cron: Uma maneira de agendar tarefas ou fazer com que elas se repitam a
 cada x intervalo de tempo.
*/

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();


// Agora vamos criar as funções.

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10)
}
function pause() {
    clearInterval(cron);
}
function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
}

/* Aqui temos as funções start, pause e reset,
[START] Na função start, iniciamos o setInterval a cada 10 milissegundos
(pois a cada 1 milissegundo trava dependendo do navegador).

[PAUSE] Na função pause limpamos o setInterval, 
na função start é necessário da um clear 
antes de iniciar para não termos vários funcionando em background, 
por tanto antes de iniciar os procedimentos é chamado a função pause .

[RESET] Na função reset zeramos nossas variaveis auxiliares e
 para que o texto na tela volte a ser 0(zero)na tela, setamos manualmente usando o innerText .
*/

function timer() {
    if ((millisecond += 1) == 100) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}
function returnData(input) {
    return input > 10 ? input : `0${input}`
}
/*
Aqui temos a parte final, a função de timer do qual é chamada na função start ,
nessa função verificamos o tempo passado:

Se o millisecond somado a 10 for igual a 1000,
portanto já se passou um segundo e então zeramos o milissegundo e aumentamos um 1 segundo.
Se o second for igual a 60, portanto já se passou um minuto e então zeramos o segundo e
aumentamos um 1 minuto.
Se o minute for igual a 60, portanto já se passou uma hora
e então zeramos o minuto e aumentamos uma hora.
Por fim imprimimos na tela usando o innerText .

A função de returnData é usada apenas para deixar o texto mais dinâmico na tela, fazendo a seguinte logica,
se o digito for menor que 10 então concatena com um 0(zero) na frente.
*/