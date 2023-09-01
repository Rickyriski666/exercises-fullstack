const App = () => {
  const data = {
    course: 'Half Stack application development',
    exercises: [
      { id: 1, title: 'Fundamentals of React', score: 10 },
      { id: 2, title: 'Using props to pass data', score: 7 },
      { id: 3, title: 'State of a component', score: 14 }
    ]
  };

  function Header(props) {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    );
  }

  function Content({ data }) {
    const dataContent = data.map(datas => {
      return (
        <p key={datas.id}>
          {datas.title} {datas.score}
        </p>
      );
    });

    return <div>{dataContent}</div>;
  }

  function Total({ score }) {
    const scores = score.map(datas => datas.score);
    const totalScore = scores.reduce((a, b) => a + b);

    return <p>number of exercises {totalScore} </p>;
  }

  return (
    <div>
      <Header title={data.course} />
      <Content data={data.exercises} />
      <Total score={data.exercises} />
    </div>
  );
};

export default App;
