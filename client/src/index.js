import React from "react";
import ReactDOM from "react-dom";
import exampleData from "./exampleData";
import CowList from "./cowList.js";
import axios from "axios";
import CowForm from "./cowForm.js";
import CowEntry from "./cowEntry.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      currentCow: { name: "", description: "" },
    };
    // this.handleNewCowName = this.handleNewCowName.bind(this);
    // this.handleNewCowDescription = this.handleNewCowDescription.bind(this);
    this.postCows = this.postCows.bind(this);
    this.handleCowClick = this.handleCowClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCows();
  }

  // handleNewCowName(event) {
  //   this.setState({ name: event.target.value });
  // }

  // handleNewCowDescription(event) {
  //   this.setState({ description: event.target.value });
  // }

  getCows() {
    axios
      .get(`http://localhost:5500/api/cows`)
      .then((data) => {
        //console.log("data from req", data.data);
        this.setState({
          cows: data.data,
        });
      })
      .catch((err) => {
        console.log("error getting the cow list from database", err);
        console.log(error.response.data);
      });
  }

  postCows(name, description) {
    axios
      .post(`http://localhost:5500/api/cows`, {
        name: name,
        description: description,
      })
      .then(({ data }) => {
        this.getCows();
      })
      .catch((err) => {
        console.log("error posting a new cow to the db", err);
      });
  }

  handleCowClick(name, description) {
    this.setState({
      currentCow: { name: name, description: description },
    });
    //console.log("current cow", this.state.currentCow);
  }

  //axios.put(url[, data[, config]])
  handleCowNameChange(name) {
    axios
      .put(`http://localhost:5500/api/cows/${name}`, { name: name })
      .then(({ data }) => {
        this.getCows();
      })
      .catch((err) => {
        console.log("error updating a cow name", err);
      });
  }

  handleDelete(id) {
    console.log("id: ", id);
    axios
      .delete(`http://localhost:5500/api/cows/${id}`)
      .then(() => {
        this.getCows();
      })
      .catch((err) => {
        console.log("error deleting a cow", err);
      });
  }

  handleChange(cow) {
    console.log("id: ", cow.id);
    let newValue = prompt(`Please update your cows's name`);
    console.log("new val", newValue);
    if (newValue) {
      cow.name = newValue;
      axios
        .put(`http://localhost:5500/api/cows/${cow.id}`, cow)
        .then(() => {
          console.log("update successfully");
          this.getCows();
        })
        .catch((err) => {
          console.log("error updating a cow's name", err);
        });
    }
  }

  render() {
    return (
      <div>
        <h1>Cowlist</h1>
        <div>
          <CowForm postCows={this.postCows} />
        </div>
        <div>
          <CowEntry currentCow={this.state.currentCow} />
        </div>
        <div>
          <CowList
            handleDelete={this.handleDelete}
            handleChange={this.handleChange}
            handleCowClick={this.handleCowClick}
            cows={this.state.cows}
          />
        </div>
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
