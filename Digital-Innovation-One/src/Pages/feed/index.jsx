//Componentes
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Card } from "../../Components/Card";
import { UserInfo } from "../../Components/UserInfo";

import {
    TittleHighLight,
    Container,
    Column,
    Tittle
} from './Feed'

//Assets
import Banner from '../../Assets/Img/Banner.png'

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
                    <UserInfo percentual={35} name='Douglas Fernandes' image='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                    <UserInfo percentual={2} name='Douglas Fernandes' image='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                    <UserInfo percentual={80} name='Douglas Fernandes' image='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                    <UserInfo percentual={74} name='Douglas Fernandes' image='https://avatars.githubusercontent.com/u/152017678?v=4'/>
                </Column>
            </Container>
        </>
    )
};

export { Feed };