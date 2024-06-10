//Componentes
import { useNavigate } from "react-router-dom";

import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";

import Banner from '../../Assets/Img/Banner.png'

import {
    TittleHighLight,
    TextContent,
    Container,
    Tittle
} from './Home'

// ----------------------------------------------------------------------

const Home = ()=>{
    const navigate = useNavigate();
    const handleClickSignIn = ()=>{
        navigate('/login');
    };

    return(
        <>
            <Header />
            <Container>
                <div>
                    <Tittle>
                        <TittleHighLight>
                            Implemente <br/>
                        </TittleHighLight>
                        o seu futuro global agora!
                    </Tittle>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo encare o seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button tittle='Comecar agora' variant='secundary' onclick={handleClickSignIn}></Button>
                </div>
                <div>
                    <img src={Banner} alt="imagem principal" width={400}/>
                </div>
            </Container>
        </>
    )
};

export { Home };