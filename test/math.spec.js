// arquivo que testa as funções

// npm run test -> executar teste
// it.only -> testa apenas este bloco 
// it.skip -> não testa este bloco (fica pendente)
// hooks: beforeEach -> executa a função antes de cada bloco it
// hooks: afterEach -> executa a função depois de cada bloco it
// hooks: before -> executa no início de tudo
// hooks: afeter -> executa no final de tudo

// const assert = require('assert'); 
const Math = require('../src/math.js');
const expect = require('chai').expect; // mesma funcao do assert porem mais didatico
// const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    //hooks:
    beforeEach(function() {
        value = 0; 
    });
    // depois de cada it o value será 0

    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000); // alterando o limite de timeout do mocha (2000)

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10); // espera que o valor seja igual a 10            
            done(); // garante que aguarde funções assíncronas concluírem
        });     
    });

    // o teste será feito apenas neste bloco (.only):
    it.only('Multiply two numbers', function() {
        const math = new Math();
        const obj = {
            name: 'Rebecca Costa Manzi'
        };
        const obj2 = {
            name: 'Rebecca Costa Manzi'
        };

        expect(obj) // expect em objetos
            .to.have.property('name') // verifica se tem prop. name
            .equal('Rebecca Costa Manzi'); // verifica se o nome é 'Rebecca Costa Manzi'
        
        expect(obj).to.deep.equal(obj2);
        // analisa os dados afundo e retorna se são iguais
        
        expect(math.multiply(value, 5)).to.equal(0); // multiplicação
    });
});