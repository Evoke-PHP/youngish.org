import {SNSClient} from "@aws-sdk/client-sns";
import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
import {
    fromCognitoIdentityPool,
} from "@aws-sdk/credential-provider-cognito-identity";

const REGION = "ap-southeast-2"

const snsClient = new SNSClient(
    {
        credentials: fromCognitoIdentityPool(
            {
                client: new CognitoIdentityClient({region: REGION}),
                identityPoolId: 'ap-southeast-2:ad4f303a-1267-439d-8ec2-5466f3aac046'
            }
        ),
        region: REGION
    }
);
export  { snsClient };
