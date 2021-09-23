import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet,Image,FlatList } from 'react-native';
import yelp from "../api/yelp";



const ResultShowScreen=(props)=>{
    const [result, setResult]=useState(null);
    const id = props.route.params.id;
    //console.log(id);
   // console.log(id);
    const getResult= async(id)=>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
    };

    useEffect(()=>{
        getResult(id);
    },[]);

    if (!result) {
        return null;
    }
    //console.log(result);
    return(
        <View style={styles.pic}>
            <Text>{result.name} </Text>
            <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item})=>{
               return <Image style={styles.image} source = {{uri:item}}/>
            }}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    image:{
        height: 200,
        width:300,
        marginBottom:20,
        borderRadius:20
    },
    pic:{
       // alignContent:'center',
        alignItems:'center'
    }

});

export default ResultShowScreen;