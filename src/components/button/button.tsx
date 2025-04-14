import './button.css';

const Button = ({ ...props }) => {
  return (
    <button className={ props.classBtn || 'button-primary' } onClick={ props.btnOnClick }>{props.name}</button>
  );
};

export default Button;
