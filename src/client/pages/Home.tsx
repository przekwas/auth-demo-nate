import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { api } from '../services/api';
import { shouldIStayOrShouldIGoNow } from '../services/login';

const Home: React.FC<HomeProps> = props => {
	useEffect(() => {
		shouldIStayOrShouldIGoNow().then(decision => {
			if (!decision) {
				props.history.push('/login');
			} else {
				api('/api/test').then(data => console.log(data));
			}
		});
	}, []);

	return (
		<div>
			<h1 className="text-center">Home Component</h1>
		</div>
	);
};

interface HomeProps extends RouteComponentProps {}

export default Home;
