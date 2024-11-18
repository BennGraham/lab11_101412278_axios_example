import axios from "axios";
import React, { Component } from "react";
import PersonAccordion from "./PersonAccordion";

export default class PersonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data);
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div style={{ padding: "4rem" }}>
        <h3>Person List</h3>
        <p>Click a person to reveal their details!</p>
        <PersonAccordion persons={this.state.persons} />
      </div>
    );
  }
}
