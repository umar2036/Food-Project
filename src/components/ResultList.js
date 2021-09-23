import React from 'react';
import { View,Text,StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';


const ResultList =({title,results, navigation}) => {

    if(!results.length){
        return null;
    };
return(
    <View style={styles.container}>
        <Text style={styles.titleStyle}> {title} </Text>
        <Text> Result: {results.length} </Text>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result)=> result.id}
            renderItem={({item}) =>{
                return (
                <TouchableOpacity onPress={()=>navigation.navigate('ResultShow', {id: item.id})}>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                )
            }}
        />
        
    </View>
);

};

const styles=StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:1
    },
    container:{
        marginBottom:10
    }
});
export default ResultList;