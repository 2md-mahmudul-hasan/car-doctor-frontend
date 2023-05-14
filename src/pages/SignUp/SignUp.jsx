
import { Link } from 'react-router-dom';
import sugnUpImg from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
  const { createUser } = useContext(authContext)
  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password)

    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex gap-16">
        <div className="w-1/2">
          <img className='w-full' src={sugnUpImg}></img>
        </div>

        <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-1/2">
          <form onSubmit={handleSignUp}>
            <div className="card-body">
              <h1 className="text-5xl text-center font-bold">Sign up now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name='name' type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">sign Up </button>
              </div>
            </div>
          </form>
          <p className='text-center font-bold'>already sign up? <Link className='text-warning' to='/login'> Log in  </Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;