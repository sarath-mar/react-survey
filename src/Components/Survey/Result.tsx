import React from "react";
import { ResultProp } from "../../Utils/Model";

function Result(props: ResultProp) {
  const getanswer = () => {
    let result = [];
    for (const asw of props.answer) {
      let object: { question: string; optionid: number; optionvalue: string } =
        { question: "", optionid: 1, optionvalue: "" };
      object.question = asw.question;
      let data = asw.questionoption.find((x) => x.selected);
      if (data) {
        object.optionid = data.optionid;
        object.optionvalue = data.optionvalue;
      }
      result.push(object);
    }
    return result;
  };
  return (
    <div>
      <h1>Your Survey Answer : </h1>
      <hr />
      {getanswer().map((x) => (
        <ul>
          <li>
            {x.question} - {x.optionvalue}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Result;
