import React, { Component } from 'react'
import { StyleSheet, AsyncStorage, Image } from 'react-native'
import { withNavigation } from 'react-navigation'
import { View, Thumbnail, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

class IconLeaderBoards extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity >
                    <Image source={require('../assets/download.png')} style={styles.iconLeaderBoards} />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    iconLeaderBoards: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
        color: 'black'
    }
})
export default withNavigation(IconLeaderBoards)
