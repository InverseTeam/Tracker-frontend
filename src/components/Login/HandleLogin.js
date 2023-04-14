import { instance } from '../../axios';
import { userSlice } from '../../store/slices/user';


export const handleLogin = async (dispatch, email, password) => {

  try {
    const userData = { email, password };

    //Login user
    const loginUser = await instance.post('users/auth/token/login/', userData);

    // console.log(loginUser.data);

    localStorage.setItem('token', loginUser.data.auth_token);

    
    // Get user`s data
    
    dispatch(userSlice.actions.startLoading());

    const getUserData = await instance.get('users/auth/users/me/', {
      headers: { Authorization: `Token ${loginUser.data.auth_token}` },
    });

    dispatch(userSlice.actions.successLoading(getUserData.data));

    // console.log(getUserData.data);


  } catch (e) {
    dispatch(userSlice.actions.failLoading());
    return e;
  }
};
