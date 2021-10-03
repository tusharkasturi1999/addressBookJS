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

//Edit the Contact details
let editContact = (personName) => {
  let flag = false;
  for (let i = 0; i < addressBookArray.length; i++) {
    if (addressBookArray[i].firstName == personName) {
      flag = true;
      let repeat = true;
      while (repeat) {
        console.log(
          "1.FirstName\n2.LastName\n3.Address\n4.City\n5.State\n6.Zip\n7.Mobile no.\n8.Email\n9.Stop"
        );
        let option = prompt("Enter what you need to edit");
        switch (Number(option)) {
          case 1:
            let firstName = prompt("Enter the first name: ");
            try {
              validation.firstNameValidation(firstName);
              addressBookArray[i].firstName = firstName;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 2:
            let lastName = prompt("Enter the last name: ");
            try {
              validation.lastNameValidation(lastName);
              addressBookArray[i].lastName = lastName;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 3:
            let address = prompt("Enter the Address: ");
            try {
              validation.addressValidation(address);
              addressBookArray[i].address = address;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 4:
            let city = prompt("Enter the city name: ");
            try {
              validation.cityValidation(city);
              addressBookArray[i].city = city;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 5:
            let state = prompt("Enter the state: ");
            try {
              validation.stateValidation(state);
              addressBookArray[i].state = state;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 6:
            let zip = prompt("Enter the Zip: ");
            try {
              validation.zipValidation(zip);
              addressBookArray[i].zip = zip;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 7:
            let phone = prompt("Enter the Mobile no.: ");
            try {
              validation.phoneValidation(phone);
              addressBookArray[i].phone = phone;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 8:
            let email = prompt("Enter the Email: ");
            try {
              validation.emailValidation(email);
              addressBookArray[i].email = email;
            } catch (error) {
              console.error(error);
              editContact(personName);
            }
            break;
          case 9:
            repeat = false;
            break;
          default:
            console.log("Enter correct option");
            repeat = false;
            break;
        }
      }
    }
  }
  if (flag == false)
    console.log("Name you entered is not present in addressBook");
};

//main
let flag = true;
while (flag) {
  console.log("1.Add Contact\n2.Display AddressBook\n3.Edit Contact");
  let choice = prompt("Enter your choice: ");
  switch (Number(choice)) {
    case 1:
      addContact(); //calling the addContact function to insert details into contact
      break;
    case 2:
      displayAddressBook(); // displays the addressBook
      break;
    case 3:
      let personName = prompt(
        "Enter the name whose contact detail needs to be edited :"
      );
      editContact(personName);
      break;
    default:
      console.log("Wrong choice");
      flag = false; // break the while loop
      break;
  }
}