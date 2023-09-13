export default function Statistics({ text, value }) {
  console.log(value);

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
