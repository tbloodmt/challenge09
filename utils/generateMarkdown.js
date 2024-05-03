// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `[github license](https://img.shields.io/badge/license-${license}-green.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
return `\n* [License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
    this project is licensed under the ${license} license
    `
  }
  return ""
}

// TODO: Create a function to generate markdown for README
// THEN a high-quality, professional README.md is generated with the title of my project and sections
//  entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  * ${data.description}

  ## table of contents

  * [Installation](#installation)

  * [Usage](#usage)

   ${renderLicenseLink(data.license)}

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
    If you have any questions, email me at [${data.email}](mailto:${data.email}). Checkout my other work at [GitHub](https://github.com/${data.GitHub}).

    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
