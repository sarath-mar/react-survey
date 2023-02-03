import React from "react";
import { QuestionOptions, QuestionProps } from "../../../Utils/Model";
function DateBox(props: QuestionProps) {
  const dateSelected = (
    event: React.ChangeEvent<HTMLInputElement>,
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
            <input
              type="date"
              className="date"
              onChange={(event) =>
                dateSelected(event, props.index, option.optionid)
              }
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default DateBox;
