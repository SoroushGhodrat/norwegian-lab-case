import React, { useState } from "react";

import useForm from "../../../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_POSTAL_CODE,
} from "../../../Util/validators";

import Input from "./Input";

import { Form, Label, Button, Div } from "./OrderForm.style";

const initialInputs = {
  name: {
    value: "",
    isValid: false,
  },
  last_name: {
    value: "",
    isValid: false,
  },
  email: {
    value: "",
    isValid: false,
  },
  street: {
    value: "",
    isValid: false,
  },
  city: {
    value: "",
    isValid: false,
  },
  postal_code: {
    value: "",
    isValid: false,
  },
  country: {
    value: "",
    isValid: false,
  },
};



const OrderForm = () => {
  const [formState, inputHandler, setFormData] = useForm(initialInputs, false);

  const authSubmitHandler = async (event: any) => {
    event.preventDefault();

    console.log("formstate1: ", formState.inputs);
    console.log("formstate2: ", formState);

    setFormData(
      {
        ...formState.inputs,
      },
      true
    );
  };

  const resetFormHandler = () => {

  }

  // console.log("Data", formData);
  return (
    <Form onSubmit={authSubmitHandler}>
      <Div className="name">
        <Div>
          <Input
            element="input"
            id="name"
            type="text"
            label="First Name"
            autocomplete="on"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        </Div>
        <Div>
          <Input
            element="input"
            id="last_name"
            type="text"
            label="Last Name"
            autocomplete="on"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        </Div>
      </Div>

      <Div className="email">
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          autocomplete="on"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
      </Div>

      <Div className="address">
        <Div>
          <Input
            element="input"
            id="street"
            type="text"
            label="Street"
            autocomplete="on"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a street."
            onInput={inputHandler}
          />
        </Div>
        <Div>
          <Input
            element="input"
            id="city"
            type="text"
            label="City"
            autocomplete="on"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a city."
            onInput={inputHandler}
          />
        </Div>
      </Div>

      <Div className="address">
        <Div>
          <Input
            element="input"
            id="postal_code"
            type="text"
            label="Postal Code"
            autocomplete="on"
            validators={[VALIDATOR_POSTAL_CODE()]}
            errorText="Please enter a correct postal code. Postal code must be at least 4 digit and only number."
            onInput={inputHandler}
          />
        </Div>
        <Div>
          <Input
            element="input"
            id="country"
            type="text"
            label="Country"
            autocomplete="on"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a country name."
            onInput={inputHandler}
          />
        </Div>
      </Div>

      <Div className="form_button">
        <Button type="reset" onClick={resetFormHandler}>Reset all</Button>
        {/* <Button type="reset">Reset All</Button> */}
        {/* <Button type="submit" onClick={submitFormHandler}>Submit</Button> */}
        <Button type="submit">Submit</Button>
      </Div>
    </Form>
  );
};

export default OrderForm;
