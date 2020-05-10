import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';

class Cronometro extends Component {
  constructor(props){
    super(props)
    this.state={
      tiempoTrabajo = 25,
      tiempoDescanso = 5,
      segundos= 0,
      formato:'00:00',
    }
  }
  start(){
   //No supe hacerlo funcionar
  }

  timeFormater(time) {
    if (time < 10) {
        time = '0' + time
    }
    return time
}

  render() {
    return (
          <Text style={{color: this.state.color}}> {this.state.timeFormat} </Text>
    );
  }
}
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenidos NT2!</Text>
      <Text>Proyecto a realizar: Cronometro Pomodoro.</Text>
      <Text>Disculpe Profe, no supe como hacerlo y no regunté en su debido tiempo. Lautaro Cosso.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
