import {render} from 'react-dom';
import {Counter} from './components/Counter';
import './index.scss';

render(
    <Counter />,
    document.getElementById('root')
)