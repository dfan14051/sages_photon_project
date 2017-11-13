import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chart from './Chart';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<p>"test"</p>,document.getElementById('root'));

ReactDOM.render(<Chart endpoint="/Handle"/>, document.getElementById('root'));
registerServiceWorker();
