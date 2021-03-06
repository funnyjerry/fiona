import React from 'react';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import Header from '../components/Header';
import Box from '../components/Box';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal, Image, Dimensions, ImageBackground, Picker, TextInput, KeyboardAvoidingView, CheckBox } from 'react-native';
import { i } from '../constants/Style';
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { t } from '../constants/Text';
import { pic } from '../constants/Image';
import { Actions, Scene, Router } from 'react-native-router-flux'
import { withNamespaces } from "react-i18next";

const width = Dimensions.get('window').width;

class SettingScreen extends React.Component {

  static navigationOptions = {
    header:null
  };

  constructor(props) {
    super(props);
    this.state = { 
      text: '' ,
      check: false,
      modalVisible: false,

    };
  }

  renderIndicator() {
    const {t} = this.props
    return (
      <Modal
        visible={this.state.modalVisible}
        transparent={true}
        onRequestClose={() => {}}
      >
        <View style={styles.modalContainer}>
             <View style={styles.modal}>
                
                <Text >{t('other:enter_department_name')}</Text>  

                  <TextInput
                    style={styles.input}
                    placeholder = {t("placeholder:department_name")}
                    onChangeText={(company_name) => this.setState({company_name})}
                    value={this.state.company_name}
                  />

                  <View style={{flexDirection:'row', justifyContent:'space-around',  width:'100%', marginTop: 12,}}>
                      
                      <TouchableOpacity style={styles.modalBtn} onPress={()=>this.setState({modalVisible:false})}>
                           <Text style={{color:Colors.WHITE}}> {t("button:cancel")} </Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.modalBtn}>
                          <Text style={{color:Colors.WHITE}}> {t("button:ok")} </Text>
                      </TouchableOpacity>

                  </View>

            </View>
        </View>
      </Modal>
    );
}

  render() {
    const {t} = this.props
    return (
      <KeyboardAvoidingView style={i.container} behavior={"padding"} >

        <Header main={true} title={' '}/>

        <ScrollView style={{margin:12, }} >

            {/* <TouchableOpacity onPress={()=>this.setState({modalVisible:true})} style={{backgroundColor:Colors.BLUE, alignItems: 'center', justifyContent:'center', height: 50, flex: 1, marginTop: 2,}}>
                <Text style={{color: Colors.WHITE}}>CREATE DEPARTMENT</Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={()=>Actions.organizationstructure()} style={styles.row}>
              <Text style={{fontSize:17}}>{t('other:organization_structure')} </Text>
              <Entypo name="chevron-small-right" size={32} color={Colors.GREY2}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>Actions.usermanagement()} style={styles.row}>
              <Text style={{fontSize:17}}>{t('other:user_management')}</Text>
              <Entypo name="chevron-small-right" size={32} color={Colors.GREY2}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>Actions.jobads()} style={styles.row}>
              <Text style={{fontSize:17}}>{t('other:job_ads_setting')}</Text>
              <Entypo name="chevron-small-right" size={32} color={Colors.GREY2}/>
            </TouchableOpacity>

            {this.renderIndicator()}

        </ScrollView>

      </KeyboardAvoidingView>
    );
  }
}

export default withNamespaces(["common"], { wait: true })( SettingScreen );


const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between', 
    backgroundColor:Colors.BACKGROUND, 
    height:54,
    padding:3,
    paddingHorizontal:8,
    borderColor:Colors.PINK,
    borderBottomWidth:4
  },
  row:{
    height: 40, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    borderBottomColor: Colors.GREY2, 
    borderBottomWidth: 1, 
    fontSize:16, 
    paddingLeft: 6,
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0,0.5)",
    alignItems: "center",
    justifyContent: "center"
 },
 modal: {
      width: width-40,
      height: width/2.2,
      borderRadius: 5,
      shadowColor: "black",
      alignItems: "center",
      justifyContent: "center",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      backgroundColor: "white"
 },
 input:{
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      fontSize:16, 
      paddingLeft: 12,
      marginVertical: 10,
      borderRadius: 5,

      margin: 20,
      marginTop: 25,
      width:'90%'
  },
  modalBtn:{
    padding:5, marginHorizontal: 6 , backgroundColor:Colors.BLUE, width:70, borderRadius:5, alignItems: 'center',
  }
});
