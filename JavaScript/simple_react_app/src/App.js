import React, { Component } from "react";
import { throwStatement } from "@babel/types";

const API_KEY = "84396c2022ea41aa83f62bff85b95619";
const URL = "https://api.weatherbit.io/v2.0/current?city=";

class App extends Component {
	constructor() {
		super();
		this.state = {
			weather: "",
			theCity: "",
			theState: "",
			theCountry: ""
		};
	}

	changeCity = e => {
		this.setState({ city: e.target.value });
	};

	render() {
		return (
			<div>
				<input id="city" onChange={this.changeCity}>
					City name
				</input>
			</div>
		);
	}
}

export default App;
