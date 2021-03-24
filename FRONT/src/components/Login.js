import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import { Button } from 'antd'

import PoweroffOutlined from '@ant-design/icons'

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push('/');
        }).catch(error => {
            setLoading(false);
            if (error.response.status === 401) setError(error.response.data.message);
            else setError("Something went wrong. Please try again later.");
        });
    }
    

    return (
        <div>
            <form onSubmit={handleLogin} style={{marginLeft:'500px', padding: '1em', border: '2px solid blue', marginTop: '2rem', width: '250px', height: '350px' }}>
            <p style={{textAlign: 'center', fontWeight: 'bolder', }}>Connexion</p>
            <br />
            <br />
            <div>
                <p style={{ textAlign: 'center'}}>Nom d'utilisateur</p>
            <br />
                <input style={{ marginLeft: 20}} type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                <p style={{ textAlign: 'center'}}>Mot de Passe</p>
            <br />
                <input style={{marginLeft: 20}} type="password" {...password} autoComplete="new-password" />
            </div>
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input style={{ marginLeft: 70,}} type="submit" value={loading ? 'Loading...' : 'Envoyer'}  disabled={loading} /><br />
            {/* <Button type= "primary" icon={<PoweroffOutlined />} /> */}
            </form>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;