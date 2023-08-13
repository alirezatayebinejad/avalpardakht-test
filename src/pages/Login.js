import React, { useState } from 'react';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {

    };

    return (
        <div >
            <div >
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="button" onClick={handleLogin}>Log In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
