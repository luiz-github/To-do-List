import './input.css'

const Input = ({ ...props }) => {
    return (
            
        <input 
            type="text" 
            value={ props.inputValue }
            className={  props.classInput || 'inputDefault'} 
            onChange={ props.inputOnChange }
            placeholder={props.inputPlaceHolder}
        />
        
    );
};

export default Input;