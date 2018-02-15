import uuid from "uuid";
import * as dynamoDbLib from "../../../libs/dynamodb-lib";
import { success, failure } from "../../../libs/response-lib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  
  const params = {
    TableName: "cp_orders",

    Item: {
      _id: uuid.v1(),
      email: data.email,
      orderId: data.orderId,
      itemAttributes: data.item_attributes,
      createdAt: new Date().getTime()
    }
  };

  try {
    const result = await dynamoDbLib.call("put", params);
    callback(null, success({status: true}));
    } catch (e) {
    callback(null, failure({ status: false }));
  }
}