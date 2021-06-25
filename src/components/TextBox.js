export function TextBox(props) {
  return (
    <>
      {props.texts.length > 0 &&
        props.texts.map((text, index) => {
          return (
            <input
              type={text.type}
              name={text.label}
              onChange={props.handleChange.bind(this, text.label)}
              placeholder={text.placeHolder}
              className={text.classes}
              value={props.value}
              key={`${text.type}-${index}`}
            />
          );
        })}
    </>
  );
}

export function TextArea(props) {
  return (
    <div
      id={props.label}
      onChange={props.handleChange}
      data-text={props.placeHolder}
      className={props.classes}
      contentEditable
    ></div>
  );
}
