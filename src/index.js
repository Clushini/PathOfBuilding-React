import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import ControlBar from './components/ControlBar';

import { Provider } from 'react-redux';
import store from "./store";


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<ControlBar />
				<Main />
			</Provider>
		</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
