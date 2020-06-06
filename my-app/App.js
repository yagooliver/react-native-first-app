import * as React from 'react';
import LoginConnect from './views/login/LoginConnect';
import { Provider } from 'react-redux'
import configStore from './lib/Store';

const store = configStore();
export default function App() {
  return (
    <Provider store={store}>
      <LoginConnect/>
    </Provider>
  );
}

// const styles = Style Sheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
