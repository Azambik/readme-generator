// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
   
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
    return `## License[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
    case "GPL 3.0":
      return `## License[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
    case "Apache 2.0":
      return `## License[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
    case "GPL 2.0":
      return `## License[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
    `
    case "LGPL":
      return `## License[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
    `
    case "none":
      return ``

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

//creating the optional sections
const generateInstall = installText => {
  if (!installText) {
      return "";
  }

  return `
  ##Installation
  
    ${installText}
  
  `
}

const generateUsage = usageText => {
  if (!usageText) {
      return "";
  }

  return `
  ##Usage
  
    ${usageText}
  
  `
}
const generateContribute = contributeText => {
  if (!contributeText) {
      return "";
  }

  return `
  ##Contribute
  
    ${contributeText}
  
  `
}
const generateTest = testText => {
  if (!testText) {
      return "";
  }

  return `
  ##Testing instructions
  
    ${testText}
  
  `
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
${data.description}
${generateInstall(data.install)}
${generateUsage(data.usage)}
${generateContribute(data.contribute)}
${generateTest(data.test)}
#created by
${data.name}
    
 contact me at: ${data.email}
 My github : https://github.com/${data.git}
${renderLicenseBadge(data.license)}
   


`;
}

module.exports = generateMarkdown;
