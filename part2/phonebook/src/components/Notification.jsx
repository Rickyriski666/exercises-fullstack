import '../style/index.css';

export default function Notification({ status, message }) {
  if (message === null) {
    return null;
  }

  console.log(status);

  return status === 'success' ? (
    <div className="message-success">{message}</div>
  ) : (
    <div className="message-error">{message}</div>
  );
}
