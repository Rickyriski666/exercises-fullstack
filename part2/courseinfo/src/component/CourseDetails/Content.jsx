export default function Content({ parts }) {
  return (
    <ul>
      {parts.map((part) => (
        <li className="mt-4" key={part.id}>
          {part.name} {part.exercises}
        </li>
      ))}
    </ul>
  );
}
