import React, {useState} from 'react';
import {getIntegerDate} from '../api';

const IntegerDate = () => {
    const [integerDate, setIntegerDate] = useState({});
    const [monthInput, setMonthInput] = useState("");
    const [dayInput, setDayInput] = useState("");

    function handleMonthOnChange(e) {
      setMonthInput(e.target.value)
    }

    function handleDayOnChange(e) {
      setDayInput(e.target.value)
    }

    function submit(e) {
      if (e.key === "Enter" || e.type === "click") {
        setIntegerDate(null);
        getIntegerDate(`${monthInput}/${dayInput}`).then(data => setIntegerDate(data));
        return;
      }
    }

    const daysArray = new Array(31);
    for (let i = 0; i < daysArray.length; i++) {
      daysArray[i] = i + 1
    }

    return (
        <section className="integerNumbers">
        <article>
          <p>What happened on a specific date?</p>
          <select name="months" onChange={handleMonthOnChange}>
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>September</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
          <select name="days" onChange={handleDayOnChange}>
            { daysArray.map(day => <option key={day} value={day}>{day}</option>)}
          </select>
          <button onClick={submit}>
            <img alt="find" src="https://s3.eu-central-1.amazonaws.com/alexgines.com/icons/find.svg" width="20"/>
          </button>
          <div>
            {integerDate?.text}
            {!integerDate && <div className="integer-loader">Loading...</div>}
            </div>
        </article>
      </section>
    )
}

export default IntegerDate;