import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";


import { RFValue } from "react-native-responsive-fontsize";

export default class BookDonateScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      CompanyList: [],
    };
    this.requestRef = null;
  }

  getCompanyList = () => {
    this.requestRef = db
      .collection("Company")
      .onSnapshot((snapshot) => {
        var CompanyList = snapshot.docs.map((doc) => doc.data());
        this.setState({
          CompanyList: CompanyList,
        });
      });
  };

  componentDidMount() {
    this.getCompanyList();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
        title={item.Name}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        rightElement={
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="Company"/>
        <View style={{ flex: 1 }}>
          {this.state.CompanyList.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: RFValue(20) }}>List Of All Companies</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.CompanyList}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width:RFValue(70),
    height:RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: RFValue(0),
      height: RFValue(8),
    },
  },
  view:{
    flex: 1,
    backgroundColor: "#fff"
  }
});
