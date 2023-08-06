import { categoriesSlice } from '../../../store/slices/categories';
import { instanceLogged } from '../../../axios';

export const getCategories = async (dispatch, len) => {
  if (len > 0) {
    return;
  }
  try {
    //Get categories
    dispatch(categoriesSlice.actions.startLoading());
    const getCategories = await instanceLogged.get('courses/categories/');
    dispatch(categoriesSlice.actions.successLoading(getCategories.data));

    console.log(getCategories.data);
  } catch (e) {
    console.log(e);
    dispatch(categoriesSlice.actions.failLoading());
    return e;
  }
};
