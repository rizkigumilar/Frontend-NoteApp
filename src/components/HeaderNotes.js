import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux'
import { getAllNotes, updateNotes } from '../publics/Redux/action/note'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            idNote: this.props.navigation.state.params.idNote,
        }
    }

    // data = {
    //     title: this.state.title,
    //     description: this.state.description,
    //     idCat: this.state.idCat
    // }

    editNotes = async (data) => {
        await this.props.dispatch(updateNotes(this.state.idNote, data))
            // setTimeout(() => { this.props.dispatch(getAllNotes()) }, 500)
            .then(
                Alert.alert(
                    'Success',
                    'Edit Succesfull',
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate('Home') },
                    ],
                )
            )
    }
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity style={styles.item} onPress={() => { this.props.navigation.goBack() }}>
                    <Image
                        style={styles.image}
                        source={require('../assets/back.png')}>
                    </Image>
                </TouchableOpacity>
                <View style={styles.nameApp}>
                    <Text style={styles.title}>{'edit note'.toUpperCase()}</Text>
                </View>
                <TouchableOpacity style={styles.itemSort} onPress={() => { this.editNotes({ idNote: this.props.idNote, title: this.props.title, description: this.props.description, idCat: this.props.idCat }) }}>
                    <Image
                        style={styles.imageDone}
                        source={require('../assets/ceklis.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 49,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        color: '#000000',
        alignSelf: 'center'
    },
    item: {
        flex: 1,
        padding: 15
    },
    itemApp: {
        flex: 1
    },
    itemSort: {
        flex: 1,
        alignItems: 'flex-end',
        padding: 15
    },
    image: {
        width: 20,
        height: 20
    },
    imageDone: {
        width: 23,
        height: 23
    }
});