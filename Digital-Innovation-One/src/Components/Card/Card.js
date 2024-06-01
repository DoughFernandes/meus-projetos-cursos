import styled from "styled-components";

export const CardContainer = styled.section`
    min-width: 500px;
    width: 98%;
    background: #384652;
    margin-left: .5rem;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
`;

export const Content = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

export const UserInfo = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 1rem;

    div{
        margin-left: 1rem;
    }
    h4{
        font-weight: 780;
        font-size: 1rem;
        line-height: 2rem;
    }
    p{
        font-weight: 400;
        font-size:.8rem;
        line-height: 1rem;
    }
`;

export const UserPicture = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: 3px solid #FFFFFF;
`;

export const PostInfo = styled.div`
    margin-bottom: 1rem;

    h4{
        font-weight: 780;
        font-size: 1rem;
        line-height: 2rem;
    }
    p{
        font-weight: 400;
        font-size:.8rem;
        line-height: 1rem;
    }
`;

export const HasInfo = styled.div`
    margin-top: 1rem;

    h4{
        font-weight: 780;
        font-size: 1rem;
        line-height: 2rem;
        color: #FFFFFF80;
    }
    p{
        font-weight: 400;
        font-size:.8rem;
        line-height: 1rem;
    }
`;