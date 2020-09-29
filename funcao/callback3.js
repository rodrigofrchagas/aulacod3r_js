// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}

// Com arrow function (exemplo pessoal)
document.getElementsByTagName('body')[0].onclick = evento => console.log('O evento ocorreu!');