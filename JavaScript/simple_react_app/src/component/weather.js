import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.country && this.props.city && (
          <p>
            Location:{" "}
            <span>
              {this.props.city}, {this.props.country}
            </span>
          </p>
        )}

        {this.props.temperature && (
          <p>
            Temperature: <span>{(this.props.temperature / 10).toFixed(2)}</span>
          </p>
        )}

        {this.props.humidity && (
          <p>
            Humidity: <span>{this.props.humidity}</span>
          </p>
        )}

        {this.props.description && (
          <p>
            Description: <span>{this.props.description}</span>
          </p>
        )}

        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Weather;
