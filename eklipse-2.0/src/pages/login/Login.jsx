import React, { useState, useContext } from 'react';
import { DataContext } from '../../context/LoginContext';
//librarie
import { Input } from '@chakra-ui/react';
import backgroundImage  from '../../assets/img/backgroun_form.jpg';
import './login.css';


function Login() {

    const [userState, setUserState] = useState({
        userName: '',
        pass: ''
    });

    const {setLogin} = useContext( DataContext );

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/api.v1/eklipse.v2/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userState.userName,
                password: userState.pass
            })
        })
        .then(response => response.json() )
        .then(data => {
            if (data.Message === 'OK') {
                setLogin({
                    login: true,
                });
            }
        })
        .catch(error => console.log(error) );
        console.log(userState);
    }

    const handleInput = (e) => {
        setUserState({
            ...userState,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="form_container">
            <form className="form" onSubmit={handleSubmit}>
                    <section className="form_image_container">
                        <div className="luxury_background_for_image">
                            <p className="form_title_luxury">
                                EKLIPSE
                                <hr />
                            </p>
                        </div>
                        <img src={backgroundImage} alt="#" width="800" loading="lazy"/>
                    </section>
                    <h1 className="form_title">LOGIN 🚀</h1>
                    <div className="form_input_container">
                    <Input
                        onChange={handleInput}
                        name="userName"
                        type="text"
                        variant="outline"
                        placeholder="Usuario"
                    />
                 </div>
                <div className="form_input_container">
                <Input
                    onChange={handleInput}
                    name="pass"
                    type="password"
                    variant="outline"
                    placeholder="Contraseña"
                />
            </div>
            <div className="form_input_container form_input_container--input-buttom ">
                <Input
                    className="form-input_button"
                    type="submit"
                    value="Ingresar"
                />
            </div>   
            </form>
        </div>
    )
}

export default Login;