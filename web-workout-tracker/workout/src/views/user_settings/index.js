import React from "react";
// import { useAuth0 } from "../react-auth0-wrapper"
import Profile from "../Profile";
import SECTION from "./style";

class UserSettings extends React.Component {
  state = {
    first_name: "Gordon",
    last_name: "Clark",
    ideal_body_type: "Slenderman",
    body_types: [
      { name: "Slenderman", src: "1.png" },
      { name: "Boringman", src: "2.png" },
      { name: "Incredibly Big Man", src: "3.png" }
    ],

    setting_selected: ""
  };
  componentDidUpdate = () => {};
  update_field = e => this.setState({ [e.target.id]: e.target.value });
  update_active_setting = e =>
    this.setState({ setting_selected: e.currentTarget.id });
  update_body_type = e => {
    if (this.state.setting_selected === "ideal-body-type") {
      e.stopPropagation();
      this.setState({
        ideal_body_type: e.currentTarget.id,
        setting_selected: ""
      });
    }
  };
  render = () => (
    <SECTION className="user-settings">
      <div>
        <Profile />
      </div>

      <div
        id="ideal-body-type"
        className="field"
        onClick={this.update_active_setting}
      >
        <span className="title">Ideal Body Type</span>
        <div className="value">
          {this.state.body_types
            .filter(type =>
              this.state.setting_selected === "ideal-body-type"
                ? true
                : type.name === this.state.ideal_body_type
            )
            .map((type, idx) => (
              <div
                className="type"
                key={idx}
                id={type.name}
                onClick={this.update_body_type}
              >
                <img src={`/img/${type.src}`} alt={type.name} />
                <span>{type.name}</span>
              </div>
            ))}
        </div>
      </div>
      <div
        id="units-of-measurment"
        className="field"
        onClick={this.update_active_setting}
      >
        <span className="title">Units of Measurment</span>
        <div className="value">
          <div className="unit-types">
            <input type="radio" name="unit-type" value="us" id="us"></input>
            <label htmlFor="us">US Standard</label>
          </div>
          <div className="unit-types">
            <input
              type="radio"
              name="unit-type"
              value="metric"
              id="metric"
              defaultChecked
            ></input>
            <label htmlFor="metric">Metric</label>
          </div>
        </div>
      </div>
    </SECTION>
  );
}

export default UserSettings;
