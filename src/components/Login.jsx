import { useDispatch } from 'react-redux';
import { authActions } from '../redux/auth';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.userLogin());
    
    toast.success("Login Successfull")
  };
  return (
    <main className='auth'>
      <section>
        <form onSubmit={loginHandler}>
          <div className='control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' autoComplete='off' />
          </div>
          <div className='control'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' autoComplete='off' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Login;
