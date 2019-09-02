import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { Picker } from 'native-base';
import { connect } from 'react-redux'
import { getAllCategory } from '../publics/Redux/action/category';
import Header from '../components/HeaderAdd'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCat: '',
      title: '',
      description: '',
      data: []
    };
  }

  componentDidMount = () => {
    this.props.dispatch(getAllCategory())
    this.setState({
      data: this.props.category.categoryList
    })
  }
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

  idCatChange = (values) => {
    this.setState({
      idCat: values
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header navigation={this.props.navigation} title={this.state.title} description={this.state.description} idCat={this.state.idCat} />
        <View style={{ width: '85%', alignSelf: 'center', paddingTop: 40 }}>
          <TextInput placeholder="ADD TITLE . . ." style={{ fontSize: 15 }} onChangeText={this.titleChange} />
          <TextInput placeholder="ADD DESCRIPTION . . ." multiline={true} style={{ fontSize: 15, textAlignVertical: 'top', height: 145 }} onChangeText={this.descriptionChange} />
          <Text style={styles.textTitle}>{'Category'.toUpperCase()}</Text>
          <Picker
            selectedValue={this.state.idCat}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ idCat: itemValue })}>
            <Picker.Item label='Select Category' value='' />
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
    category: state.category
  }
}

export default connect(mapStateToProps)(App)

const styles = StyleSheet.create({
  textTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#000000'
  },
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