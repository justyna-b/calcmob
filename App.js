// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   Button,
//   StatusBar,
//   Alert,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



// class App extends React.Component {
//   render (){
//     return(
//       <View>
//         <Text >
//           Hello
//         </Text>
//         <Button
//           title="dodaj"
//           style={{color: 'red', marginTop: 10, padding: 10}}
//           onPress={() => Alert.alert('wynik')}
//         />
//         <Button
//           title="odejmij"
//           onPress={() => Alert.alert('wynik')}
//         />
//         <Button
//           title="pomnóż"
//           onPress={() => Alert.alert('wynik')}
//         />
//         <Button
//           title="podziel"
//           onPress={() => Alert.alert('wynik')}
//         />
//       </View>
//     )
//   }
// }

// // const App: () => React$Node = () => {
// //   return (
// //     <>
// //       <StatusBar barStyle="dark-content" />
// //       <SafeAreaView>
// //         <ScrollView
// //           contentInsetAdjustmentBehavior="automatic"
// //           style={styles.scrollView}>
// //           <Header />
// //           {global.HermesInternal == null ? null : (
// //             <View style={styles.engine}>
// //               <Text style={styles.footer}>Engine: Hermes</Text>
// //             </View>
// //           )}
// //           <View style={styles.body}>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Edited!!!!</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Edit <Text style={styles.highlight}>App.js</Text> to change this
// //                 screen and then come back to see your edits.
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>See Your Changes</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <ReloadInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Debug</Text>
// //               <Text style={styles.sectionDescription}>
// //                 <DebugInstructions />
// //               </Text>
// //             </View>
// //             <View style={styles.sectionContainer}>
// //               <Text style={styles.sectionTitle}>Learn More</Text>
// //               <Text style={styles.sectionDescription}>
// //                 Read the docs to discover what to do next:
// //               </Text>
// //             </View>
// //             <LearnMoreLinks />
// //           </View>
// //         </ScrollView>
// //       </SafeAreaView>
// //     </>
// //   );
// // };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
//   x :{
//     fontSize: 40,
//     padding:30,
//   }
// });

// export default App;



import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

import { Platform,Button, Picker, Alert } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      count: 0,
      digitA: "s",
      digitB: "s",
      argumentA: "s",
      digitC: "s",
      digitD: "s",
      argumentB: "s",
      result: 0,
      PickerSelectedVal : '',
      action: '',
      lastRefresh: Date(Date.now()).toString(),
      }
  }

  onPressAddition = () => {
    this.setState({
      result: Number(this.state.argumentA) +  Number(this.state.argumentB),
      action: "+"
    })
  }

  onPressSubstration = () => {
    this.setState({
      result: Number(this.state.argumentA) - Number(this.state.argumentB),
      action: "-"
    })
  }

  onPressMultiplication = () => {
    this.setState({
      result: Number(this.state.argumentA) * Number(this.state.argumentB),
      action: "*"
    })
  }

  onPressDivision = () => {
    this.setState({
      result: Number(this.state.argumentA) / Number(this.state.argumentB),
      action : "/"
    })
  }

  getSelectedPickerValue=()=>{
    if(this.state.argumentB==0){
      Alert.alert("You can not divide by 0!");
    } else if (this.state.argumentA==="s" || this.state.argumentB==="s"){
        Alert.alert("Choose numbers to make action!");
    } else {
        Alert.alert(this.state.argumentA +" " +this.state.action +" " + this.state.argumentB +" = " +this.state.result);

    }   
  }

  clean = () => {
    this.setState ({
          argumentA : "s",
          argumentB : "s",
          digitA : "s",
          digitB : "s",
          digitC : "s",
          digitD : "s",
          result: "s",
    })
    this.setState({ lastRefresh: Date(Date.now()).toString() })
  }



 render() {
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={styles.buttonAdd}
         onPress={this.onPressAddition}
       >
         <Text style={[{ color: "white", fontWeight: 'bold'}]}> + </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonSub}
         onPress={this.onPressSubstration}
       >
         <Text style={[{ color: "white", fontWeight: 'bold'}]}> - </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonMult}
         onPress={this.onPressMultiplication}
       >
         <Text style={[{ color: "white", fontWeight: 'bold'}]}> * </Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonDiv}
         onPress={this.onPressDivision}
       >
         <Text style={[{ color: "white", fontWeight: 'bold'}]}> / </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}>
         <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>
      <Picker
           style={[{ width: 80}]}
           selectedValue={this.state.digitA}
           onValueChange={(itemValue, itemIndex) => this.setState({digitA: itemValue})} >
           <Picker.Item label="a" value="s" />
           <Picker.Item label="0" value='0' />
           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
      </Picker>
      <Picker
           style={[{ width: 80}]}
           selectedValue={this.state.digitB}
           onValueChange={(itemValue, itemIndex) => this.setState({digitB: itemValue, argumentA : this.state.digitA +itemValue})} >
           <Picker.Item label="a" value="s" />
           <Picker.Item label="0" value='0' />
           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
      </Picker>

          <Picker
           style={[{ width: 80}]}
           selectedValue={this.state.digitC}
           onValueChange={(itemValue, itemIndex) => this.setState({digitC: itemValue})} >
           <Picker.Item label="b" value="s" />
           <Picker.Item label="0" value='0' />
           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
      </Picker>
      <Picker
           style={[{ width: 80}]}
           selectedValue={this.state.digitD}
           onValueChange={(itemValue, itemIndex) => this.setState({digitD: itemValue, argumentB : this.state.digitC +itemValue})} >
           <Picker.Item label="b" value="s" />
           <Picker.Item label="0" value='0' />
           <Picker.Item label="1" value="1" />
           <Picker.Item label="2" value="2" />
           <Picker.Item label="3" value="3" />
      </Picker>

        <TouchableOpacity
         style={styles.buttonResult}
         onPress={this.getSelectedPickerValue}>
         <Text style={[{ color: "white", fontWeight: 'bold'}]}> RESULT </Text>
       </TouchableOpacity>

       <TouchableOpacity
         style={styles.buttonResult}
         onPress={this.clean}>
         <Text style={[{ color: "white", fontWeight: 'bold'}]}> NEW </Text>
       </TouchableOpacity>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },

  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#A2737F',
    padding: 10,
    marginBottom : 10,
    width : 50,
  },
  buttonMult: {
    alignItems: 'center',
    backgroundColor: '#A2737F',
    padding: 10,
    marginBottom : 10,
    width : 50,
  },
  buttonSub: {
    alignItems: 'center',
    backgroundColor: '#A2737F',
    padding: 10,
    marginBottom : 10,
    width : 50,
  },
  buttonDiv: {
    alignItems: 'center',
    backgroundColor: '#A2737F',
    padding: 10,
    width : 50,
  },
   buttonResult: {
    alignItems: 'center',
    backgroundColor: '#A2737F',
    padding: 10,
    margin: 10,
    width : 300,
    borderRadius: 50,
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    // text-color: 'white',
  },
})
