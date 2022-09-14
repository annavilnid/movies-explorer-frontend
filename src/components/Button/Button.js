function Button({className, onClick, label}) {
  console.log(className, onClick, label)
  return (
    <>
      <button className={className} onClick={onClick}>{label}</button>
    </>
  );
}

export default Button;
