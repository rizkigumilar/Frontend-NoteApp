import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { Fab, Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Notes from '../components/Notes';
import Search from '../components/Search';

export default class Home extends Component {
    render() {
        return (
            <View>
                <View>
                    <StatusBar backgroundColor='white' barStyle='dark-content' />
                    <View>
                        <ScrollView>
                            <Search />
                            <Notes />
                        </ScrollView>
                    </View>
                </View>
                <View>
                    <Fab position="bottomRight" onPress={() => this.props.navigation.navigate('AddNotes')} style={{ backgroundColor: 'white', position: 'absolute' }} >
                        <Icon name="add" type="Ionicons" style={{ color: 'black' }} />
                    </Fab>
                </View>
            </View>
        );
    }
}