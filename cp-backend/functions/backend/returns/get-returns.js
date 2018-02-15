import * as dynamoDbLib from "../../../libs/dynamodb-lib";
import { success, failure } from "../../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  
  const params = {
    TableName: "cp_returns",
    "IndexName": "returnId-index",
    KeyConditionExpression: "returnId = :returnId",
    ExpressionAttributeValues: {
      ":returnId": event.pathParameters.id
    }
  };

  try {
    const result = await dynamoDbLib.call("query", params);

    const email_value = result.Items[0].email;
    const params_revised = {
    TableName: "cp_returns",
    Key: {
      returnId: event.pathParameters.id,
      email: email_value
      } 
    };
    const get_result = await dynamoDbLib.call("get", params_revised);
    if (get_result.Item) {
      // Return the retrieved item
      callback(null, success(get_result.Item));
    } else {
      callback(null, failure({ status: false, error: "Item not found." }));
    }
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}