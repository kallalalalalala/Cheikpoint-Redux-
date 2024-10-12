import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './Addtask';
import ListTask from './ListTask';

const App = () => (
   <Provider store={store}>
       <div>
           <h1>ToDo Application</h1>
           <AddTask />
           <ListTask />
       </div>
   </Provider>
);

export default App;

