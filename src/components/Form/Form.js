import Button from "../Button/Button";
import NavItem from "../NavItem/NavItem";

function Form({children, formClassName, title, titleClassName, buttonClassName, buttonlabel, linkClassName, linkTo, linkValue, spanClassName, spanText, buttonsClassName, wrapperClassName}) {
  return (
    <div>
      <h3 className={titleClassName}>{title}</h3>
      <form className={formClassName}>
      {children}
        <div className={buttonsClassName}>
          <Button
          className={buttonClassName}
          label={buttonlabel}/>
          <div className={wrapperClassName}>
          <span className={spanClassName}>{spanText}</span>
          <NavItem
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
