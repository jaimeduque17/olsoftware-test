import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { firebaseConfig } from './firebase/config';

ReactDOM.render(
  // se encierra para que todo elemento dentro del App tenga acceso a firebase
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    {/*  suspense detiene la ejecucion del render de la aplicacion, en este caso no se renderiza hasta que firebase haya cargado  */}
    <Suspense fallback={'Conectado la App...'}>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
