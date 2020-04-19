import React, {useState} from 'react';
import {getRandomYear} from '../api';

const RandomYear = () => {
    const [randomYear, setRandomYear] = useState({});
    return (
        <section className="randomNumbers">
        <article>
        <p>Random History Facts by Year</p>
          <button 
            onClick={() => {
                setRandomYear(null);
                getRandomYear().then(data => setRandomYear(data));
              }
            }
          >
            Get a random Year
          </button>
          <div>
            {randomYear?.text}
            {!randomYear && <div className="random-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default RandomYear;