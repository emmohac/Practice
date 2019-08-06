import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.loadWeather}>
        <input type="text" name="city" placeholder="City name" />
        <input type="text" name="country" placeholder="Country of the city" />
        <button>Get the weather</button>
      </form>
    );
  }
}

export default Form;
