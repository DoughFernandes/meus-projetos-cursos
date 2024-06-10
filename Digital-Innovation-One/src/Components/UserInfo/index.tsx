import { IUserInfo } from './type';

import {
    Container,
    UserPicture,
    NameText,
    Progress
} from './userInfo';

// -----------------------------------------------------

const UserInfo = ({name, imagem, percentual}: IUserInfo)=>{
  return (
    <Container>
        <UserPicture src={imagem} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
};

export  { UserInfo };


