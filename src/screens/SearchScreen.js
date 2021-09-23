import React, {useState, useEffect} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity, ScrollView} from 'react-native';
import SearchBar from '../components/SeacrchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = ({navigation}) =>
{ 
    //console.log(props);
    const [term,setTerm]=useState('');
    const [searchApi,errorMessage,results] = useResults();
    //console.log(props.navigation);
    
    const filterResultsByPrice=(price)=>{
        //price === '$' ||price === '$$' ||price === '$$$' 
        return results.filter(result => {
            return result.price === price;
        });
    };
    return(
        <>
        <SearchBar 
        term={term} 
        onTermChange={(newTerm)=>setTerm(newTerm)} 
        onTermSubmit={()=> searchApi(term)}
        />
         <Text> we have found {results.length} results</Text>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <ScrollView>
        <ResultList results={filterResultsByPrice('$')} title= "Cost Effective" navigation={navigation}/>
        <ResultList results={filterResultsByPrice('$$')} title= "Bit Pricier" navigation={navigation}/>
        <ResultList results={filterResultsByPrice('$$$')} title= "Big Spender" navigation={navigation}/>
        </ScrollView>
        <Button 
            //onPress={()=> props.navigation.navigate('Component')}
            title="Go to Component"
        />
        
        </>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30
        
    }
});

export default SearchScreen;