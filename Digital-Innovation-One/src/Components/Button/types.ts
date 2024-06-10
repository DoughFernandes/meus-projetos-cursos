export interface IButton {
    type?: string;
    tittle: string;
    variant?: string;
    onclick?: () => void;
}

export interface IButtonStyled {
    variant: string;
}