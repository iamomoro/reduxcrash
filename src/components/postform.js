import React, { Component } from 'react';
class Postform extends Component {
  constructor(props) {
    super(props);
    this.State = {
      title: '',
      body: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label> <br />
            <input
              type="text"
              name="title"
             
            />
          </div>
          <br />
          <div>
            <label>Title: </label> <br />
            <textarea
              name="body"
              
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
