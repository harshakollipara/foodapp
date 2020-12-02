import React, { Component } from 'react';
import { RootNavigator } from './src/Helper/Navigation/StackNavigation';
import { PersistGate } from "redux-persist/integration/react";
import { Store, Persistor } from './src/ReactRedux/store';
import { Provider } from "react-redux";
export default class App extends Component {
  render() { console.disableYellowBox = true;
    return ( 
      <Provider store={Store}>
       <PersistGate loading={null} persistor={Persistor}>
        <RootNavigator />
      </PersistGate>
     </Provider> 
     );
  }
}
