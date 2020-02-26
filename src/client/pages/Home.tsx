import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { api, Token } from '../services/api-services';

const Home: React.FC<HomeProps> = props => {

    useEffect(() => {
        if (Token === null) {
            props.history.push('/login');
        } else {
            api('/auth/tokens/validate').then(result => {
                if (result?.msg === 'loggedIn') {
                    api('/api/test')
                    .then(res => console.log(res));
                } else {
                    props.history.push('/login');
                }
            });
        }
    }, []);

    return (
        <div>
            <h1 className="text-center">Home Component</h1>
        </div>
    );
}

interface HomeProps extends RouteComponentProps {}

export default Home;