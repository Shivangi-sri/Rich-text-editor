export default function Button(props) {
  return (
    <div className="btn-container">
      {props.buttons.length > 0 &&
        props.buttons.map((button, index) => {
          return (
            <button
              className={`btn ${button.flag ? " selected-bold" : ""}`}
              onClick={props.handleClick.bind(this, button.type)}
              key={`${button.type}-${index}`}
            >
              {button.type}
            </button>
          );
        })}
    </div>
  );
}
