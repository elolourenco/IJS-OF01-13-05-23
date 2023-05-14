const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote.js');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

describe('Valor do Projeto',() => {
    beforeEach(() =>{
        pacote.calcularPacote.mockReturnValue('pacote_basico')

    })
    test('retorna valor total para um projeto dadas as funcionalidades por projeto e valor da hora da desenvolvedora', () =>{ 
 const funcionalidades =[
    'setup',
    'responsividade',
    'construcao_1_pagina',
    'construcao_1_pagina',
    'construcao_1_pagina'

 ]
  const valorHora = 70;
  const result = calcularValorTotalProjeto(funcionalidades, valorHora);


  expect(result).toEqual(3696)
})
})