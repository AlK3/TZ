import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateLogin, updatePassword } from '../../store/reducers/formReducer';
import { InputSubmit, InputText } from '../input/Input.styles';
import { StyledForm } from './Form.styles';

interface IFormProps {
  handlerSubmit?: (even: React.SyntheticEvent) => void
}

export const Form: React.FC<IFormProps> = ({handlerSubmit}) => {
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.form.login);
  const password = useSelector((state: RootState) => state.form.password);

  const validate = () => {
    return login !== 'developer21' || password !== '123456';
  };

  return (
    <StyledForm role='form' onSubmit={handlerSubmit}>
      <InputText placeholder='логин' value={login}
        onChange={(e) => dispatch(updateLogin(e.target.value))} />
      <InputText placeholder='пароль' value={password}
        onChange={(e) => dispatch(updatePassword(e.target.value))} />
      <InputSubmit value='войти' disabled={validate()} />
    </StyledForm>
  );
}