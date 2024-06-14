import { ButtonSearch } from './Button';
import { PiMagnifyingGlassBold } from "react-icons/pi";

const Button = ()=>{
    return(
        <ButtonSearch title='Search' type='submit'>
            <PiMagnifyingGlassBold />
        </ButtonSearch>
    )
};

export { Button } ;