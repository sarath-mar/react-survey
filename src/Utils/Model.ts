export type QuestionOptions = {
  optionid: number;
  optionvalue: string;
  price: number;
  optionaction: string;
  selected: boolean;
  subquestion: any;
};
export type QuestionType = {
  questionid: number;
  question: string;
  questiontype: string;
  attributetype: number;
  validation: boolean;
  questionoption: QuestionOptions[];
};
export type QuestionProps = {
  questionoption: QuestionOptions[];
  answer: QuestionType[];
  setAnswer?: React.Dispatch<React.SetStateAction<QuestionType[]>>;
  index: number;
  setchange: React.Dispatch<React.SetStateAction<boolean>>;
  change: boolean;
  type?: "Radio";
};
export type ErrorMsg = {
  isError: boolean;
  msg: string;
};
export type ResultProp = {
  answer: QuestionType[];
};
