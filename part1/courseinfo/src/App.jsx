const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { id: 1, name: 'Fundamentals of React', score: 10 },
      { id: 2, name: 'Using props to pass data', score: 7 },
      { id: 3, name: 'State of a component', score: 14 }
    ]
  };

  function Header(props) {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    );
  }

  function Content({ parts }) {
    const dataContent = parts.map(datas => {
      return (
        <p key={datas.id}>
          {datas.name} {datas.score}
        </p>
      );
    });

    return <div>{dataContent}</div>;
  }

  function Total({ parts }) {
    const scores = parts.map(datas => datas.score);
    const totalScore = scores.reduce((a, b) => a + b);

    return <p>number of exercises {totalScore} </p>;
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
