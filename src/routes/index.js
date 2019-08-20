import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '~/pages/main';
import Detail from '~/pages/detail';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/movie/:id" component={Detail} />
    </Switch>
  );
}
