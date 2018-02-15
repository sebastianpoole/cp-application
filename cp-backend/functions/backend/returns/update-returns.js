import * as dynamoDbLib from "../../../libs/dynamodb-lib";
import { success, failure } from "../../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "cp_returns",

    Key: {
      email: data.email,
      returnId: event.pathParameters.id
    },

    UpdateExpression: "SET orderId = :orderId, images = :images",
    ExpressionAttributeValues: {
      ":images": data.images ? data.images : null,
      ":orderId": data.orderId ? data.orderId : ""
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await dynamoDbLib.call("update", params);
    callback(null, success({ status: true }));
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}