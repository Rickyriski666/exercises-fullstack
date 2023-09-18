import React from 'react';

function Total({ scores }) {
  const score = scores.map(value => value.exercises);
  const total = score.reduce((a, b) => a + b, 0);

  return <div>Total of {total} exercises</div>;
}

export default Total;
