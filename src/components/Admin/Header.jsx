import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux/auth';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (<>
    <header className='header'>
      <h1>Admin Redux Toolkit</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <Link to='/admin'>Dashboard</Link>
            </li>
            <li>
              <Link to='/admin/userlist'>User List</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}

      {!isAuth && (
        <nav>
          <ul>
            <li>
              <Link to='/'>User</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>

    {/* ============= dynamic page add ============ */}
    <Outlet/>
    </>
  );
};

export default Header;
