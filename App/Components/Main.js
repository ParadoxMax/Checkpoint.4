import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import Note from './Note'
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
        return <Note key={key} keyval={key} val={val}
        deleteMethod ={()=> this.deleteNote(key)} />
    });
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My schedule</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
      {notes}
      </ScrollView>
      <KeyboardAvoidingView  behavior="padding" enabled style={styles.footer}>
        <TextInput
        style={styles.textInput}
        onChangeText={(noteText) => this.setState({noteText})}
        value={this.state.noteText}
        placeholder='Type Here' 
        placeholderTextColor='white' 
        underlineColorAndroid='transparent'
        >
        
        </TextInput>
      </KeyboardAvoidingView >
       <TouchableOpacity
        style={styles.addButton}>
           <Text style={styles.addButtonText}
           onPress={this.addNote.bind(this)}>+</Text>
       </TouchableOpacity>
    </View>
    );
  }
  addNote(){
    if (this.state.noteText) {
        var d = new Date();
        this.state.noteArray.push({
            date : d.getFullYear() +
            '/' + (d.getMonth() + 1) +
            '/' + d.getDate(),
            notes : this.state.noteText
        });
        this.setState({ noteArray:this.state.noteArray})
        this.setState({ noteText: ''});
    }
}
deleteNote(key){
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray})
};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      backgroundColor: '#15E',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
  },
  headerText: {
      color: 'white',
      fontSize: 25,
      padding: 18,
      margin: 11,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: -10,
      bottom: 596,
      backgroundColor: '#15E',
      width: 90,
      height:60,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 10,
      borderColor: 'white',
      color:'white',
      fontSize:25,
  },
  addButtonText: {
       color:'white',
        fontSize: 50,
    },
});