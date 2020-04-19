import React, {useState} from 'react';
import {getIntegerMath} from '../api';

const IntegerMath = () => {
    const [integerMath, setIntegerMath] = useState({});
    const [input, setInput] = useState("");

    function handleOnChange(e) {
      setInput(e.target.value)
    }

    function submit(e) {
      if (e.key === "Enter" || e.type === "click") {
        setIntegerMath(null);
        getIntegerMath(input).then(data => setIntegerMath(data));
        return;
      }
    }

    return (
        <section className="integerNumbers">
        <article>
          <p>How does a given number relates to Math concepts?</p>
          <input value={input} onChange={handleOnChange} placeholder="enter a nunmber" onKeyPress={submit} />
          <button onClick={submit}>
            <img alt="find" src="https://s3.eu-central-1.amazonaws.com/alexgines.com/icons/find.svg" width="20"/>
          </button>
          <div>
            {integerMath?.text}
            {!integerMath && <div className="integer-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default IntegerMath;