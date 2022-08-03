https://www.youtube.com/watch?v=4wD00RT6d-g&list=LL&index=1

COMMAND LINE | COMMENT

npm init -y | Add the package.json to workspace
npm install @11ty/eleventy --save-dev | Install eleventy as a development only tool

PACKAGE.JSON
"test": "echo \"Error: no test specified\" && exit 1"
->
"start": eleventy --serve" | Serve the site on save for development
"build": "eleventy"

CREATE .eleventy.js
// Tell eleventy where the front facing files are going to be
module.exports = function (eleventyConfig) {

//Grab the files for eleventy to take and pass through to the public folder
eleventyConfig.addPassthroughCopy("./src/style.css");
eleventyConfig.addPassthroughCopy("./src/assets")

    return {
    dir: {
    input: "src", //Change this for where the input files are
    output: "public", //This can also be changed
    },
    };

};

COMMAND LINE can now '~/npm start' to launch a local host

CREATE a new folder in your 'src' folder nammes [no \]'\_includes' and add a 'base.njk' file
