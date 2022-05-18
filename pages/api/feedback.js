import fs from 'fs';
import path from 'path';

// this function ↓↓↓ is for executing server-side code (and only)

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };
    // store that ^^^ in a database or in a file

    const filePath = path.join(process.cwd(), 'data', 'feedback.json'); //will create absolute path to the folder for us
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    res.status(200).json({ message: 'this works!' });
  }
}

export default handler;
