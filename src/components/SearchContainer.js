import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EmployeeTable from './EmployeeTable';
import API from '../utils/API';
import moment from 'moment';


class SearchContainer extends Component {
    state = {
        search: "",
        results: [],
        filtered: []
    };

    componentDidMount = () => {
        this.fetchEmployees();
    }

    fetchEmployees = () => {
        API.search()
            .then(response => {
                const filteredEmployees = response.data.results.map(this.filteredEmployeeResults)
                this.setState({ results: filteredEmployees, filtered: filteredEmployees })
            })
            .catch(err => console.log(err));
    }

    filteredEmployeeResults = emp => ({
        first_name: emp.name.first,
        last_name: emp.name.last,
        email: emp.email,
        cell: emp.cell,
        thumbnail: emp.picture.medium,
        dob: moment(emp.dob.date).format("MM-DD-YYYY")
    })

    handleInputChange = event =>
        this.setState({
            [event.target.name]: event.target.value.toLowerCase()
        });

    handleFormSubmit = (e) => {
        e.preventDefault()

        this.setState({
            filtered: this.state.results.filter(x =>
            Object.values(x).some(y => y.toLowerCase().includes(this.state.search)))
        })
    }

    render() {
        return (
            <>
                <section className="hero is-link is-fullwidth">
                    <div className="hero-body is-flex is-justify-content-center">
                        <div className="has-text-centered">
                            <p className="title">
                                Employee Search
                            </p>
                            <SearchBar
                                search={this.state.search}
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </section>
                <br />
                <div className="mt-5">
                    <EmployeeTable employees={this.state.filtered} />
                </div>
            </>
        )
    }

}



export default SearchContainer;