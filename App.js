/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import ListItem from './components/ListItem';


type Props = {};
export default class App extends Component<Props> {
	
  constructor(props){
	  super(props);
	  this.state = {
		  ipd:0,
		  mbp:0,
		  atv:0,
		  vga:0,
		  totalAmt:0,
	  }	  
  }

  addItem = (id) => {
	this.setState((prevState) => ({
		[id]: prevState[id] + 1,
	}));
  }	

  removeItem = (id) => {
	if(this.state[id] != 0)  {
		this.setState((prevState) => ({
			[id]: prevState[id] - 1,
		}));
	}
	else{
		alert("You need to add Items");
	}
  }

  checkoutItems = () => {
	  let totalAmt = 0;
	  totalAmt = totalAmt + ((Math.floor(this.state.atv/3)*549.99*2) + ((this.state.atv % 3)*549.99))
	  totalAmt = totalAmt + (this.state.ipd > 4 ? (this.state.ipd * 499.99) : (this.state.ipd * 549.99))
	  totalAmt = totalAmt + (this.state.mbp * 1399.99)
	  totalAmt = totalAmt + (this.state.mbp < this.state.vga ? ((this.state.vga - this.state.mbp)*30) : 0)
	  
	  this.setState({
		  totalAmt,
	  })
  }	
  	
  render() {

    return (
      <View style={styles.container}>
	  <View style={{flex: 1, justifyContent: "space-between", paddingTop: 25}}>
        <ListItem label="Super iPad" quantity={this.state.ipd} onAddProd={() => this.addItem("ipd")} onRemoveProd={() => this.removeItem("ipd")}/>
        <ListItem label="MacBook Pro" quantity={this.state.mbp} onAddProd={() => this.addItem("mbp")} onRemoveProd={() => this.removeItem("mbp")}/>
		<ListItem label="Apple TV" quantity={this.state.atv} onAddProd={() => this.addItem("atv")} onRemoveProd={() => this.removeItem("atv")}/>
		<ListItem label="VGA adapter" quantity={this.state.vga} onAddProd={() => this.addItem("vga")} onRemoveProd={() => this.removeItem("vga")}/>
		</View>
		<View style={{flex:1, justifyContent: "space-around",}}>
			<Button title="CHECKOUT" onPress={this.checkoutItems} ></Button>
			<View>
				<Text>{this.state.totalAmt}</Text>
			</View>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
