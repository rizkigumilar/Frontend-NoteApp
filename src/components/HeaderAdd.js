import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux'
import { addNotes } from '../publics/Redux/action/note';

class App extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         idNote: this.props.navigation.state.params.idNote,
    //         title: this.props.navigation.state.params.title,
    //         description: this.props.navigation.state.params.description,
    //         categoryName: this.props.navigation.state.params.nameCat,
    //         idCat: this.props.navigation.state.params.idCat,
    //     }
    // }

    // data = {
    //     title: this.state.title,
    //     description: this.state.description,
    //     idCat: this.state.idCat
    // }
    createNotes = async (data) => {
        await this.props.dispatch(addNotes(data))
            .then(
                Alert.alert(
                    'Success',
                    'Add Succesfull',
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
                    <Text style={styles.title}>ADD NOTES</Text>
                </View>
                <TouchableOpacity style={styles.itemSort} onPress={() => { this.createNotes({ title: this.props.title, description: this.props.description, idCat: this.props.idCat }), this.props.navigation.goBack() }}>
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