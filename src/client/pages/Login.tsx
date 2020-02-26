import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { api, setToken, Token } from '../services/api-services';

const Login: React.FC<LoginProps> = props => {
	const [email, setEmail] = useState<string>('guest@test.com');
	const [password, setPassword] = useState<string>('password123');
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		api('/auth/tokens/validate').then(result => {
			if (result?.msg === 'loggedIn') {
				props.history.push('/');
			}
		});
	}, []);

	const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let result = await api<{ token: string }>('/auth/login', 'POST', { email, password });
		if (result?.token) {
            setToken(result.token);
            props.history.push('/');
		} else {
			setError(true);
		}
	};

	return (
		<div>
			<form action="">
				<input value={email} onChange={e => setEmail(e.target.value)} type="email" />
				<input value={password} onChange={e => setPassword(e.target.value)} type="password" />
				<button onClick={handleLogin}>Login, Sucka!</button>
				{error ? <small>Invalid Login.</small> : null}
			</form>
		</div>
	);
};

interface LoginProps extends RouteComponentProps {}

export default Login;
