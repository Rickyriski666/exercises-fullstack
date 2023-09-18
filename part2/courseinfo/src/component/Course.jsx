import Content from './coursecontent/Content';
import Total from './coursecontent/Total';

function Course({ courses }) {
  const course = courses.map(value => {
    const { id, name, parts } = value;

    return (
      <div key={id}>
        <h1>{name}</h1>
        <Content content={parts} />
        <Total scores={parts} />
      </div>
    );
  });

  return <div>{course}</div>;
}

export default Course;
