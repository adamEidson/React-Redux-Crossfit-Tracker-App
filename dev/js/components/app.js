import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';


require('../../scss/style.scss');


const App = () => (

    <div>
        <h2>
            UserName List:
        </h2>
        <UserList />
        <hr/>
        <h2>User Detail</h2>
        <UserDetail />
        
      <div>
          
          </div>
    </div>
);

export default App;
