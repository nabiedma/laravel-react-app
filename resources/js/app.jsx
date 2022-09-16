import './bootstrap';

import ReactDOM from 'react-dom/client';		
import HelloWorld from './components/HelloWorld';
import PostsIndex from './Pages/Posts';

ReactDOM.createRoot(document.getElementById('app')).render(		
    <PostsIndex />		
);