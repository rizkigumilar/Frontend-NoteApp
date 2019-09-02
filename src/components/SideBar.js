import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, AsyncStorage } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, Thumbnail } from 'native-base';

class SideBar extends Component {
    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.imageBackground} />
                <Thumbnail small rounded source={require('../assets/shaloom.jpeg')} style={styles.profileImage} />
                <View style={styles.viewProfileData}>
                    <Text style={styles.profileData}>Shaloom Razade</Text>
                </View>
                <View style={styles.flhome}>
                    <TouchableOpacity ><Text style={styles.drawer}><Icon name="user" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Personal</Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.drawer}><Icon name="briefcase" type="FontAwesome" style={[styles.leaderBoardColor, styles.icon]} /> Work </Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.drawer}><Icon name="clipboard-check" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Wishlist </Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.drawer}><Icon name="clipboard-list" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Planing </Text></TouchableOpacity>
                    <TouchableOpacity ><Text style={styles.drawer}><Icon name="plus-circle" type="FontAwesome" style={[styles.leaderBoardColor, styles.icon]} /> Add Category </Text></TouchableOpacity>
                </View>
            </View>
        )
    }

}

export default SideBar

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: 'transparent',
        width: 'auto',
        height: 180
    },
    profileImage: {
        position: 'absolute',
        alignSelf: 'center',
        top: 10,
        width: '50%',
        height: 150,
        borderRadius: 80
    },
    viewProfileData: {
        position: 'absolute',
        top: 160,
        marginHorizontal: 20
    },
    profileData: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 1,
        left: 15
    },
    flhome: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
        top: 20
    },
    drawer: {
        margin: 15,
        fontWeight: "bold",
        color: "#000",
        fontSize: 15,
    },
    icon: {
        fontSize: 18
    },
    leaderBoardColor: {
        color: 'black'
    }
})