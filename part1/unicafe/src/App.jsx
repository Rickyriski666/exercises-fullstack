import { useState } from 'react';
import Statistics from './component/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAllFeedback] = useState(0);

  const handleGood = () => {
    const newFeedback = good + 1;
    setGood(newFeedback);
    setAllFeedback(newFeedback + neutral + bad);
  };
  const handleBad = () => {
    const newFeedback = bad + 1;
    setBad(newFeedback);
    setAllFeedback(newFeedback + neutral + good);
  };
  const handleNeutral = () => {
    const newFeedback = neutral + 1;
    setNeutral(newFeedback);
    setAllFeedback(newFeedback + good + bad);
  };

  const avarage =
    allFeedback !== 0 ? (good * 1 + neutral * 0 + bad * -1) / allFeedback : 0;

  const positifPresentage =
    allFeedback !== 0 ? (good / allFeedback / 100) * 100 : 0;

  console.log(avarage + 'appppppppp');

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={allFeedback} />
          <Statistics text="avarage" value={avarage} />
          <Statistics text="positif" value={`${positifPresentage}%`} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
