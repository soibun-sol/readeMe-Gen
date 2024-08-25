// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'GNU AGPLv3') {
    return `![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
  } else if (license === 'GNU GPLv3') {
    return `![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === 'GNU LGPLv3') {
    return `![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  } else if (license ==='Mozilla') {
    return '![License: Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';
  }else if (license ==='Boost') {
    return '!License: Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)';
  }else if (license ==='Unlicense') {
    return '!License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
  }else if (license ==='Apache') {
    return '!License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }else{
    return '![License: None](https://img.shields.io/badge/License-None-lightgrey.svg)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
