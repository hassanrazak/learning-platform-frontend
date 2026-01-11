import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-1_TC6F1NByU", // e.g. 'us-east-1_abcd1234'
  ClientId: "5sb7bsqhpof1sutvvjcoj1nndl", // e.g. '1a2b3c4d5e6f7g8h9i0j'
};

const userPool = new CognitoUserPool(poolData);

export { userPool, CognitoUser, AuthenticationDetails };
