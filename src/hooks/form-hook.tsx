import { useCallback, useReducer } from "react";

interface Input {
  value: string;
  isValid: boolean;
}

export interface InitialInputs {
  name: Input;
  title?: Input;
  description?: Input;
  address?: Input;
  email?: Input;
  password?: Input;
}
interface Action {
  type: "INPUT_CHANGE" | "SET_DATA";
  inputId?: string;
  value?: string;
  isValid?: boolean;
  inputs?: { [key: string]: Input };
  formIsValid?: boolean;
}

const formReducer = (state: any, action: Action) => {
  console.log("formReducer");
  // console.log('ACCTION: ', action)
  // console.log('STATE: ', state)
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;

      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && (action.isValid ?? false);
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId!]: {
            value: action.value ?? "",
            isValid: action.isValid ?? false,
          },
        },
        isValid: formIsValid,
      };

    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

const useForm = (
  initialInputs: InitialInputs,
  initialFormValidity: boolean
) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  // console.log('formState: ', formState)

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      // console.log('id: ', id)
      dispatch({
        type: "INPUT_CHANGE",
        value,
        isValid,
        inputId: id,
      });
    },
    []
  );

  const setFormData = useCallback(
    (inputData: { [key: string]: Input }, formValidity: boolean) => {
      console.log("inputData: ", inputData);
      dispatch({
        type: "SET_DATA",
        inputs: inputData,
        formIsValid: formValidity,
      });
    },
    []
  );

  return [formState, inputHandler, setFormData];
};

export default useForm;
