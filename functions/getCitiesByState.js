const fs = require("fs")
const path = require("path")
const data = require("./data/cities.json")

exports.handler = async (event, context) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET",
  }

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
    }
  }

  if (event.httpMethod === "GET") {
    try {
      const stateId = event.queryStringParameters.stateId
      const citiesToReturn = data.filter(
        (city) => city["state_id"] === parseInt(stateId)
      )

      if (!citiesToReturn) {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ error: "State not found" }),
        }
      }

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(citiesToReturn),
      }
    } catch (error) {
      console.error("Error reading file:", error)

      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: "Failed to process GET request" }),
      }
    }
  }

  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: "Method Not Allowed" }),
  }
}
