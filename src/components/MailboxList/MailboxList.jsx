import { Link } from "react-router-dom";
import "./MailboxList.css";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>All Mailboxes</h2>
      <ul>
        {mailboxes.map((mb) => (
          <li key={mb._id} className="mail-box">
            <Link to={`/mailboxes/${mb._id}`}>Box #{mb._id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailboxList;
