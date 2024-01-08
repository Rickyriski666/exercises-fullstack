import Header from './Header';
import Content from './Content';
import Total from './Total';

export default function CourseDetail({ course }) {
  return (
    <div className="mt-8">
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts} />
    </div>
  );
}
