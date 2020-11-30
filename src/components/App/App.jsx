import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import Survey from '../pages/Survey/Survey';
import History from '../pages/History/History';
import Page from '../parts/Page/Page';

import defaultTheme from '../../assets/mui/default';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={defaultTheme}>
          <Page>
            <Switch>
              <Route path="/survey" component={Survey} />
              <Route path="/history" component={History} />
              <Redirect to="/survey" />
            </Switch>
          </Page>
        </MuiThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
