import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { DataContext } from '../../context/LoginContext';
//librarie
import Input from '../../components/input/Input';
import backgroundImage from '../../assets/img/backgroun_form.jpg';
import keyImage from '../../assets/img/key.svg';
import userImage from '../../assets/img/user.svg';
import logo from '../../assets/img/marca_de_agua.png';
import './login.css';


function Login() {

    const history = useHistory();

    const [userState, setUserState] = useState({
        userName: '',
        pass: ''
    });

    const { setLogin } = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://172.16.4.176:4000/api.v1/eklipse.v2/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: userState.userName,
                password: userState.pass
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.Message === 'OK') {
                    localStorage.setItem('id', data.token);
                    setLogin({
                        login: true,
                    });
                    history.push('/home');
                }
            })
            .catch(error => console.log(error));
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
                        </p>
                    </div>
                    <img src={backgroundImage} alt="#" width="800" loading="lazy" />
                </section>
                <section className="container_inputs">
                    <section className="container_logo_clinica">
                        <img src={logo} alt="" loading="lazy"  width="250" />
                    </section>
                    <h1 className="form_title">LOGIN 🚀</h1>
                    <div className="form_input_container">
                        <section className="form_icon_container">
                            <img src={userImage} alt="" width="200" loading="lazy" />
                        </section>
                        <Input
                            onChange={handleInput}
                            name="userName"
                            type="text"
                            variant="outline"
                            placeholder="Usuario"
                        />
                    </div>
                    <div className="form_input_container">
                        <section className="form_icon_container">
                            <img src={keyImage} alt="" width="200" loading="lazy" />
                        </section>
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
                </section>
            </form>
        </div>
    )
}

export default Login;