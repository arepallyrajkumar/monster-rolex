import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor (){
    super();
    
    this.state = {
      monsters : [],
      searchfiled : ''
    }
  }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response=> Response.json())
  .then(users => this.setState({monsters:users}))
  };

 handlechange = e =>{
 this.setState({ searchfiled : e.target.value})
};


  render () {
    const { monsters, searchfiled } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfiled.toLowerCase())
    );
    return (
      <div className = 'App'>
      <h1>Monsnters Rolodex</h1>
        <SearchBox placeholder = "Search Monsnters"
          handlechange ={this.handlechange} />
        <CardList monsters ={filteredMonsters} />

      </div>
    )

    } ;
  
}


export default App;
