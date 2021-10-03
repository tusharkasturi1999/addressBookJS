const prompt = require("prompt-sync")();
const validation = require("./validation.js");

let contact;
let addressBookArray = [];
const addContact = () => {
  let firstName = prompt("Enter the first name: ");
  let repeatCheck = addressBookArray.find(function (contact) {
    if (contact.firstName == firstName) {
      return true;
    }
  });
  if (repeatCheck) {
    console.log("Name already exists!!Please choose different name");
    addContact();
    return;
  }
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
    return;
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
        let option = prompt("Enter what you need to edit:");
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

//delete contact from addressBook
let deleteContact = (personName) => {
  let flag = true;
  for (let i = 0; i < addressBookArray.length; i++) {
    if (addressBookArray[i].firstName == personName) {
      flag = false;
      addressBookArray.splice(i, 1);
      console.log("Deleted Successfully!!");
      break;
    }
  }
  if (flag) console.log("Name you entered is not present in addressBook");
};

//Number of contacts in the addressBook
let sizeAddressBook = () => {
  console.log(
    "Number of contacts in the addressBook is: " + addressBookArray.length
  );
};

//search based on city and state using filter method
let searchCityState = (place) => {
  resultArray = addressBookArray.filter(
    (contact) => contact.state == place || contact.city == place
  );
  if (resultArray.length == 0) {
    console.log("There are no people in this state or city");
  } else {
    console.log("There are " + resultArray.length + " people");
    console.log("Result:" + JSON.stringify(resultArray));
  }
};

//sort the array based on name,city,state,zip in asscending order
let sortAddressBook = () => {
  console.log("How do you want to sort\n1.Name\n2.City\n3.state\n4.zip");
  let ch = prompt("Enter you choice:");
  let first, second;
  switch (Number(ch)) {
    case 1:
      addressBookArray.sort((a, b) => {
        first = a.firstName.toLowerCase();
        second = b.firstName.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
      break;
    case 2:
      addressBookArray.sort((a, b) => {
        first = a.city.toLowerCase();
        second = b.city.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
      break;
    case 3:
      addressBookArray.sort((a, b) => {
        first = a.state.toLowerCase();
        second = b.state.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
      break;
    case 4:
      addressBookArray.sort((a, b) => {
        first = a.zip.toLowerCase();
        second = b.zip.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      console.log("Wrong choice");
      break;
  }
  displayAddressBook();
};

//main
let flag = true;
let personName;
while (flag) {
  console.log(
    "1.Add Contact\n2.Display AddressBook\n3.Edit Contact\n4.Delete Contact\n5.Count of contacts\n6.search by city or state\n7.sort by name,city,state,zip"
  );
  let choice = prompt("Enter your choice: ");
  switch (Number(choice)) {
    case 1:
      addContact(); //calling the addContact function to insert details into contact
      break;
    case 2:
      displayAddressBook(); // displays the addressBook
      break;
    case 3:
      personName = prompt(
        "Enter the name whose contact detail needs to be edited :"
      );
      editContact(personName); //edit the contact
      break;
    case 4:
      personName = prompt("Enter the name whose contact you need to delete :");
      deleteContact(personName); //delete the contact
      break;
    case 5:
      sizeAddressBook(); //length of addressBook
      break;
    case 6:
      let place = prompt("Enter the city name or state :");
      searchCityState(place); //serach by city or state
      break;
    case 7:
      sortAddressBook(); //sort the addressbook based on person's name
      break;
    default:
      console.log("Wrong choice");
      flag = false; // break the while loop
      break;
  }
}