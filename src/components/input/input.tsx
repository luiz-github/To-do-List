import './input.css'

const Input = ({ ...props }) => {
    return (
            
        <input type="text" className={  props.classInput || 'inputDefault'} />
        
    );
};

export default Input;