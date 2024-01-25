import '../style/index.css';

export default function Notification({ status, message }) {
  if (message === null) {
    return null;
  }

  if (status === 'succes') {
    return <div className="message-success">{message}</div>;
  }

  if (status === 'error') {
    return <div className="message-error">{message}</div>;
  }

  // return status === 'success' ? (
  //   <div className="message-success">{message}</div>
  // ) : (
  //   <div className="message-error">{message}</div>
  // );
}
