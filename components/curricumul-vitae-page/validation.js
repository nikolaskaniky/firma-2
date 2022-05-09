export default function validation(values) {
  let errors = {};
  if (values.firstName.trim() === "") {
    errors.firstName = "First name is required";
  }

  if (values.lastName.trim() === "") {
    errors.lastName = "Last name is required";
  }

  if (values.country.trim() === "") {
    errors.country = "Country is required";
  }

  if (values.city.trim() === "") {
    errors.city = "city is required";
  }

  if (values.zipCode.trim() === "") {
    errors.zipCode = "Zip code is required";
  }

  if (values.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Email should include @";
  }

  if (values.phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone number is required";
  }

  if (values.hobby.trim() === "") {
    errors.hobby = "Hobby is required.";
  }

  if (values.description.trim() === "") {
    errors.description = "Description is required.";
  }

  if(errors === {}) {
    errors = false;
  }
  return errors;
}
