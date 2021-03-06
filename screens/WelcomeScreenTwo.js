import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage, Image, StyleSheet } from 'react-native';
import { LinearGradient, AppLoading } from 'expo';
import Slides from '../components/WelcomeSlides/Slides.js';

// import { isSignedIn } from '../redux/modules/signinandupFirebase';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 180,
    height: 180
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 40
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16
  }
});

const SLIDE_DATA = [
  {
    img: require('../assets/images/onboarding/Onboarding1.png'),
    text: 'Create your profile',
    colors: ['#474973', '#ED808C']
  },
  {
    img: require('../assets/images/onboarding/Onboarding2.png'),
    text: 'Build your Vilij',
    colors: ['#474973', '#ED808C']
  },
  {
    img: require('../assets/images/onboarding/Onboarding3.png'),
    text: 'Schedule a sit',
    colors: ['#474973', '#ED808C']
  },
  {
    img: require('../assets/images/onboarding/Onboarding4.png'),
    text: 'Sit back and relax!',
    colors: ['#474973', '#ED808C']
  }
];

class WelcomeScreenTwo extends Component {
  state = {
    token: null
  };

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('Home');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('Login');
  };

  // onSlidesCompleteSignup = () => {
  //   this.props.navigation.navigate('Signup');
  // };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete} //FB
        onCompleteSignup={this.onSlidesCompleteSignup} //Normal Form Email/password
      />
    );
  }
}

export default WelcomeScreenTwo;
