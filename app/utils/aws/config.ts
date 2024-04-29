import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: 'ri5adpm2dht3c9vh4vi2450vk',
        userPoolId: 'us-east-1_cYrt3HkQN',
        }
      }
    }

export default amplifyConfig;
