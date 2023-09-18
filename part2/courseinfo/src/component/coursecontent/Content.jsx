import React from 'react';

function Content({ content }) {
  const contents = content.map(value => {
    return (
      <div key={value.id}>
        <div>
          {value.name} {value.exercises}
        </div>
      </div>
    );
  });

  return <div>{contents}</div>;
}

export default Content;
