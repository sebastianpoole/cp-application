import uuid from "uuid";
import * as dynamoDbLib from "../../../libs/dynamodb-lib";
import { success, failure } from "../../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  
  const params = {
    TableName: "cp_orders",

    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": data.email
    }
  };

   try {
    const result = await dynamoDbLib.call("query", params);
    const id = success(result.Items[0]['userId']);
    createOrder(data, id.body);
  } catch (e) {
    createOrder(data);
  }
}

async function createOrder(data, id) {
  id = id || uuid.v1();
  const params = {
    TableName: "cp_orders",

    Item: {
      userId: id,
      orderId: data.orderId,
      email: data.email,
      item_attributes: data.item_attributes,
      createdAt: new Date().getTime()
    }
  };

  try {
    const result = await dynamoDbLib.call("put", params);
    console.log("Success!");
  } catch (e) {
    console.log("Failure!");
  }

}