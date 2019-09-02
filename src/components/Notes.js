import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { getAllNotes } from '../publics/Redux/action/note';
import moment from 'moment'
import { withNavigation } from 'react-navigation';

class listNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = async () => {
        this.subs = [
            this.props.navigation.addListener('willFocus', async () => {
                await this.props.dispatch(getAllNotes());
                this.setState({
                    data: this.props.note.noteList,
                })
            }
            )]

    };
    componentWillUnmount = () => {
        this.subs.forEach(sub => {
            sub.remove();
        });
    };

    render() {
        console.log(this.state.data)
        return (
            <View style={{ alignItems: 'center', flexDirection: 'row', margin: 8 }}>
                <FlatList
                    data={this.state.data}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => { this.props.navigation.navigate('SingleNotes', item) }}
                                style={{
                                    flex: 1, height: 140, margin: 9, borderRadius: 5, elevation: 2,
                                    backgroundColor: item.idCat == '1' ? '#2FC2DF' :
                                        item.idCat == '2' ? '#FAD06C' :
                                            item.idCat == '3' ? '#C0EB6A' :
                                                item.idCat == '5' ? '#FF92A9' :
                                                    item.idCat != null ? '#5874A1' : '#000000'
                                }}>
                                <Text style={styles.textDate}>{moment(item.updated_at).format("D MMMM")}</Text>
                                <Text numberOfLines={1} style={styles.textTitle}>{item.title}</Text>
                                <Text numberOfLines={1} style={styles.textBottom}>
                                    {
                                        (item.nameCat == null) ? '-' : item.nameCat
                                    }
                                </Text>
                                <Text numberOfLines={5} style={styles.textDescription}>{item.description}</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        note: state.note,
    }
}

export default connect(mapStateToProps)(withNavigation(listNotes))

const styles = StyleSheet.create({
    textDate: {
        margin: 5,
        fontSize: 10,
        marginRight: 10,
        textAlign: 'right',
        color: '#FFFFFF'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingRight: 30,
        width: '100%',
        color: 'white',
        marginLeft: 15
    },
    textBottom: {
        fontSize: 10,
        color: '#FFFBFB',
        marginLeft: 15
    },
    textDescription: {
        fontSize: 10,
        color: '#FFFFFF',
        marginLeft: 15,
        paddingRight: 30,
        width: '100%'
    }
});