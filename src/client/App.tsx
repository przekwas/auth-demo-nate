import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App: React.FC<AppProps> = () => {
    return (
        <BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
    );
}

interface AppProps {}

export default App;