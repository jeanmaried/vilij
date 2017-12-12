import React, { Component } from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { LinearGradient } from 'expo';
import { Gravatar, GravatarApi } from 'react-native-gravatar';
// import styles from './styles';

const Parent = ({ parent }) => {
  console.log(parent);

  // navigationOptions = {
  //   title: 'Parent'
  // };
  return (
    <View style={styles.mainView}>
      <ScrollView>
        <LinearGradient
          style={[styles.mainContent]}
          colors={['#474973', '#ED808C']}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0.1, y: 1 }}
        >
          <View style={styles.content}>
            <View style={{ width: '20%' }}>
              <Gravatar
                options={{ email: parent.email }}
                style={styles.roundedProfileImage}
              />
            </View>
            <Text style={styles.name}> {parent.name}</Text>
            <Text style={styles.purpleFont}> - km away</Text>

            <View>
              <Text style={styles.purpleFont}> {parent.description}</Text>
            </View>

            <View>
              {parent.children.map(child => {
                return (
                  <View key={child._id} style={styles.childContainer}>
                    <Image
                      style={styles.childImg}
                      source={
                        child.gender === 'Female'
                          ? require('../../assets/images/girl.png')
                          : require('../../assets/images/boy.png')
                      }
                      key={child.gender}
                    />
                    <Text style={styles.purpleFont} key={child.name}>
                      {' '}
                      {child.name}{' '}
                    </Text>
                    <Text style={styles.purpleFont} key={child.age}>
                      {' '}
                      {child.age} years{' '}
                    </Text>
                  </View>
                );
              })}
            </View>
            <Text style={styles.description}> - Mutual Vilijers</Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <Text style={styles.help}>
                {' '}
                {parent.whoYouHelped.length} Sits Offered{' '}
              </Text>
              <Text style={styles.help}>
                {' '}
                {parent.whoHelpedYou.length} Sits Received
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

// {parent.children.map((child)=>{
//   return (
//     child.gender === "Female" ?
//      <Image source={require('../../assets/images/Girl@3x.png')} /> :
//   <Image source={require('../../assets/images/Boy@3x.png')}  />
//  );
// })}

export default Parent;

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: SCREEN_HEIGHT
  },
  content: {
    marginTop: 55,
    paddingTop: 40,
    backgroundColor: 'rgba(248, 233, 231, 0.7)',
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.85,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  title: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    paddingTop: 15
  },
  name: {
    fontSize: 22,
    backgroundColor: 'transparent',
    marginBottom: 5,
    color: '#422B4A'
  },
  description: {
    fontSize: 15,
    backgroundColor: 'transparent',
    color: '#422B4A',
    paddingTop: 10,
    paddingBottom: 10
  },
  whiteBorderBottom: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    width: SCREEN_WIDTH * 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  roundedProfileImage: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 35
  },

  flexOne: {
    flex: 1
  },
  help: {
    fontSize: 17,
    backgroundColor: 'transparent',
    color: '#422B4A',
    width: '45%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  childImg: {
    width: 50,
    height: 50
  },
  purpleFont: {
    color: '#422B4A'
  },
  childContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#fff',
    width: SCREEN_WIDTH * 0.7,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 20
  }
});

// {parent.children.map((child)=>{
//   return (
//     <Image
//     source={
//       child.gender === "Female"
//         ? require('../../assets/images/girl.png')
//         : require('../../assets/images/boy.png')
//     }
//     style={styles.welcomeImage}
//   />
// );
// })}
