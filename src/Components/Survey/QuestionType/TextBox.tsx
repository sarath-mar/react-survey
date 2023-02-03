import React from "react";
import { QuestionOptions, QuestionProps } from "../../../Utils/Model";
function TextBox(props: QuestionProps) {
  const textValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    index: number,
    optionid: number
  ) => {
    if (!props.answer.length) return;
    let data = props.answer[index];
    if (!data) return;
    for (const option of data.questionoption) {
      option.selected = false;
    }
    let result = data.questionoption.find((x) => x.optionid === optionid);
    if (!result) return;
    result.selected = true;
    result.optionvalue = event.target.value;
    props.setchange(!props.change);
  };
  return (
    <div>
      {props.questionoption.map((option: QuestionOptions) => (
        <div className="">
          <label>
            <textarea
              name="Write here"
              rows={14}
              onChange={(event) =>
                textValueChange(event, props.index, option.optionid)
              }
            ></textarea>
          </label>
        </div>
      ))}
    </div>
  );
}

export default TextBox;
