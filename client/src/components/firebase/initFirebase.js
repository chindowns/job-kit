import * as firebase from 'firebase/app';
import config from './config.json'
import 'firebase/analytics';
import 'firebase/auth';

firebase.initializeApp(config);

