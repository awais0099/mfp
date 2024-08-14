import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: (location) => {
                console.log('The container noticed navigation in Marketing.');
                const { pathname } =  history.location;
                if (pathname != location.pathname) {
                    history.push(location.pathname);
                }
            },
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
}