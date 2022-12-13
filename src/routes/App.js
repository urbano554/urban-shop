import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppContext } from '../context/AppContext';

import { Layout } from '@containers/Layout';

import Home from '@pages/Home';

import NotFound from '@pages/NotFound';

import { useInitialState } from '../hooks/useInitialState';

import '@styles/global.css';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
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
    </AppContext.Provider>
  );
};

export default App;
