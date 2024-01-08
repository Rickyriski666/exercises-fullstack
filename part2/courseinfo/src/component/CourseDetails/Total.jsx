export default function Total({ exercises }) {
  const totalExercises = exercises.reduce(
    (sum, part) => sum + part.exercises,
    0
  );

  return (
    <div className="mt-4">
      <h3 className="font-bold">total of {totalExercises} exercises</h3>
    </div>
  );
}
