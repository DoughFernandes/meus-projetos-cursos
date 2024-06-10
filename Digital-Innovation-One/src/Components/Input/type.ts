export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    {
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
}

//Extends é usado para uma tag HTML.