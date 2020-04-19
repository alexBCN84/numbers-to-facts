import React, {useState} from 'react';
import {getRandomMath} from '../api';

const RandomMath = () => {
    const [randomMath, setRandomMath] = useState({});
    return (
        <section className="randomNumbers">
        <article>
          <p>Random Math Facts</p>
          <button 
            onClick={() => {
                setRandomMath(null);
                getRandomMath().then(data => setRandomMath(data));
              }
            }
          >
            Random fact about Maths
          </button>
          <div>
            {randomMath?.text}
            {!randomMath && <div className="random-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default RandomMath;