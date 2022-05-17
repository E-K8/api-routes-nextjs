import fs from 'fs';
// import path

// this function is for executing server-side code

function handler(req, res) {
  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Data().toISOString,
      email: email,
      text: feedbackText,
    };
    // store that ^^^ in a database or in a file
    const filePath = path.join(process.cwd(), 'data', 'feedback.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(newFeedback);
  }
  res.status(200).json({ message: 'this works!' });
}

export default handler;
