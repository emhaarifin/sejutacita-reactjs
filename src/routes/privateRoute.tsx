import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({ children, redirectTo }: { children: JSX.Element; redirectTo: string }) => {
  const { name, favoriteCategories } = useSelector((state: RootState) => state.user);

  const getPermission = name !== '' && favoriteCategories.length > 0;
  console.log('get', getPermission);
  return getPermission ? children : <Navigate to={redirectTo}></Navigate>;
};

export default PrivateRoute;
