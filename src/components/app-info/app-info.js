import { Component } from "react/cjs/react.development";

import "./app-info.css";

class AppInfo extends Component {

    render = () => {
        this.number = this.props.employeesNumber;
        this.increase = this.props.getIncrease;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {this.number}</h2>
                <h2>Премию получат: {this.increase}</h2>
            </div>
        )
    }
}

export default AppInfo;