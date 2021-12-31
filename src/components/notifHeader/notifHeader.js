import React from 'react';
import { TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NotifHeader extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.headerButtonContainer} onPress={this.props.onPress}>
       

<Icon name="notifications-none" color="#157f53" size={28} />


      </TouchableOpacity>
    );
  }
}

NotifHeader.propTypes = {
  onPress: PropTypes.func,
};