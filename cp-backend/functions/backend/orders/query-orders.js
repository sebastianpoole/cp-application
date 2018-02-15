import * as dynamoDbLib from "../../../libs/dynamodb-lib";
import { success, failure } from "../../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: "cp_orders",
    "IndexName": "email-orderId-index",
    KeyConditionExpression: "orderId = :orderId and email = :email",
    ExpressionAttributeValues: {
      ":orderId": data.orderId,
      ":email": data.email
    }
  };

  try {
    const result = await dynamoDbLib.call("query", params);
    // Return the matching list of items in response body
    callback(null, success(result.Items));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}