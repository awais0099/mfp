import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        console.log('Auth app loaded **');

        const { onParentNavigate } = mount(ref.current, 
            {
                initialPath: history.location.pathname,
                onNavigate: (location) => {
                    console.log('The container noticed navigation in AuthApp.');
                    const { pathname } =  history.location;
                    if (pathname != location.pathname) {
                        history.push(location.pathname);
                    }
                },
                onSignIn: () => {
                    console.log('User signed in');
                    onSignIn();
                },
            }
        );

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
}