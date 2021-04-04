import 'fontsource-roboto';
import React from 'react';
import {Route} from 'react-router';
import {Layout} from './components/Layout';
import {TeachingArea} from './Pages/TeachingArea/TeachingArea';
import {StudentArea} from "./Pages/StudentArea/StudentArea";
import {Rating} from "./Pages/Rating/Rating";
import {Forum} from "./Pages/Forum/Forum";

export default function App() {

  return (
    <Layout>
      <Route exact path='/' component={TeachingArea}/>
      <Route exact path='/account' component={StudentArea}/>
      <Route exact path='/rating' component={Rating}/>
      <Route exact path='/forum' component={Forum}/>
    </Layout>
  );
}