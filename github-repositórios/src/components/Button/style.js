import styled from "styled-components";

const buttonContainer = styled.section`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    width: 10rem;
    height: 100%;
    background: #020468;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: .5rem;
    transition: .1s ease-in-out;

    &:active{
        background: #01034e;
        transform: scale(.95);
    }
  }
`;

export default buttonContainer;