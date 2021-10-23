import React, { useEffect } from 'react';
import { Form } from '../../components/form/Form';
import { StyledLogin } from './Login.styles';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateLogin, updatePassword } from '../../store/reducers/formReducer';
import { updateUser } from '../../store/reducers/userReducer';
import { RootState } from '../../store';

export const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.form.login);

  useEffect(() => {
    dispatch(updateLogin(''));
    dispatch(updatePassword(''));
    dispatch(updateUser(''));
  }, []);

  const handlerSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(updateUser(login));
    history.push('/profile');
  };

  return (
    <StyledLogin>
      <Form handlerSubmit={handlerSubmit} />
    </StyledLogin>
  );
}