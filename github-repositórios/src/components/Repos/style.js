import styled from "styled-components";

const itemContainer = styled.li`
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid #FFF;
    
    h2{
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: .1rem;
    }
    small{
        color: #797979;
    }
    p{
        margin: 1rem 0;
        font-size: .8rem;
    }
    a{
        color: #4E44FD;
        font-size: .8rem;
        margin: 0 1rem 0 0;
        cursor: pointer;

        &::before{
            content: "⌨ ";
            font-size: .8rem;
        }
    }
    button{
        background: transparent;
        border: none;
        color: #fe4343;
        cursor: pointer;
        font-size: .8rem;

        &::before{
            content: "🗑️ ";
            font-size: .8rem;
        }
    }
`;

export default itemContainer;