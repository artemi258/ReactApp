import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {name: "Артем Гребнев", salary: 1500, increase: true, like: false, id: 1},
        {name: "Александр Иванов", salary: 800, increase: false, like: false, id: 2},
        {name: "Евгений Чунин", salary: 1000, increase: true, like: false, id: 3}
      ]
    }
    
  }

  onDelete = (id) => {
    this.setState(({data}) => ({
      data: data.filter(item => item.id !== id)
    }))
  }

  addEmployee = (name, salary) => {
    const elem = this.state.data.length;
    const newEmployee = {name: name, salary: salary, increase: false, like: false, id: elem + 1}
    this.setState(({data}) => ({
      data: data.concat(newEmployee)
    }))
  }

  onToggle = (id, toggle) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          
            return {...item, [toggle]: !item[toggle]}
          
        }
        return item;
      })
    }))
  }
//   onToggleIncrease = (id) => {
//     this.setState(({data}) => ({
//       data: data.map(item => {
//         if (item.id === id) {
//           return {...item, increase: !item.increase}
//         }
//         return item;
//       })
//     }))
//   }

// onToggleLike = id => {
//   this.setState(({data}) => ({
//     data: data.map(item => {
//       if (item.id === id) {
//         return {...item, like: !item.like}
//       }
//       return item;
//     })
//   }))
// }

  render() {
    const employees = this.state.data.length,
          increase = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
          <AppInfo employeesNumber={employees}
          getIncrease={increase}/>
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data} 
          onDelete={this.onDelete}
          onToggle={this.onToggle}
          />
          <EmployeesAddForm 
          addEmployee={this.addEmployee}/>
      </div>
    )
  }
  
}

export default App;
