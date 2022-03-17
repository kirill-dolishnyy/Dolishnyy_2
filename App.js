import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
     <Text style={styles.heading}>
        Журнал Bright
      </Text>
     <Card style={styles.card}>
        <Text style={styles.blueText}>
          Новости
        </Text>
    <Image 
            source={require('./pic.jpg')} 
            style={styles.img} 
          />
    <Text style={styles.newsHeading}>
          Как выбрать гармоничный парфюм для работы?
        </Text>
    <Text style={styles.plainText}>
          Магия ароматов заключаются в том, что они могут влиять на наше настроение, повышать работоспособность, давать ощущение безопасности и спокойствия. Поэтому парфюм на работу важно выбирать с умом.
        </Text>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 2,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    padding: 40,
  },
  blueText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 40,
  },
  newsHeading: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 20,
  },
  img: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  plainText: {
    fontSize: 16,
    
  },
});

export default App;
