const element = (
  // Write your code here.
  /*<div className="bg-container">
    <h1 className="heading">Congragulations</h1>
    <div className="sub-container">
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
      <div class="details">
        <h3>Kiran</h3>
        <p>
          Vishnu Institute of Computer Education and Technology. Bhimavaram{" "}
        </p>{" "}
      </div>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
    </div>
  </div>*/
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="card-title">Kiran V</h1>
      <p className="card-description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
