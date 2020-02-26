import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { api, setToken } from '../services/api';
import { shouldIStayOrShouldIGoNow } from '../services/login';

const Login: React.FC<LoginProps> = props => {
	const [email, setEmail] = useState<string>('guest@test.com');
	const [password, setPassword] = useState<string>('password123');

	useEffect(() => {
		//use helper function to see if we stay or go
		shouldIStayOrShouldIGoNow().then(decision => {
			if (decision) {
				//decision was true?
				//route back to home!
				props.history.push('/');
			}
			//otherwise just stay here to login :P
		});
	}, []);

	const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let result = await api<{ token: string }>('/auth/login', 'POST', { email, password });
		if (result?.token) {
			setToken(result.token);
			props.history.push('/');
		}
	};

	return (
		<div>
			<form action="">
				<input value={email} onChange={e => setEmail(e.target.value)} type="email" />
				<input value={password} onChange={e => setPassword(e.target.value)} type="password" />
				<button onClick={handleLogin}>Login, Sucka!</button>
			</form>
		</div>
	);
};

interface LoginProps extends RouteComponentProps {}

export default Login;
