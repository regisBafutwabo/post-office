import { ApolloClient, InMemoryCache } from '@apollo/client';

import getEnvVars from '../../env';

const { stepzenApiUrl, stepzenAuthKey } = getEnvVars();

export const client = new ApolloClient({
  uri: stepzenApiUrl,
  headers: {
    Authorization: stepzenAuthKey,
  },
  cache: new InMemoryCache(),
});
