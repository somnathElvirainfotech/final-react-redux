import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import {encryptTransform} from 'redux-persist-transform-encrypt';

import authReducer from './auth';
import counterReducer from './counter';


const encryptionKey = 'test@key123';
const encryptor = encryptTransform({
  secretKey: encryptionKey,
  onError: function (error) {
    // Handle encryption errors here 
    console.error('Encryption error: ', error);
  },
});


const persistConfig = {
  key: 'root',
  storage,
  transforms: [encryptor],
};

// ============= write all Reducer ================== //
const rootReducer = combineReducers ({
  myCounter: counterReducer,
  auth: authReducer,
});
// ============= End write all Reducer ============= //

const persistedReducer = persistReducer (persistConfig, rootReducer);

export const store = configureStore ({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore (store);
