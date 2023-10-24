import { ChangeEvent, useEffect, useReducer } from "react";

import {
  InputReducerAction,
  InputReducerState,
} from "../../../declarations/models.t";
import { validate } from "../../../Util/validators";
import "./Input.css";

interface Validator {
  type: string;
  val?: any;
}

interface InputProps {
  label: string;
  id: string;
  element: "input" | "textarea";
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText: string;
  validators: Validator[];
  value?: string;
  valid?: boolean;
  autocomplete?: "on" | "off";
  initialValid?: boolean;
  initialValue?: any;
  onInput: (id: string, value: string, isValid: boolean) => void;
}

const inputReducer = (state: InputReducerState, action: InputReducerAction) => {
  console.log("inputReducer");
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.inputValue,
        isValid: validate(action.inputValue, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = ({
  label,
  id,
  type,
  placeholder,
  errorText,
  validators,
  value,
  valid,
  onInput,
}: InputProps) => {
  const [state, dispatch] = useReducer(inputReducer, {
    value: value || "",
    isValid: valid || false,
    isTouched: false,
  });

  useEffect(() => {
    onInput(id, state.value, state.isValid);
  }, [id, state.value, state.isValid, onInput]);

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "CHANGE",
      inputValue: event.target.value,
      validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" } as InputReducerAction);
  };

  const customElement = (
    <input
      type={type}
      placeholder={placeholder}
      value={state.value}
      onChange={changeHandler}
      onBlur={touchHandler}
    />
  );

  return (
    <>
      <div
        className={`form-control ${
          !state.isValid && state.isTouched && "form-control--invalid"
        }`}
      >
        <label htmlFor={id}>{label}</label>

        {customElement}

        {!state.isValid && state.isTouched && <p>{errorText}</p>}
      </div>
    </>
  );
};

export default Input;
