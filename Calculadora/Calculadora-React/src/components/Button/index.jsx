import { ButtonContainer } from './style'
import './style.css'

const Button = ({label, className, onclick})=>{
    return (
        <ButtonContainer type='button' className={className} onClick={onclick}>
            {label}
        </ButtonContainer>
    )
}
export default Button;