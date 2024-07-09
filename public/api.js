exports.handler = async (event, context) => {
  if (event.httpMethod === "GET") {
    try {
      const data = require("./countries.json")

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(data),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      }
    }
  }
}
