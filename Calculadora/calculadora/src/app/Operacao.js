export const Operacao = (num, action, CurrentNumber) => {
    CurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
   
}