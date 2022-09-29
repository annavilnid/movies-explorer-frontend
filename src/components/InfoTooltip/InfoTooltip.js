import Button from '../Button/Button';

function InfoTooltip({isOpen, errMessage, onClose}) {
  return (
    <div className={`popup popup_type_error ${isOpen && 'popup_is-opened'}`}>
      <div className="popup__container">
        <p className="popup__text">{errMessage}</p>
        <Button className="popup__close-button" onClick={onClose} type="button" disabled={false} ariaLabel="закрыть" label=""/>
      </div>
    </div>
  )
}

export default InfoTooltip;
