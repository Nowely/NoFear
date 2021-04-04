import 'fontsource-roboto';
import React from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {TeachingArea} from './Pages/TeachingArea/TeachingArea';
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {StudentRanking} from "./Pages/StudentRanking/StudentRanking";
import {DisciplineRanking} from "./Pages/DisciplineRanking/DisciplineRanking";
import {ComingEvents} from "./Pages/ComingEvents/ComingEvents";

export default function App() {

  return (
    <Layout>
      <Route exact path='/' component={TeachingArea}/>
      <Route exact path='/Account' component={StudentArea}/>
      <Route exact path='/StudentRanking' component={StudentRanking}/>
      <Route exact path='/DisciplineRanking' component={DisciplineRanking}/>
      <Route exact path='/ComingEvents' component={ComingEvents}/>
    </Layout>
  );
}