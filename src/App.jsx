import React, { useState, useEffect } from 'react';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetchMonsters();
  }, []);

  const fetchMonsters = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <p>code</p>
    </div>
  );
};

export default App;

// import React from 'react';
// import { CardList } from './components/CardList/CardList.jsx';
// import { SearchBox } from './components/SearchBox/SearchBox.jsx';
// import './App.css';

// class App extends React.Component {
//   state = {
//     monsters: [],
//     searchField: '',
//   };

//   fetchUsers = (users) => {
//     this.setState({ monsters: users });
//   };

//   searchMonsters = (e) => {
//     this.setState({ searchField: e.target.value });
//   };

//   componentDidMount() {
//     const url = 'https://jsonplaceholder.typicode.com/users';
//     fetch(url)
//       .then((res) => res.json())
//       .then(this.fetchUsers);
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { searchMonsters } = this;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );
//     return (
//       <div className='App'>
//         <h1>Monsters Rolodex</h1>
//         <SearchBox
//           placeholder='Search Monsters'
//           handleChange={searchMonsters}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
