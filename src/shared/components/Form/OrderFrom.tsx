import { useState } from "react";

import useForm from "../../../hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
  VALIDATOR_POSTAL_CODE,
} from "../../../Util/validators";

import Input from "./Input";
import Modal from "../Modal/Modal";

import { Form, Button, Div } from "./OrderForm.style";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [formState, inputHandler] = useForm(initialInputs, false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const authSubmitHandler = async (event: any) => {
    event.preventDefault();

    // console.log("formstate1: ", formState.inputs);
  };

  const submitFormHandler = () => {
    if (formState.isValid) {
      setIsModalOpen(true);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form onSubmit={authSubmitHandler}>
        <Div className="name">
          <Div>
            <Input
              element="input"
              id="name"
              type="text"
              label={t("localization:firstName")}
              autocomplete="on"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
              require={true}
              value={formState.inputs.name.value}
            />
          </Div>
          <Div>
            <Input
              element="input"
              id="last_name"
              type="text"
              label={t("localization:lastName")}
              autocomplete="on"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
              require={true}
            />
          </Div>
        </Div>

        <Div className="email">
          <Input
            element="input"
            id="email"
            type="email"
            label={t("localization:email")}
            autocomplete="on"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
            require={true}
          />
        </Div>

        <Div className="address">
          <Div>
            <Input
              element="input"
              id="street"
              type="text"
              label={t("localization:street")}
              autocomplete="on"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a street."
              onInput={inputHandler}
              require={true}
            />
          </Div>
          <Div>
            <Input
              element="input"
              id="city"
              type="text"
              label={t("localization:city")}
              autocomplete="on"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a city."
              onInput={inputHandler}
              require={true}
            />
          </Div>
        </Div>

        <Div className="address">
          <Div>
            <Input
              element="input"
              id="postal_code"
              type="text"
              label={t("localization:postalCode")}
              autocomplete="on"
              validators={[VALIDATOR_POSTAL_CODE()]}
              errorText="At least 4 digit and only number."
              onInput={inputHandler}
              require={true}
            />
          </Div>
          <Div>
            <Input
              element="input"
              id="country"
              type="text"
              label={t("localization:country")}
              autocomplete="on"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a country name."
              onInput={inputHandler}
              require={true}
            />
          </Div>
        </Div>

        <Div className="form_button">
          <Button type="submit" onClick={submitFormHandler}>
            {t("localization:order")}
          </Button>
        </Div>
      </Form>
      {isModalOpen && (
        <Modal onClose={handleClose}>
          <h1>Thanks!</h1>
          <p>Your order is on the way.</p>
          <span>
            <h5>Order detailes</h5>
            <p>
              Name: {formState.inputs.name.value}
              {formState.inputs.last_name.value}
              <br />
              Email: {formState.inputs.email.value}
              <br />
              Address: {formState.inputs.street.value},
              {formState.inputs.city.value}, {formState.inputs.country.value}
              <br />
              Postal code: {formState.inputs.postal_code.value}
            </p>
          </span>
        </Modal>
      )}
    </>
  );
};

export default OrderForm;
