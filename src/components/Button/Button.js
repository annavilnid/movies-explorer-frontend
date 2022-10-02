function Button({className, onClick, label, type, disabled, ariaLabel}) {
  return (
    <>
      <button className={className} onClick={onClick} type={type} disabled={disabled} aria-label={ariaLabel}>{label}</button>
    </>
  );
}

export default Button;
