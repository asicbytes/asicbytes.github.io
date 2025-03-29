const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// Create a directory for the static files if it doesn't exist
const distDir = path.join(__dirname, 'deploy');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Function to generate static HTML from EJS templates
const generateStaticPage = (templateName, title, outputFileName) => {
  const templatePath = path.join(__dirname, 'views', `${templateName}.ejs`);
  const htmlContent = ejs.render(fs.readFileSync(templatePath, 'utf-8'), { title });
  fs.writeFileSync(path.join(distDir, outputFileName), htmlContent);
};

// Generate the home page
generateStaticPage('index', 'Home', 'index.html');


console.log('Static files have been generated in the "deploy" directory.');

