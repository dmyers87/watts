'use strict';

const createResponse = (statusCode, body) => {
  return {
    statusCode: statusCode,
    body: body
  }
};

exports.hello = (event, context, callback) => {
  console.log('Hi from SNS: ', JSON.stringify(event));
  callback(null, createResponse(200, "Hello"));
};

