const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const data = require('./data.js');

// Configuration
const sourceDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'deploy');
const defaultTemplate = 'base';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
  console.log(`Created output directory: ${outputDir}`);
}

// Configure EJS file loader
ejs.fileLoader = function(filePath) {
  const resolvedPath = path.resolve(sourceDir, filePath);
  console.log(`Loading template: ${resolvedPath}`);
  return fs.readFileSync(resolvedPath, 'utf-8');
};

// Combine data
const jsonData = personalData;

/**
 * Generate a static HTML page from EJS template
 * @param {string} pageName - Name of the page to generate (without extension)
 */
function generateStaticPage(pageName) {
  try {
    const templatePath = path.join(sourceDir, `${defaultTemplate}.ejs`);
    
    // Add page-specific data
    const pageData = {
      ...jsonData,
      index: `index`,
      education: `education`,
      experience: `experience`,
      publication: `publication`,
      tutorial: `tutorial`,
      project: `project`
    };
    
    // Render the template
    const html = ejs.render(fs.readFileSync(templatePath, 'utf-8'), pageData, {
      filename: templatePath // This allows includes to work correctly
    });
    
    // Write the rendered HTML to a file
    const outputPath = path.join(outputDir, `${pageName}.html`);
    fs.writeFileSync(outputPath, html);
    
    console.log(`Generated: ${outputPath}`);
  } catch (error) {
    console.error(`Error generating ${pageName}.html:`, error);
  }
}

// Generate pages
const pages = ['index'];
pages.forEach(generateStaticPage);

console.log(`\nStatic files are available in the "${path.relative(__dirname, outputDir)}" directory.`);
