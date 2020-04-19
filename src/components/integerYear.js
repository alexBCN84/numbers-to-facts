import React, {useState} from 'react';
import {getIntegerYear} from '../api';

const IntegerYear = () => {
    const [integerYear, setIntegerYear] = useState({});
    const [input, setInput] = useState("");

    function handleOnChange(e) {
      setInput(e.target.value)
    }

    function submit(e) {
      if (e.key === "Enter" || e.type === "click") {
        setIntegerYear(null);
        getIntegerYear(input).then(data => setIntegerYear(data));
        return;
      }
    }

    return (
        <section className="integerNumbers">
        <article>
          <p>What happened in a specific year?</p>
          <input value={input} onChange={handleOnChange} placeholder="enter a year" onKeyPress={submit} />
          <button onClick={submit}>
            <img alt="find" src="https://s3.eu-central-1.amazonaws.com/alexgines.com/icons/find.svg" width="20"/>
          </button>
          <div>
            {integerYear?.text}
            {!integerYear && <div className="integer-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default IntegerYear;