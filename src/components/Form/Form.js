import Button from "../Button/Button";
import NavItem from "../NavItem/NavItem";

function Form({onClick, children, onSubmit, formClassName, title, titleClassName, buttonClassName, buttonlabel, linkClassName, linkTo, linkValue, spanClassName, spanText, buttonsClassName, wrapperClassName, disabled}) {

  return (
    <div>
      <h3 className={titleClassName}>{title}</h3>
      <form className={formClassName} onSubmit={onSubmit}>
      {children}
        <div className={buttonsClassName}>
          <Button
          type='Submit'
          className={buttonClassName}
          disabled={disabled}
          label={buttonlabel}/>
          <div className={wrapperClassName}>
          <span className={spanClassName}>{spanText}</span>
          <NavItem
          closeAllPopups={onClick}
          className={linkClassName}
          to={linkTo}
          value={linkValue}
          />
          </div>
        </div>
			</form>
    </div>
  );
}

export default Form;
