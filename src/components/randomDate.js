import React, {useState} from 'react';
import {getRandomDate} from '../api';

const RandomDate = () => {
    const [randomDate, setRandomDate] = useState({});
    return (
        <section className="randomNumbers">
        <article>
        <p>Random History Facts by Date</p>
          <button 
            onClick={() => {
                setRandomDate(null);
                getRandomDate().then(data => setRandomDate(data));
              }
            }
          >
            Get a random Date
          </button>
          <div>
            {randomDate?.text}
            {!randomDate && <div className="random-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default RandomDate;