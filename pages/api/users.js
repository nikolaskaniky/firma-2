import React from 'react';
import fs from 'fs';
import path from 'path';

const handler = (req, res) => {
  if(req.method === 'GET') {
      const usersPath = path.join(process.cwd(), 'data','backend', 'users.json');
      const usersJSON = fs.readFileSync(usersPath);;
      const usersData = JSON.parse(usersJSON);

      res.status(201).json(usersData);
  }
};

export default handler;
