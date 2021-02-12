/* Amplify Params - DO NOT EDIT
	API_RESTAURANTREVIEWAPP_GRAPHQLAPIIDOUTPUT
	API_RESTAURANTREVIEWAPP_USERTABLE_ARN
	API_RESTAURANTREVIEWAPP_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event, context, callback) => {
  if (event.triggerSource !== 'PostConfirmation_ConfirmForgotPassword') {
    try {
      const createdAt = new Date().toISOString();
      const newUser = await dynamodb
        .put({
          Item: {
            pk_id: `USER#${event.request.userAttributes.sub}`,
            id: event.request.userAttributes.sub,
            email: event.request.userAttributes.email,
            createdAt,
            updatedAt: createdAt,
          },
        })
        .promise();

      console.log({newUser});

      callback(null, event);
    } catch (e) {
      callback(e);
    }
  }
  callback(null, event);
};
