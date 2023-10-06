
// Funcion to create license label
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `!{Github license}(https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// Function to create license link
const renderLicenseLink = (license) => {
   if(license !== "None") {
      return `* [License](#license)\n`
   }
   return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of Content

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](questions)

  ### Installation

  To install is necessary dependencies, please run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

### Usage

${data.usage}

### License

This project is lecensed under the ${data.license} license.

### Contributing

${data.contributing}

### Tests

To run tests, please run following command:

\`\`\`
${data.test}
\`\`\`

### Questions

If you have any questions about the repo, please send me an email at ${data.email}.

You can find more about me at [${data.github}](https://github.com/${data.github}).


`;
}

module.exports = generateMarkdown;
