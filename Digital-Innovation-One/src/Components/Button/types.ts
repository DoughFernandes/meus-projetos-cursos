export interface IButton {
    type?: string;
    tittle: string;
    variant?: string;
    disabled?: boolean;
    onclick?: () => void;
}

export interface IButtonStyled {
    variant: string;
}