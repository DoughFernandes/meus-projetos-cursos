import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #CACACA;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  background: #000047;
  width: 300px;
  height: 400px;
  display: grid;
    grid-template:
      "input input input input" 100px
      "limpar limpar apagar divisao" auto
      "setimo oitavo nono subtracao" auto
      "quarto quinto sexto somar" auto
      "primeiro segundo terceiro total" auto
      "ponto zero zero total" auto
      / 1fr 1fr 1fr 1fr 
    ;
  gap: .5rem;
  padding: 1rem;
  border-radius: 1rem;
`