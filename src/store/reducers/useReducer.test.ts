import { userReducer, updateUser } from './userReducer';

describe('userReducer tests', () => {

  const initialState = {
    user: '',
  }

  it('should updates user state', () => {
    expect(userReducer(initialState, updateUser('user'))).toEqual(
      {
        user: 'user',
      },
    );
  });
});