//cria referencia ao fomr e ao elemento h3 (onde sera exibida a resposta)
const fmr = document.querySelector("form");
const resp = document.querySelector("h3");

//cria um "ouvinte" de evento. acionado quando o botão submit for clicado
fmr.addEventListener("submit", (e) => {
    const quilo = Number(fmr,inQuilo.value); //obtem conteudo dos campos
    const consumo = Number(fmr.inConsumo.value);

    const valor = (quilo/1000) * consumo;
    resp.innerText = `Valor a pagar: R$ ${valor.tpFixed(2)}`; //exibe resposta

    e.preventDefault();                            //evita envio do form
});