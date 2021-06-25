import React from "react";
import Button from "../components/Button";
import { TextBox, TextArea } from "../components/TextBox";

class RichTextEditor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: "",
      color: "",
      isBold: false,
      isItalic: false,
      isUnderline: false,
      isList: false
    };
  }

  handleClick = (action) => {
    document.execCommand(action === "List" ? "insertUnorderedList" : action);

    if (action === "Bold") {
      this.setState((prevState) => ({ isBold: !prevState.isBold }));
    } else if (action === "Underline") {
      this.setState((prevState) => ({ isUnderline: !prevState.isUnderline }));
    } else if (action === "Italic") {
      this.setState((prevState) => ({ isItalic: !prevState.isItalic }));
    } else if (action === "List") {
      this.setState((prevState) => ({ isList: !prevState.isList }));
    }
  };

  ShowSelection = () => {
    return window.getSelection().toString();
  };

  getHeaderTextElement = () => {
    return [
      {
        type: "number",
        label: "fontSize",
        placeHolder: "Font Size(px)",
        classes: "text",
        value: this.state.fontSize
      },
      {
        type: "text",
        label: "foreColor",
        placeHolder: "Color Hex Code",
        classes: "text",
        value: this.state.color
      }
    ];
  };

  getInitialHeaderButtons = () => {
    const { isBold, isItalic, isUnderline } = this.state;

    return [
      { type: "Bold", flag: isBold },
      { type: "Italic", flag: isItalic },
      { type: "Underline", flag: isUnderline }
    ];
  };

  handleChange = (type, event) => {
    let textComponent = document.getElementById("Editor");

    if (type === "fontSize") {
      textComponent.style.fontSize =
        (event.target.value ? event.target.value : 20) + "px";
    } else if (type === "foreColor") {
      textComponent.style.color = event.target.value
        ? event.target.value
        : "black";
    }
  };

  handleLog = () => {
    let textComponent = document.getElementById("Editor");

    console.log(textComponent.innerHTML);
  };

  render() {
    return (
      <>
        <div className="editor-container">
          <Button
            buttons={this.getInitialHeaderButtons()}
            handleClick={this.handleClick}
          />
          <TextBox
            texts={this.getHeaderTextElement()}
            handleChange={this.handleChange}
          />
          <Button
            buttons={[{ type: "List", flag: this.state.isList }]}
            handleClick={this.handleClick}
          />
        </div>
        <div className="text-container">
          <TextArea
            label="Editor"
            placeHolder="Editor"
            classes="text-editor"
            handleChange={this.handleChange}
          >
            {this.state.text}
          </TextArea>
        </div>
        <button onClick={this.handleLog.bind(this)}>Log Content</button>
      </>
    );
  }
}

export default RichTextEditor;
