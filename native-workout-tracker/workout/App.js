import React from "react";
import { StyleSheet, Text, View, Button, Alert,StatusBar } from "react-native";

import MyAppNav from './Navigation/MainNavigator' 
import { AuthSession } from "expo";
import jwtDecode from "jwt-decode";

//linking auth0 account info
const auth0ClientId = "SC50FcSQGQUTThJvrl40XzSZ5E6NqT5l";
const auth0Domain = "https://dev-zjd-v4vy.auth0.com";

//convert an object to a query string
function toQueryString(params) {
  return (
    "?" +
    Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&")
  );
}

export default class App extends React.Component {
  state = { name: null };

  login = async () => {
    // retrieve the redirect URL, add this tot he callback in Auth0
    const redirectUrl = AuthSession.getRedirectUrl();
    console.log(`Redirect URL: ${redirectUrl}`);

    //auth params and URL
    const queryParams = toQueryString({
      client_id: auth0ClientId,
      redirect_uri: redirectUrl,
      response_type: "id_token", //id_token will return a JWT token
      scope: "openid profile", // retrieve the user's profile
      nonce: "nonce" //random value hopefully
    });
    const authUrl = `${auth0Domain}/authorize` + queryParams;

    //perform authentication
    const response = await AuthSession.startAsync({ authUrl });
    console.log("Authentication response", response);

    if (response.type === "success") {
      this.handleResponse(response.params);
    }
  };

  handleResponse = response => {
    if (response.error) {
      Alert(
        "Authentication error",
        response.error_description || "something went wrong"
      );
      return;
    }

    //retrieve the jwt token and decode it

    const jwtToken = response.id_token;
    const decoded = jwtDecode(jwtToken);

    const { name } = decoded;
    this.setState({ name });
  };
  render() {
    const { name } = this.state;
    return (
      <>
        {name ? (
              <MyAppNav /> 
          ) : (
            <View style = {styles.container}>
              <Button title="Log in with Auth0" onPress={this.login} />
            </View>
          )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    margin: 0
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40
  }
});