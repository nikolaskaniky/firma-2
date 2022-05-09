import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const {
      files,
      category,
      date,
      firstName,
      lastName,
      email,
      company,
      country,
      city,
      phone,
      zipCode,
      websiteLink,
      description,
    } = req.body;

    const newRequestObject = {
      files: files,
      category: category,
      date: date,
      firstName: firstName,
      lastName: lastName,
      email: email,
      company: company,
      country: country,
      city: city,
      phone: phone,
      zipCode: zipCode,
      websiteLink: websiteLink,
      description: description,
    };

    const usersRequestsPath = path.join(
      process.cwd(),
      "data",
      "backend",
      "users-requests.json"
    );
    const usersRequestsJSON = fs.readFileSync(usersRequestsPath);
    const usersRequestsParsed = JSON.parse(usersRequestsJSON);

    usersRequestsParsed.push(newRequestObject);
    fs.writeFileSync(usersRequestsPath, JSON.stringify(usersRequestsParsed));
    res.status(201).json(newRequestObject);
  } else {
    const usersRequestsPath = path.join(
      process.cwd(),
      "data",
      "backend",
      "users-requests.json"
    );
    const usersRequestsJSON = fs.readFileSync(usersRequestsPath);
    const usersRequestsParsed = JSON.parse(usersRequestsJSON);

    res.status(201).json(usersRequestsParsed);
  }
}

export default handler;
