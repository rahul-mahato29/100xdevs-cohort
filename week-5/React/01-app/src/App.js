import React, {useState} from 'react';
import './App.css';


import Header from './components/Header'; 
import List from  './components/todoList';
import Button from './components/button';
// import Counter from './components/counterComponent';
import Effect from './components/Effect';

// //checkbox testing
// const checkbox = document.getElementById('myCheckbox');
//     checkbox.addEventListener('change', function() {
//       if (this.checked) {
//         console.log('Checkbox is checked');
//       } else {
//         console.log('Checkbox is unchecked');
//       }
//     });


const App = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="todo-container">

      { isVisible ? <Effect /> : <> </>}
      <button onClick={ () => setVisible(!isVisible)}>Toggle</button>

      {/* <Counter /> */}
      <Header />
      <List item = "ReactJS" />
      <List item = "ExpressJS" />
      <List item = "MongoDB" />
      <List item = "Bashcommand" />
      <List item = "Git&GitHub" />
      <Button />
    </div>
  );
}

export default App;
