import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import {Colors} from '../styles/Colors';

export default function SearchBar({
  handleSearch,
  style = {},
  onPress = null,
  focus = false,
}) {
  const [query, setQuery] = useState();
  const [error, setError] = useState();

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.searchContainer}>
        <View style={styles.vwSearch}>
          <Image
            style={styles.icSearch}
            source={require('../assets/icons/ic_search.png')}
          />
        </View>

        <TextInput
          value={query}
          editable={onPress ? false : true}
          autoFocus={focus}
          placeholder="Busca por nombre o ID..."
          placeholderTextColor={Colors.gray}
          style={styles.textInput}
          onChangeText={text => {
            //let letters = /^$|^[a-zA-Z._\b ]+$/;
            setQuery(text);
            handleSearch(text);
            if (error) setError(false);
          }}
        />
        {query ? (
          <TouchableOpacity
            onPress={() => {
              setQuery('');
              handleSearch('');
            }}
            style={styles.vwClear}>
            <Image
              style={styles.icClear}
              source={require('../assets/icons/ic_clear.png')}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.vwClear} />
        )}
      </View>
      {error && <Text style={styles.txtError}>{error}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: 'white',
  },
  vwClear: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 40,
    // backgroundColor: 'red'
  },
  icSearch: {
    height: 18,
    width: 18,
  },
  searchContainer: {
    backgroundColor: Colors.lightGray,
    width: '100%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 15,
  },
  container: {
    // height: '100%', width: '100%'
    //flex: 1,
  },
});
