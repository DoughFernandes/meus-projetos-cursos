import React from "react";

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
            <ImageBackground>
                <UserPicture />
            </ImageBackground>
            <PostInfo>
                <UserInfo>
                    <HasInfo>
                        <UserPicture />
                        <Content>
                            <p>Nome</p>
                            <p>Data</p>
                        </Content>
                    </HasInfo>
                </UserInfo>
            </PostInfo>
        </CardContainer>
    )
};