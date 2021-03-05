import React, { Component } from 'react';
import SearchBar from './SearchBar';
import EmployeeTable from './EmployeeTable';
import API from '../utils/API';
import moment from 'moment';
import './tableStyle.css';



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

    // pull out relevant data from api call
    filteredEmployeeResults = emp => ({
        first_name: emp.name.first,
        last_name: emp.name.last,
        email: emp.email,
        cell: emp.cell,
        thumbnail: emp.picture.medium,
        dob: moment(emp.dob.date).format("MM-DD-YYYY")
    })

    // search function
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
        const styles = {
            cell: {
                fontWeight: "bold"
            },

            hero: {
                backgroundColor: "#023047",
                borderBottom: "1rem solid #fb8500"
            }
        }
        return (
            <>
                <section className="hero is-link is-fullwidth" style={styles.hero}>
                    <div className="hero-body is-flex is-justify-content-center">
                        <div className="has-text-centered">
                            <p className="title">
                                Employee Search
                            </p>
                            <p className="subtitle">
                                <em>Click on name to sort alphabetically or dob to sort by birth year</em>
                            </p>
                            <SearchBar
                                search={this.state.search}
                                handleInputChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </section>
                <br />
                <div className="mt-1">
                    <div className="table">
                        <div className="cell">
                            <h2 style={styles.cell}>Photo</h2>
                        </div>
                        <div className="cell" onClick={this.orderAlphabetically}>
                            <h2 style={styles.cell}>Name</h2>
                        </div>
                        <div className="cell">
                            <h2 style={styles.cell}>Email</h2>
                        </div>
                        <div className="cell">
                            <h2 style={styles.cell}>Cell</h2>
                        </div>
                        <div className="cell" onClick={this.orderByAge}>
                            <h2 style={styles.cell}>DOB</h2>
                        </div>
                        <EmployeeTable employees={this.state.filtered} orderAlphabetically={this.orderAlphabetically}/>
                    </div>
                </div>
            </>
        )
    }

}



export default SearchContainer;