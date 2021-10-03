const prompt = require("prompt-sync")();
const validation = require("./validation.js");

let contact;
let addressBookArray = [];
const addContact = () => {
  let firstName = prompt("Enter the first name: ");
  let lastName = prompt("Enter the last name: ");
  let address = prompt("Enter the Address: ");
  let city = prompt("Enter the city: ");
  let state = prompt("Enter the State: ");
  let zip = prompt("Enter the ZIP: ");
  let phone = prompt("Enter the Phone number: ");
  let email = prompt("Enter the email id: ");

  //validation for the user inputs
  try {
    validation.firstNameValidation(firstName);
    validation.lastNameValidation(lastName);
    validation.addressValidation(address);
    validation.cityValidation(city);
    validation.stateValidation(state);
    validation.zipValidation(zip);
    validation.phoneValidation(phone);
    validation.emailValidation(email);
  } catch (error) {
    console.error(error);
    addContact();
  }
  contact = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    phone: phone,
    email: email,
  };
  addressBookArray.push(contact);
  console.log("Contacts inserted successfully");
  console.log(contact);
};

//displays the addressBook Contacts
let displayAddressBook = () => {
  console.log(addressBookArray);
};

let flag = true;
while (flag) {
  console.log("1.Add Contact\n2.Display AddressBook");
  let choice = prompt("Enter your choice: ");
  switch (Number(choice)) {
    case 1:
      addContact(); //calling the addContact function to insert details into contact
      break;
    case 2:
      displayAddressBook(); // displays the addressBook
      break;
    default:
      flag = false; // break the while loop
      break;
  }
}
