import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from 'react-native';

import {styles} from './SearchBar.styles';
import {colors} from '../../styles/globalStyles';

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
            source={require('../../assets/icons/ic_search.png')}
          />
        </View>

        <TextInput
          value={query}
          editable={onPress ? false : true}
          autoFocus={focus}
          placeholder="Busca por nombre o ID..."
          placeholderTextColor={colors.gray}
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
              source={require('../../assets/icons/ic_clear.png')}
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
