import { profile } from "console";
import fs from "fs";
import path from "path";

function handler(req, res) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      country,
      city,
      birthDate,
      zipCode,
      email,
      phone,
      linkedIn,
      behance,
      dribble,
      other,
      hobby,
      description,
      languages,
      profile,
    } = req.body;

    const newCV = {
      profile: profile,
      languages: languages,
      firstName: firstName,
      lastName: lastName,
      country: country,
      city: city,
      birthDate: birthDate,
      zipCode: zipCode,
      email: email,
      phone: phone,
      linkedIn: linkedIn,
      behance: behance,
      dribble: dribble,
      other: other,
      hobby: hobby,
      description: description,
    };

    const cvPath = path.join(process.cwd(), "data", "backend", "cv.json");
    const cvJSON = fs.readFileSync(cvPath);
    const cvParsed = JSON.parse(cvJSON);

    cvParsed.push(newCV);
    fs.writeFileSync(cvPath, JSON.stringify(cvParsed));
    res.status(201).json(newCV);
  }

  if (req.method === "GET") {
    const cvPath = path.join(process.cwd(), "data", "backend", "cv.json");
    const cvJSON = fs.readFileSync(cvPath);
    const cvParsed = JSON.parse(cvJSON);

    res.status(201).json(cvParsed);
  }
}

export default handler;
