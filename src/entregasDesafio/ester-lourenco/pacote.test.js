const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote de acordo com cada projeto', () =>{

    test('Retorna pacote básico caso o número total de horas seja até 50',() => {
     const totalDeHorasProjeto = (50);
     const result = calcularPacote(totalDeHorasProjeto);
     expect(result).toEqual('pacote_basico');

    });

    test('Retorna pacote intermediario caso o número total de horas seja até 100',() => {
        const totalDeHorasProjeto = (100);
        const result = calcularPacote(totalDeHorasProjeto);
        expect(result).toEqual('pacote_intermediario');
   
       });
       test('Retorna pacote premium caso o número total de horas seja até 200',() => {
        const totalDeHorasProjeto = (200);
        const result = calcularPacote(totalDeHorasProjeto);
        expect(result).toEqual('pacote_premium');
   
       });
});