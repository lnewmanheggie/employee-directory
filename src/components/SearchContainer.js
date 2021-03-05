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

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value

        const filteredEmp = this.state.results.filter(x => x.first_name.toLowerCase().startsWith(value))
        
        this.setState({
            [name]: value,
            filtered: filteredEmp
        });
    }

    orderAlphabetically = () => {
        const ordered = this.state.filtered.sort((a, b) => {
            let fa = a.first_name.toLowerCase(),
                fb = b.first_name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        this.setState({
            filtered: ordered
        })
    }

    orderByAge = () => {
        const ordered = this.state.filtered.sort((a, b) => {
            return a.dob.substr(6) - b.dob.substr(6)
        });

        this.setState({
            filtered: ordered
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
                                handleInputChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </section>
                <br />
                <div className="mt-5">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth has-text-centered">
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th onClick={this.orderAlphabetically}>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th onClick={this.orderByAge}>DOB</th>
                            </tr>
                        </thead>
                        <EmployeeTable employees={this.state.filtered} orderAlphabetically={this.orderAlphabetically}/>
                    </table>
                </div>
            </>
        )
    }

}



export default SearchContainer;