// YOUR_BASE_DIRECTORY/netlify/functions/test-scheduled-function.js

/*const { schedule } = require("@netlify/functions");

const handler = async function(event, context) {
    console.log("Received event:", event);
    console.log("test 1");
    
    return {
        statusCode: 200,
    };
};

exports.handler = schedule("@daily", handler);*/

exports.handler = async function (event, context) {
    console.log("test 1");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};

