import React, {lazy, Suspense, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from './components/Header';
import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import('./components/Marketing'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <StylesProvider>
            <BrowserRouter>
                <div>
                    <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            {/* <Route path="/auth" component={AuthLazy} /> */}
                            {/* <Route path="/auth/signin" component={AuthLazy} /> */}
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}