import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
class NutritionAndIngredients extends React.Component {
    render() {
        return (

            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <Text style={{ fontWeight: 'bold', margin: 10, alignSelf: "center", fontSize: 20 }}>The following nutrition information is provided by :</Text>
                <View style={{ margin: 10 }}>
                    <Text style={styles.textStyle}> <FontAwesome5 name='dot-circle' size={10} color='black' /> Calories: 266.</Text>
                    <Text style={styles.textStyle}> <FontAwesome5 name='dot-circle' size={10} color='black' /> Fat: 10.1g. </Text>
                    <Text style={styles.textStyle} > <FontAwesome5 name='dot-circle' size={10} color='black' /> Sodium: 396mg.</Text>
                    <Text style={styles.textStyle}> <FontAwesome5 name='dot-circle' size={10} color='black' /> Carbohydrates: 30.3g.</Text>
                    <Text style={styles.textStyle}> <FontAwesome5 name='dot-circle' size={10} color='black' /> Fiber: 1.1g.</Text>
                    <Text style={styles.textStyle}> <FontAwesome5 name='dot-circle' size={10} color='black' /> Sugars: 5.2g.</Text>
                    <Text style={styles.textStyle}> <FontAwesome5 name='dot-circle' size={10} color='black' /> Protein: 13.3g.</Text>

                </View>


            </View>
        )
    }

}


const styles = StyleSheet.create(
    {
        MainContainer:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: (Platform.OS === 'ios') ? 20 : 0
        },

        bottomView: {

            width: '100%',
            height: 50,
            backgroundColor: '#FF9800',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0
        },

        textStyle: {


            fontSize: 18,

        }
    });

export default NutritionAndIngredients;

