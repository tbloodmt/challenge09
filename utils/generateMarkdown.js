// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// THEN a high-quality, professional README.md is generated with the title of my project and sections
//  entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}
  * ${data.description}

  ## table of contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ### Installation
    ${data.installation}
  ### Usage
    ${data.usage}
  ### License

  ### Contributing 
    ${data.contributing}
  ### Tests
    ${data.tests}
  ### Questions
    if you have any questions, email me at [${data.email}](mailto:${data.email}) checkout my other work at [GitHub](https://github.com/${data.GitHub})
`;
}

module.exports = generateMarkdown;
