import "./maillist.css";
const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail_title">Save time, save money!</h1>
      <span>Sign up and we'll send the best deals to you</span>
      <div className="mail_input_container">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
