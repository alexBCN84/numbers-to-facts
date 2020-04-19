import React, {useState} from 'react';
import {getIntegerTrivia} from '../api';

const IntegerTrivia = () => {
    const [integerTrivia, setIntegerTrivia] = useState({});
    const [input, setInput] = useState("");

    function handleOnChange(e) {
      setInput(e.target.value)
    }

    function submit(e) {
      if (e.key === "Enter" || e.type === "click") {
        setIntegerTrivia(null);
        getIntegerTrivia(input).then(data => setIntegerTrivia(data));
        return;
      }
    }

    return (
        <section className="integerNumbers">
        <article>
        <p>Curious about a trivia fact matching a number?</p>
          <input value={input} onChange={handleOnChange} placeholder="enter a trivia" onKeyPress={submit} />
          <button onClick={submit}>
            <img alt="find" src="https://s3.eu-central-1.amazonaws.com/alexgines.com/icons/find.svg" width="20"/>
          </button>
          <div>
            {integerTrivia?.text}
            {!integerTrivia && <div className="integer-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default IntegerTrivia;