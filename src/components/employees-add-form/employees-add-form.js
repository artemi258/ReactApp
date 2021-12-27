import { Component } from 'react/cjs/react.production.min';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            salary: ""
        }
    }

    onChange = (e) => {
        this.setState(({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        const {salary, name} = this.state;
        const {addEmployee} = this.props;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => {e.preventDefault(); addEmployee(name, salary)}}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onChange} />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
    
}

export default EmployeesAddForm;