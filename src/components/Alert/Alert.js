// @flow
import React from 'react';
import cn from 'classnames/bind';
import styles from './Alert.css';
import PropTypes from 'prop-types';

let cx = cn.bind(styles);

class AlertComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div className={cx('Message')}>
                <span>Hello {this.props.message}, I am a component!</span>
            </div>
        )
    }
}

AlertComponent.propTypes = {
    message: PropTypes.string
};

AlertComponent.defaultProps = {
    message: 'world'
};

export default AlertComponent;
