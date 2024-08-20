import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, initialPath, defaultHistory }) => {
    
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} />, el);

    return {
        onParentNavigate(location) {
            console.log('Container just navigated');
            const { pathname } = history.location;

            if (pathname != location.pathname) {
                history.push(location.pathname);
            }
        },
    };
}

if (process.env.NODE_ENV === 'development') {
    console.log('alon');
    console.log(process.env.NODE_ENV);

    const devroot = document.querySelector('#marketing-dev-root');
    if (devroot) {
        mount(devroot, {defaultHistory: createBrowserHistory()});
    }
}

export { mount };