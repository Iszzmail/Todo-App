import React from "react";
import "./App.css";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    todo: [],
    inputValue: "",
    filter: [],
  };

  add = () => {
    let temp = this.state.todo;
    temp.push({ task: this.state.inputValue, display: false });
    this.setState({
      todo: temp,
      filter: temp,
    });
  };

  edit = (pos) => {
    let temp = this.state.filter;
    let newname = prompt("?");
    temp[pos].task = newname;
    this.setState({
      filter: temp,
    });
  };

  delete = (pos) => {
    let temp = this.state.filter;
    temp.splice(temp[pos], 1);
    this.setState({
      filter: temp,
    });
  };

  Allshow = () => {
    let temp = this.state.todo;
    this.setState({
      filter: temp,
    });
  };

  checked = (pos) => {
    let temp = this.state.filter;
    if (temp[pos].display === true) {
      temp[pos].display = false;
    } else {
      temp[pos].display = true;
    }

    this.setState({
      filter: temp,
    });
  };

  completed = () => {
    let temp = this.state.todo;
    let temp2 = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].display === true) {
        temp2.push(temp[i]);
      }
    }
    this.setState({
      filter: temp2,
    });
  };

  incompleted = () => {
    let temp = this.state.todo;
    let temp2 = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].display === false) {
        temp2.push(temp[i]);
      }
    }
    this.setState({
      filter: temp2,
    });
  };

  render() {
    console.log(this.state.filter);
    return (
      <div className="App">
        <h1>What are you doing today?</h1>
        <div>
          <input
            value={this.state.inputValue}
            onChange={(e) => {
              this.setState({ inputValue: e.target.value });
            }}
          />
          <Button
            type="submit"
            click={() => {
              this.add();
            }}
            text="Add"
          ></Button>
          <div>
            <Button click={() => this.Allshow()} text="All" />
            <Button click={() => this.completed()} text="Completed" />
            <Button click={() => this.incompleted()} text="InCompleted" />
          </div>
        </div>
        <div>
          {`${this.state.filter.length} Tasks remaining`}
          {this.state.filter.map((e, i) => {
            return (
              <div key={i}>
                {e.task}{" "}
                <input type="checkbox" checked={e.display} onChange={() => this.checked(i)} />
                <div>
                  <Button
                    click={() => {
                      this.edit(i);
                    }}
                    text="Edit"
                  />
                  <Button
                    click={() => {
                      this.delete(i);
                    }}
                    text="Delete"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
