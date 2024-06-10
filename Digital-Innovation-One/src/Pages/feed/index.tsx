//Componentes
import { Header } from "../../Components/Header";
import { Card } from "../../Components/Card";
import { UserInfo } from "../../Components/UserInfo";

import {

    TittleHighLight,
    Container,
    Column,
    Tittle
} from './Feed'

// -----------------------------------------------------------------

const Feed = ()=>{
    return(
        <>
            <Header autentic={true}/>
            <Container>
                <Column flex={3}>
                    <Tittle>Feed</Tittle>
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TittleHighLight>
                        # Rank da semana
                    </TittleHighLight>
                    <UserInfo percentual={35} name='Douglas Fernandes' imagem='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                </Column>
            </Container>
        </>
    )
};

export { Feed };