import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';




export default class ListItem extends Component {
  render() {
    return (
      <View style={{flexDirection: "row", justifyContent:"space-between",}}>
          <Text style={{paddingLeft: 15}}>{this.props.label} </Text>
		  <Text style={{paddingLeft: 15}}> {this.props.quantity}</Text>
		  <View style={{paddingLeft: 15}}>
			<Button title="+" onPress={this.props.onAddProd} style={{paddingLeft: 15}}></Button>
		  </View>
		  <View style={{paddingLeft: 15}}>
			<Button title="-" onPress={this.props.onRemoveProd} style={{paddingLeft: 15}}></Button>
		  </View>
	  </View>	  
        
    );
  }
}