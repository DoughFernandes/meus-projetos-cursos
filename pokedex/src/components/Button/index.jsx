import { ButtonSearch } from './Button';

const Button = ({type, title, onClick})=>{
    return(
        <ButtonSearch title='Search' type={type} onClick={onClick}>
            {title}
        </ButtonSearch>
    )
};

export { Button } ;