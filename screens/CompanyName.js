import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    FlatList
    
  } from 'react-native';
import {ListItem,Input} from 'react-native-elements'

import db from '../config';
import firebase from 'firebase';

import MyHeader from '../components/MyHeader'

export default class CompanyName extends React.Component{
   constructor(){
       super();
        this.state={
        CompanyName:"",
        CompanyNameEnter:'',
        ProductNameEnter:'',
        docId:'HvESZ4pWvRDiJstOEPzC',
        allDetails:[],
    }
   }

    Add_Company_Name_and_User_Email_to_the_list=()=>{
       db.collection("Company").add({
         "Name":this.state.CompanyName,
       })
       this.setState({CompanyName:''})
      return alert("" + this.state.CompanyName + "" + "Company was added")
    }

    getDocId=()=>{
      db.collection("Company").where("Name","==",this.state.CompanyNameEnter)
      .onSnapshot((snapshot)=>{
        var allDetails =  []
        snapshot.docs.map((doc) =>{
        var Details = doc.data()
        Details["doc_id"] = doc.id
        allDetails.push(Details)
      });
      this.setState({
          allDetails : allDetails
      });
      })
    }

    Add_Company_Products_to_the_list=()=>{
      var doc = this.state.docId
    var ProductAdding =  db.collection("Company").doc(doc).
        collection("Products").add({Name:this.state.ProductNameEnter})
      
    }
    render(){
        return(
            <View style={{flex:1}}>
            <MyHeader title="Company Name"/>
            <TextInput 
            style={styles.TextInput}
            placeHolder = "Enter the Company Name"
            onChangeText={(text)=>{this.setState({CompanyName:text})}}
            value={this.state.CompanyName}
            />

         <TouchableOpacity style={styles.registerButton} onPress={()=>{
             this.Add_Company_Name_and_User_Email_to_the_list()
           }}>
           <Text style={styles.registerButtonText} >Click to enter list</Text>
           </TouchableOpacity>

            <MyHeader title="Product Name"/>

           <TextInput 
            style={styles.TextInput}
            placeHolder = "Enter the Company Name"
            onChangeText={(text)=>{this.setState({CompanyNameEnter:text})}}
            value={this.state.CompanyNameEnter}
            />

            <TouchableOpacity style={styles.registerButton} onPress={()=>{
             this.getDocId()
           }}>
           <Text style={styles.registerButtonText} >Click to confirm</Text>
           </TouchableOpacity>

           <Text>{this.state.docId}</Text>

            <TextInput 
            style={styles.TextInputBox}
            placeHolder = "Product Name"
            onChangeText={(text)=>{this.setState({ProductNameEnter:text})}}
            value={this.state.ProductNameEnter}
            />

            <TextInput 
            style={styles.TextInputConatiner}
            placeHolder = "pcs"
            onChangeText={(text)=>{this.setState({Pcs:text})}}
            value={this.state.Pcs}
            />

            <TouchableOpacity style={styles.registerButton} onPress={()=>{
             this.Add_Company_Products_to_the_list()
           }}>
           <Text style={styles.registerButtonText} >Click to enter list</Text>
           </TouchableOpacity>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
registerButton:{
   width:200,
   height:35,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30,
   marginLeft:280,
   marginBottom:30,
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 TextInput:{
    width:"25%",
   height:85,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   alignItems:"center",
   alignSelf:"center",
   justifyContent:"center",
   marginTop:20

 },
 TextInputBox:{
    width:"15%",
   height:85,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   alignItems:"center",
   alignSelf:"center",
   justifyContent:"center",
   marginTop:20,
   marginRight:110,
 },
 TextInputConatiner:{
    width:"7%",
   height:85,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   alignItems:"center",
   alignSelf:"center",
   justifyContent:"center",
   marginTop:-30,
   marginLeft:180,
 },
 button:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  }
})