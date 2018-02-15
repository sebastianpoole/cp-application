export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  apiGateway: {
    URL: "https://5zho8z0zy1.execute-api.ap-southeast-1.amazonaws.com/prod",
    REGION: "ap-southeast-1"
  },
  cognito: {
    REGION: "ap-southeast-1",
    IDENTITY_POOL_ID: "ap-southeast-1:413acce8-a349-4c65-a1c7-77e2d47e7567",
    USER_POOL_ID: "ap-southeast-1_gG1HtVrUo",
    APP_CLIENT_ID: "1ntm8641uph4auonds9is2fafh"
  },
  s3: {
    BUCKET: "donna-notes-app"
  }
};
