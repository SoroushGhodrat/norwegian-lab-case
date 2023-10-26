const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_MINLENGTH = "MINLENGTH";
const VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_POSTAL_CODE = "POSTAL_CODE";

interface Validator {
  type: string;
  val?: any;
}

export const VALIDATOR_REQUIRE = (): Validator => ({
  type: VALIDATOR_TYPE_REQUIRE,
});

export const VALIDATOR_POSTAL_CODE = (): Validator => ({
  type: VALIDATOR_TYPE_POSTAL_CODE,
});

export const VALIDATOR_MINLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MINLENGTH,
  val,
});

export const VALIDATOR_MAXLENGTH = (val: number) => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val,
});

export const VALIDATOR_MIN = (val: number) => ({
  type: VALIDATOR_TYPE_MIN,
  val,
});

export const VALIDATOR_MAX = (val: number) => ({
  type: VALIDATOR_TYPE_MAX,
  val,
});

export const VALIDATOR_EMAIL = (): Validator => ({
  type: VALIDATOR_TYPE_EMAIL,
});

export const validate = (value: string, validators: Validator[]) => {
  let isValid = true;

  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length >= 3;
    }
    if (validator.type === VALIDATOR_TYPE_POSTAL_CODE) {
      const numericRegex = /^[0-9]+$/;
      value = value.replace(/\s/g, "");
      isValid = isValid && value.trim().length > 3 && numericRegex.test(value);
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};
