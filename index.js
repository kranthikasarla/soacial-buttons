const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-button-container">
    <div className="content-container">
      <h1>Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="like" className="like-button" />
        <Button buttonText="comment" className="comment-button" />
        <Button buttonText="share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
