## Setting up Node.js and Express.js

To set up Node.js and Express.js for your project, follow these steps:

1. Install Node.js: Visit the official Node.js website [https://nodejs.org/](https://nodejs.org/) and download the installer for your operating system. Follow the installation instructions to install Node.js.

2. Create a new directory for your project: Open the Node.js command terminal and navigate to the location where you want to create your project. Use the following commands:
   
       mkdir your-project-name
       cd your-project-name

3. Initialize a new Node project: Run the following command to initialize a new Node project with default settings:

       npm init -y

4. Create your entry file: Create a file named `index.js` in your project directory. This will be your Express server file.

5. Install Express.js as a dependency: Run the following command to install Express.js:


6. Edit `package.json`: Open the `package.json` file in your project directory and update the `start` script to include `node` and your `index.js` file. Here's an example:

```json
{
  "name": "express-static-file-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "MIT"
}
```

7. Structuring your files: Create a public directory in your project directory. Inside the public directory, create an index.html file. This is where you'll store your client-side files.

8. Creating your Express server: Open the index.js file and add the following code:
```javascript
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
```

9. Building your web page (client-side): Open the index.html file inside the public directory and add your HTML code for the web page. For example:

```html
<html>
<head>
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <img src="shark.png" alt="shark">
</body>
</html>
```
Make sure to download the shark.png image and store it in the public directory.

10. Running your project: In the terminal, navigate to your project directory and run the following command to start your Express server:

       npm start

