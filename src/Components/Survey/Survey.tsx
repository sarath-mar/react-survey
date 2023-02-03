import React, { useState } from "react";
import { ErrorMsg, QuestionType } from "../../Utils/Model";
import DateBox from "./QuestionType/DateBox";
import RadioCheckBox from "./QuestionType/RadioCheckBox";
import TextBox from "./QuestionType/TextBox";
import Result from "./Result";
import "./Survey.css";
import survey from "./surveyQuestion.json";
function Survey() {
  let surveryQuestions = () => {
    let questions: QuestionType[] = [];
    if (survey && survey.questions.length) {
      questions = survey.questions;
    }
    return questions;
  };
  let [change, setchange] = useState(true);
  let [indexValue, setIndexValue] = useState(0);
  let [showSurveyAnswer, setShowSurveyAnswer] = useState(false);
  let [errorMessage, setErrorMessage] = useState<ErrorMsg>({
    isError: true,
    msg: "",
  });
  // let [answer, setAnswer] = useState<QuestionType[]>(surveryQuestions);
  // let setAnswer={}
  let answer: QuestionType[] = surveryQuestions();
  const nextButton = (isSubmit: boolean) => {
    let indexObject = answer[indexValue];
    if (indexObject && indexObject.questionoption) {
      let selected = indexObject.questionoption.find((x) => x.selected);
      if (selected) {
        setErrorMessage((preVal: ErrorMsg) => {
          return { ...preVal, isError: false };
        });
        setIndexValue((preVal) => ++preVal);
        return;
      }
    }
    setErrorMessage((preVal: ErrorMsg) => {
      return { ...preVal, isError: true, msg: "Please enter a value" };
    });
    setTimeout(() => {
      setErrorMessage((preVal: ErrorMsg) => {
        return { ...preVal, isError: false };
      });
    }, 3000);
  };
  let submit = () => {
    nextButton(true);
    setShowSurveyAnswer(true);
  };
  return (
    <div className="survey-main">
      <div className="survey" style={{}}>
        <div className="survey-only" style={{ marginBottom: "20px" }}>
          {answer.map(
            (question: QuestionType, index: number) =>
              index === indexValue && (
                <div>
                  <h1 style={{ marginTop: "30px" }}>
                    {index + 1}. {question.question}
                  </h1>
                  {question.questiontype === "Radio" && (
                    <RadioCheckBox
                      answer={answer}
                      index={index}
                      questionoption={question.questionoption}
                      key={index}
                      change={change}
                      setchange={setchange}
                      type="Radio"
                    />
                  )}
                  {question.questiontype === "Date" && (
                    <DateBox
                      answer={answer}
                      index={index}
                      questionoption={question.questionoption}
                      key={index}
                      change={change}
                      setchange={setchange}
                    />
                  )}
                  {question.questiontype === "Textarea" && (
                    <TextBox
                      answer={answer}
                      index={index}
                      questionoption={question.questionoption}
                      key={index}
                      change={change}
                      setchange={setchange}
                    />
                  )}
                  {question.questiontype === "Checkbox" && (
                    <RadioCheckBox
                      answer={answer}
                      index={index}
                      questionoption={question.questionoption}
                      key={index}
                      change={change}
                      setchange={setchange}
                    />
                  )}
                </div>
              )
          )}
          {showSurveyAnswer && <Result answer={answer} />}
        </div>
        {indexValue + 1 < answer.length && (
          <button onClick={() => nextButton(false)} className="next-btn">
            <span>Next</span>
          </button>
        )}
        {!showSurveyAnswer && indexValue + 1 === answer.length && (
          <div className="submit-main">
            <button
              onClick={() => {
                submit();
              }}
              className="submit-btn"
            >
              <span>Submit</span>
            </button>
          </div>
        )}

        {errorMessage.isError && (
          <p style={{ color: "red", textAlign: "center", margin: "10px" }}>
            {errorMessage.msg}
          </p>
        )}
      </div>
    </div>
  );
}

export default Survey;
