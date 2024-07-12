async function getCor() {
    let input_nomecor = document.getElementById('input_getcor');
    const resposta = await fetch('http://127.0.0.1:3000/pegaCor?cor=' + input_nomecor.value);
    const resultado = await resposta.json();

    if (resposta.status === 200) {
        let body = document.getElementById('body');
        body.style.backgroundColor = resultado.hex;
    } else {
        body.style.backgroundColor = 'pink';
    }
}

async function addCor() {
    let input_nomecor = document.getElementById('post_cornome');
    let input_hexcor = document.getElementById('post_corhex');

    const resposta = await fetch('http://127.0.0.1:3000/addCor', 
        { method: 'POST', 
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
            body: `cor=${input_nomecor.value}&hex=${input_hexcor.value}`, 
        });
    const resultado = await resposta.json();
    alert(resultado.message);
}