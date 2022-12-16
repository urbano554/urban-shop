import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

import { Layout } from '@containers/Layout';

import Home from '@pages/Home';

import NotFound from '@pages/NotFound';

import { SkeletonTheme } from 'react-loading-skeleton';

import { useInitialState } from '../hooks/useInitialState';

import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <SkeletonTheme baseColor="#0d0922" highlightColor="#444">
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route
                exact
                path='/'
                component={Home}
              />
              <Route
                path='*'
                component={NotFound}
              />
            </Switch>
          </Layout>
        </BrowserRouter>
      </SkeletonTheme>
    </AppContext.Provider>
  );
};

export default App;
