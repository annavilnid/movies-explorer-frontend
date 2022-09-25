import { useCallback, useState} from 'react';
import { validate } from 'email-validator';

function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
    console.log(target.closest('input'));
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );


  const validateEmail = () => {
    if(("email" in values)&&(!validate(values.email))) {
      return 'Введен некорректный email'
    }
  }

  return {
    values, setValues, handleChange, errors, isValid, setIsValid, resetForm, validateEmail
  };
}

export default useFormWithValidation;
