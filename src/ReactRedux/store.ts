import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from './root-reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  //  whitelist: ['homeState', 'menuState','offersState','orderState','cartState','locationState'] ,
    //blacklist: ['homeState', 'menuState','offersState','orderState','cartState','locationState'] 
  }

  const persistedReducer = persistReducer(persistConfig, RootReducer)

export const Store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))
export const Persistor = persistStore(Store)