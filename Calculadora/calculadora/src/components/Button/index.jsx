import { ButtonContainer } from './style'
import './style.css'

const Button = ({label, className})=>{
    return (
        <ButtonContainer className={className}>
            {label}
        </ButtonContainer>
    )
}
export default Button;