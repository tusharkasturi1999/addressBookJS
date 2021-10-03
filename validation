let firstNameValidation = (firstName) => {
  let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
  if (regex.test(firstName)) return true;
  else throw "Enter valid first Name!!";
};
let lastNameValidation = (lastName) => {
  let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
  if (regex.test(lastName)) return true;
  else throw "Enter valid last Name!!";
};
let addressValidation = (address) => {
  let regex = RegExp("^[a-zA-Z]{4,}");
  if (regex.test(address)) return true;
  else throw "Enter valid address!!";
};
let cityValidation = (city) => {
  let regex = RegExp("^[a-zA-Z]{4,}");
  if (regex.test(city)) return true;
  else throw "Enter valid city!!";
};
let stateValidation = (state) => {
  let regex = RegExp("^[a-zA-Z]{4,}");
  if (regex.test(state)) return true;
  else throw "Enter valid state!!";
};
let zipValidation = (zip) => {
  let regex = RegExp("^[0-9]{5}[- ]?[0-9]{4}$");
  if (regex.test(zip)) return true;
  else throw "Enter valid zip!!";
};
let phoneValidation = (phone) => {
  let regex = RegExp("^91 [1-9][0-9]{9}$");
  if (regex.test(phone)) return true;
  else throw "Enter valid mobile number!!";
};
let emailValidation = (email) => {
  let regex = RegExp(
    "^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$"
  );
  if (regex.test(email)) return true;
  else throw "Enter valid Email!!";
};
module.exports = {
  firstNameValidation,
  lastNameValidation,
  addressValidation,
  cityValidation,
  stateValidation,
  zipValidation,
  emailValidation,
  phoneValidation,
};