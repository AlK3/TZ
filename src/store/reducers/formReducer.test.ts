import { formReducer, updateLogin, updatePassword } from './formReducer';

describe('formReducer tests', () => {

  const initialState = {
    login: '',
    password: '',
  }

  it('should updates password state', () => {
    expect(formReducer(initialState, updateLogin('login'))).toEqual(
      {
        login: 'login',
        password: '',
      },
    );
  });

  it('should updates password state', () => {
    expect(formReducer(initialState, updatePassword('password'))).toEqual(
      {
        login: '',
        password: 'password',
      },
    );
  });
});