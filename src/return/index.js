import { DeleteItemCommand, GetItemCommand, PutItemCommand, QueryCommand, ScanCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { ddbClient } from "./ddbClient";
import { v4 as uuidv4 } from 'uuid';

exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));

    //Todo: create returned item, send the event to eventbus
}