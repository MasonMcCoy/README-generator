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

function renderLicenses(licenseArray) {
  return licenseArray.join("\n")
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}

  ## Table of Contents
  [Installation](#installation)\n
  [Usage](#usage)\n
  [License](#license)\n
  [Contribution](#contribution)\n
  [Tests](#tests)\n
  [Questions](#questions)\n

  ## Installation 

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  
  ${renderLicenses(data.license)}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.instructions}

  ## Questions

  ${data.GitHub}\n
  ${data.email}
`;
}

module.exports.generateMarkdown = generateMarkdown;