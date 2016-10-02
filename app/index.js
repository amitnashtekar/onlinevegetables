import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store/store';
import Root from './containers/Root';

const history = syncHistoryWithStore(browserHistory, store);

render(
	<AppContainer>
			<Root store={store} history={history}/>
	</AppContainer>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		const Root = require('./containers/Root').default;
		render(
			<AppContainer>
				<Root store={store} history={history} />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}


