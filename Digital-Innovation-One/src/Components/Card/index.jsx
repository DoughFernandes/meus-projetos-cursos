import React from "react";
import { FiThumbsUp } from 'react-icons/fi'
import BannerCard from '../../Assets/Img/Banner-Card.png'

import { 
    ImageBackground,
    CardContainer,
    UserPicture,
    PostInfo,
    UserInfo,
    Content,
    HasInfo

 } from './Card';

const Card = ()=>{
    return(
        <CardContainer>
           <ImageBackground src={BannerCard} />
           <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/152017678?v=4"/>
                    <div>
                        <h4>Douglas Fernandes</h4>
                        <p>10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Meus Projetos</h4>
                    <p>Nome do Projeto</p>
                </PostInfo>
                <HasInfo>
                    <h4>Linhguagem de Programação</h4>
                    <p>
                        <FiThumbsUp /> 1n
                    </p>
                </HasInfo>
           </Content>
        </CardContainer>
    )
};

export { Card };