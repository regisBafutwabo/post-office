import Constants from 'expo-constants';

const ENV = {
  dev: {
    stepzenApiUrl: 'YOUR_API_LINK',
    stepzenAuthKey: 'YOUR_API_KEY',
  },
};

const getEnvVars = (env = Constants?.manifest?.releaseChannel) => {
  return ENV.dev;
};

export default getEnvVars;
