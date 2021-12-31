import React from 'react';
import { TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Hamburger extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={this.props.onPress}>
       

<Icon name="menu" color="#157f53" size={30} />


      </TouchableOpacity>
    );
  }
}

Hamburger.propTypes = {
  onPress: PropTypes.func,
};