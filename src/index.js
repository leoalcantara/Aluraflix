import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CadastroVideo from './pages/cadastro/video';

import  { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />  
      <Route path="/cadastro/videos" component={CadastroVideo} exact />

      <Route component={()=>(<h1>Erro 404</h1>)} />
      {/* <Route component={App} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
