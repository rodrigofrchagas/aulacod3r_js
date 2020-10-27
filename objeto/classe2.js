class Avo {
    constructor(sobrenome = 'Chagas') {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Gerente') {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Franco', 'Assistente', 'xox')
    }
}

const filho = new Filho;
console.log(filho);
