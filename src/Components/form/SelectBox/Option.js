import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Option extends Component {

    constructor(props) {
        super(props);
        this.onClickEvent = this.onClickEvent.bind(this);
    }

    onClickEvent(data) {
        this.props.onClick(data);
    }

    render() {
        return (
            <li>
                <button
                    onClick={e => this.onClickEvent(this.props.id)}
                >
                    { this.props.value }
                </button>
            </li>
        );
    }
}

Option.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

export default Option;
