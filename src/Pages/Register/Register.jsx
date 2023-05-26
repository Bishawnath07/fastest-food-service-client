import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {  createUser , updateProfileAndPhoto } = useContext(AuthContext);
    console.log(createUser);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/"


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo , email, password)

        
        // validation
        
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            toast('Please add at least one uppercase')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            toast('Please add at least two numbers')
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            toast('Please add at least 6 characters in your password')
            return;
        }

        createUser( email, password , name , photo)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUser(result.user , name , photo)
                navigate("/")
                
            })

            .catch(error => {
                console.log(error);
            })

    }

    const updateUser = (user , name , photo )=>{
        updateProfileAndPhoto(user , name , photo)
        .then(result =>{
            console.log('update user' ,);
        })
        .catch(error => console.log(error))
    }

    


    return (
        <div>
            <div className="hero ">
                <ToastContainer></ToastContainer>
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phot URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                            </div>
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
                                    <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                           
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;