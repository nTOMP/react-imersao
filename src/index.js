import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video';
import NotFound from './pages/NotFound';
import CadastroCategoria from './pages/cadastro/categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route path='/' component={Home} />
      <Route component={NotFound}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

