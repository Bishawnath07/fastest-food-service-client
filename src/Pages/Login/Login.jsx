import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || "/"

    const handleGithubSignIn = () =>{
        signInWithPopup(auth , GithubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error.message)
        })
    }



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label" required>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    <p className='mb-4 ml-8'>
                        <Link to='/register' className="label-text-alt link link-hover" >
                            New to Authmaster ? Please Register
                        </Link>
                    </p>
                    </form>
                    <div className='flex flex-col mx-10'>
                        <button onClick={handleGoogleSignIn} className='btn btn-success mb-4 flex items-center gap-5' ><FaGoogle /> Login With Google</button>
                        <button onClick={handleGithubSignIn} className="btn btn-success  flex items-center gap-5 mb-10"><FaGithub /> Login With Github</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;