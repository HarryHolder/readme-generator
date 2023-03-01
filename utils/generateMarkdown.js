function licenseBadge(license) {
  if (license !== "None") {
    return `![license badge](https://img.shields.io/badge/license-${license}-green)`;
  }
  return "";
}

function licenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  }
  return "";
}

function licenseSection(license) {
  if (license !== "None") {
    return `## License
  
This project is licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${licenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${licenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To perform tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about the project, contact me directly at ${
    data.email
  }.
You can also reach out to me on GitHub via [${
    data.username
  }](https://github.com/${data.username}/).
`;
}

module.exports = generateMarkdown;
