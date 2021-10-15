import React from 'react';
import Panel from './components/Panel';
import View from './components/View';
import './styles/index.scss'
import './components/Shared/style.scss';

const Main = () => {
	return(
		<div id="main_wrap">
			<Panel />
			<View />
		</div>
	)
}

export default Main;