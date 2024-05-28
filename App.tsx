import * as React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthProvider} from './src/shared/auth/contexts/auth.context';
import Screens from './src/screens';
import { FriendsProvider } from './src/shared/friends/contexts/friends.context';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <FriendsProvider>
          <PaperProvider>
            <Screens />
          </PaperProvider>
        </FriendsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
