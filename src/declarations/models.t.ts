export type View = "mobile" | "desktop";

export interface Flag extends HTMLOptionElement {
  flag: string;
}

export interface InputReducerState {
  value: string;
  isValid: boolean;
  isTouched: boolean;
}

export interface Validator {
  type: string;
  val?: any;
}

export interface InputReducerAction {
  type: "CHANGE" | "TOUCH";
  inputValue: string;
  validators: Validator[];
}
