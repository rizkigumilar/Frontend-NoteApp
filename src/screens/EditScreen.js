import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { Picker } from 'native-base';
import { connect } from 'react-redux'
import Header from '../components/HeaderNotes'
import { getAllCategory } from '../publics/Redux/action/category';
import { getNoteId } from '../publics/Redux/action/note';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idNote: this.props.navigation.state.params.idNote,
            title: this.props.navigation.state.params.title,
            description: this.props.navigation.state.params.description,
            categoryName: this.props.navigation.state.params.nameCat,
            idCat: this.props.navigation.state.params.idCat,
            data: [],
            notes: []
        };
    }
    componentDidMount = async () => {
        await this.props.dispatch(getAllCategory())
        this.setState({
            data: this.props.category.categoryList
        })
        await this.props.dispatch(getNoteId(this.props.match.params.idNote));
        this.setState({
            notes: this.props.note
        });
    };

    titleChange = (values) => {
        this.setState({
            title: values
        })
    }

    descriptionChange = (values) => {
        this.setState({
            description: values
        })
    }
    // idCatChange = (values) => {
    //     this.setState({
    //         idCat: values
    //     })
    // }

    static navigationOptions = {
        header: null,
    }

    render() {
        console.log("datasource " + JSON.stringify(this.state.data));
        return (
            <React.Fragment>
                <Header navigation={this.props.navigation} idNote={this.state.notes.idNote} title={this.state.title} description={this.state.description} idCat={this.state.idCat} />
                <View style={{ width: '85%', alignSelf: 'center', paddingTop: 40 }}>
                    <TextInput placeholder="ADD TITLE . . ." style={{ fontSize: 15 }} value={this.state.title} onChangeText={this.titleChange} />
                    <TextInput placeholder="ADD DESCRIPTION . . ." multiline={true} style={{ fontSize: 15, textAlignVertical: 'top', height: 145 }} value={this.state.description} onChangeText={this.descriptionChange} />
                    <Text style={styles.textTitle}>{'Category'.toUpperCase()}</Text>
                    <Picker
                        selectedValue={this.state.idCat}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ idCat: itemValue })}>
                        {
                            this.props.category.categoryList.map((item) => {
                                return (
                                    <Picker.Item label={item.nameCat} value={item.idCat} />
                                )
                            })
                        }
                    </Picker>
                </View>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category,
        note: state.note
    }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
    textTitle: {
        fontWeight: '600',
        fontSize: 15,
        color: '#000000'
    }
});