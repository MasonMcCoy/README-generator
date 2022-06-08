// Source: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenseObj = {
  'None': {
    badge: '',
    link: ''
  },
  'Apache License 2.0': {
    badge: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'GNU General Public License v3.0': {
    badge: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'MIT License': {
    badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    link: 'https://opensource.org/licenses/MIT'
  },
  'BSD 2-Clause "Simplified" License': {
    badge: '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)',
    link: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  'BSD 3-Clause "New" or "Revised" License': {
    badge: '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
    link: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  'Boost Software License 1.0': {
    badge: '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
    link: 'https://www.boost.org/LICENSE_1_0.txt'
  },
  'Creative Commons Zero v1.0 Universal': {
    badge: '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)',
    link: 'http://creativecommons.org/publicdomain/zero/1.0/'
  },
  'Eclipse Public License 2.0': {
    badge: '![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)',
    link: 'https://opensource.org/licenses/EPL-2.0'
  },
  'GNU Affero General Public License v3.0': {
    badge: '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)',
    link: 'https://www.gnu.org/licenses/agpl-3.0'
  },
  'GNU General Public License v2.0': {
    badge: '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  },
  'GNU Lesser General Public License v2.1': {
    badge: '![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)',
    link: 'https://www.gnu.org/licenses/lgpl-2.1'
  },
  'Mozilla Public License 2.0': {
    badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
    link: 'https://opensource.org/licenses/MPL-2.0'
  },
  'The Unlicense': {
    badge: '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)',
    link: 'http://unlicense.org/'
  }
}

// Returns a license badge based on user selection
// If there is no license, an empty string is returned
function renderLicenseBadge(lKey) {
  return licenseObj[lKey].badge;
}

// Returns the license link
// If there is no license, an empty string is returned
function renderLicenseLink(lKey) {
  return licenseObj[lKey].link;
}

// Returns the license section of README
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  let licenseKey = license.license;
  if (licenseKey != 'None') {
  return `## License
    
  Licensed under the ${licenseKey}. You may not use this file except in compliance with this license.
  ${renderLicenseLink(licenseKey)}`
  } else {
    return ``
  }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license) + "(" + renderLicenseLink(data.license) + ")"}

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

  ${renderLicenseSection(data)}

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