export enum Status {
    LOADING = 'loading',
    SUCCES = 'succes',
    ERROR = 'error'
}

export interface IDataFormProps {
    activeForm?: boolean;
    setActiveForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
