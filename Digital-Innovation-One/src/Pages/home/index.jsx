//Componentes
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";

import {
    TittleHighLight,
    TextContent,
    Container,
    Tittle
} from './Home'

//Assets
import Banner from '../../Assets/Img/Banner.png'

const Home = ()=>{
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
                    <Button tittle='Comecar agora' variant='secundary'></Button>
                </div>
                <div>
                    <img src={Banner} alt="imagem principal" width={400}/>
                </div>
            </Container>
        </>
    )
};

export { Home };