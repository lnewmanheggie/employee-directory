import API from '../utils/API';
import React, { Component } from "react";
import ResultList from './ResultList'

class UserCards extends Component {

    state = {
        results: []
    };

    componentDidMount = () => {
        this.renderEmp();
    }

    renderEmp = () => {
        API.search()
        .then(response => {
            this.setState({results: response.data.results })
        })
        .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.results);
        return(
            <div>
                <ResultList results={this.state.results}/>
            </div>
        )
    }

}



export default UserCards;