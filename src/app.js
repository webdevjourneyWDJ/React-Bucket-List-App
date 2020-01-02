import React from 'react';
import ReactDOM from 'react-dom';
import BucketListApp from './components/BucketListApp'
import "./styles/styles.scss";

ReactDOM.render(<BucketListApp options={['red light district', 'go to japan']}/>, document.getElementById('app'));



