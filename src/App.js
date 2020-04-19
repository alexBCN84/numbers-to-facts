import React, {useState, useEffect} from 'react';
import './App.css';
import {getTodayRandomFact} from './api';
import {Grid, Row, Col} from 'react-grid-lib';

import {formatDate} from './helpers';
import RandomYear from './components/randomYear';
import RandomTrivia from './components/randomTrivia';
import RandomDate from './components/randomDate';
import RandomMath from './components/randomMath';
import IntegerYear from './components/integerYear';
import IntegerTrivia from './components/integerTrivia';
import IntegerDate from './components/integerDate';
import IntegerMath from './components/integerMath';

function App() {
  const [todayRandomFact, setTodayRandomFact] = useState();

  const {day, month} = formatDate();
  useEffect(() => {
    getTodayRandomFact().then(data => setTodayRandomFact(data));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>What happened on a previous {day} of {month}?</h1>
        <div>
          {!todayRandomFact && <div className="loader">Loading...</div>}
          {<p>{todayRandomFact?.text}</p>}
        </div>
      </header>
      <main>
        <section className="random">
          <Grid gutters={20} maxWidth={1400}>
            <Row>
              <Col mobile={12} tablet={6} desktop={3}>
                <RandomYear />
              </Col>
              <Col mobile={12} tablet={6} desktop={3}>
                <RandomTrivia />
              </Col>
              <Col mobile={12} tablet={6} desktop={3}>
                <RandomDate />
              </Col>
              <Col mobile={12} tablet={6} desktop={3}>
                <RandomMath />
              </Col>
            </Row>
          </Grid>
        </section>
        <section className="integer">
          <Grid gutters={20} maxWidth={1400}>
            <Row>
            <Col mobile={12} tablet={6} desktop={3}>
                <IntegerYear />
              </Col>
              <Col mobile={12} tablet={6} desktop={3}>
                <IntegerTrivia />
              </Col>
              <Col mobile={12} tablet={6} desktop={3}>
                <IntegerDate />
              </Col>
              <Col mobile={12} tablet={6} desktop={3}>
                <IntegerMath />
              </Col>
            </Row>
          </Grid>
          </section>
      </main>
    </div>
  );
}

export default App;
