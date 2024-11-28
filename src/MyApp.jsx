// Hard coded list and form

import React from 'react';
import {View } from 'react-native';

function MyApp() {
  return (
    <View>
        <h1>My To Do List:</h1>
        <ul>
            <li>Do Laundry</li>
            <li>Go to gym</li>
            <li>Walk dog</li>
        </ul>
        <form>
            <input type="text" placeholder="Add a new task..."/>
            <input type="submit" value="Add Task"/>
        </form>
        
    </View>
  )};

export default MyApp;