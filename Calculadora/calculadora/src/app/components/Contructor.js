import { Operation } from "./Operation";

export const buttons =[
    {label: 'C', className: 'limpar', action: handleSumNumber},
    {label: '+', className: 'soma', action: handleSumNumber},
    {label: '/', className: 'divisao', action: handleSumNumber},
    {label: '-', className: 'subtracao', action: handleSumNumber},
    {label: '*', className: 'multiplicacao', action: handleSumNumber},
    {label: '=', className: 'total', action: handleSumNumber},

    {label: ',', className: 'ponto', action: handleAddNumber},
    {label: '0', className: 'zero', action: handleAddNumber},
    {label: '1', className: 'primeiro', action: handleAddNumber},
    {label: '2', className: 'segundo',action: handleAddNumber},
    {label: '3', className: 'terceiro',action: handleAddNumber},
    {label: '4', className: 'quarto',action: handleAddNumber},
    {label: '5', className: 'quinto',action: handleAddNumber},
    {label: '6', className: 'sexto',action: handleAddNumber},
    {label: '7', className: 'setimo',action: handleAddNumber},
    {label: '8', className: 'oitavo',action: handleAddNumber},
    {label: '9', className: 'nono',action: handleAddNumber}
  ];