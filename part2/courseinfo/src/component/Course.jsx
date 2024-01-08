import CourseDetail from './CourseDetails/CouseDetail';

export default function Course({ courses }) {
  return (
    <>
      <h1 className="font-bold text-4xl">Web development curriculum</h1>
      {courses.map((course) => (
        <CourseDetail key={course.id} course={course} />
      ))}
    </>
  );
}
