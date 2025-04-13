import './button.css';

const Button = ({ ...props }) => {
  return (
    <button className={ props.classBtn || 'button-primary' }>{props.name}</button>
  );
};

export default Button;
