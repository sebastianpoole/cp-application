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
    const deleteResult = await dynamoDbLib.call("delete", params_revised);
    callback(null, success({status: true}));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}