function Button({className, onClick, label, type, disabled}) {
  return (
    <>
      <button className={className} onClick={onClick} type={type} disabled={disabled}>{label}</button>
    </>
  );
}

export default Button;
