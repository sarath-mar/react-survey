import React from "react";
import { QuestionOptions, QuestionProps } from "../../../Utils/Model";
import "./QuestionType.css";
function RadioCheckBox(props: QuestionProps) {
  const radioClicked = (index: number, optionid: any) => {
    if (!props.answer.length) return;
    let data = props.answer[index];
    if (!data) return;
    for (const option of data.questionoption) {
      option.selected = false;
    }
    let result = data.questionoption.find((x) => x.optionid === optionid);
    if (!result) return;
    result.selected = true;
    props.setchange(!props.change);
  };
  const IsChecked = (index: number, optionid: any) => {
    let data = props.answer[index];
    let result = data.questionoption.find((x: QuestionOptions) => x.selected);
    let value = false;
    if (result && result.optionid === optionid) {
      value = true;
    }
    return value;
  };
  return (
    <div className="radio-main">
      {props.questionoption.map((option: QuestionOptions) => (
        <div className="radio">
          <label style={{ fontSize: "20px" }}>
            <input
              className="larger"
              onChange={() => radioClicked(props.index, option.optionid)}
              type={props.type === "Radio" ? "radio" : "checkbox"}
              value="option1"
              checked={IsChecked(props.index, option.optionid)}
            />
            <span style={{ marginLeft: "10px" }}>{option.optionvalue}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioCheckBox;
