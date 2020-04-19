import React, {useState} from 'react';
import {getRandomTrivia} from '../api';

const RandomTrivia = () => {
    const [randomTrivia, setRandomTrivia] = useState({});
    return (
        <section className="randomNumbers">
        <article>
          <p>Random Trivia Facts</p>
          <button 
            onClick={() => {
                setRandomTrivia(null);
                getRandomTrivia().then(data => setRandomTrivia(data));
              }
            }
          >
            Get a random Trivia
          </button>
          <div>
            {randomTrivia?.text}
            {!randomTrivia && <div className="random-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default RandomTrivia;