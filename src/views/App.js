import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
// import ListTodo from './Todos/ListTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with  React.Js (Hoi Dan IT)
        </p>
        <ListTodo />
        {/* <MyComponent/> */}
      </header>
    </div>
  );
}

export default App;
