// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}

  ## Table of Contents
  [Installation](#installation)  
  [Usage](#usage)  
  [License](#license)  
  [Contribution](#contribution)  
  [Tests](#tests)  
  [Questions](#questions)

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
  
  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.instructions}

  ## Questions

  Visit my GitHub for more information: [${data.GitHub}](https://github.com/${data.GitHub}/)  
  Contact me at ${data.email} with any additional questions.
`;
}

module.exports.generateMarkdown = generateMarkdown;