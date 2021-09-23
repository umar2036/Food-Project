import React from 'react';
import { Text, StyleSheet,View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit }) =>{ 
    //console.log(props.navigation);
    return(
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle}  
            autoCapitalize='none'
            autoCorrect={false}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={()=>onTermSubmit()}
            />
           
       
        
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop:15,
        backgroundColor:'#E1E2E2',
        height:45,
        borderRadius:10,
        marginHorizontal:15,
        flexDirection:'row'
    },
    inputStyle:{
       //borderColor:'black',
       //borderWidth:1,
       fontSize:18,
       flex:1
    },
    iconStyle:{
        alignSelf:'center',
        fontSize:35,
        marginHorizontal:15
    }
});

export default SearchBar;