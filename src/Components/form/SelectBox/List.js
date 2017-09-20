import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Option } from './Option';

export class List extends Component {
    constructor(props) {
        super(props);
        this.elements = [];
        this.makeOptions();
    }

    makeOptions() {
        for (let i = 0; i < this.props.data.length; i += 1) {
            this.elements.push(
                <Option
                    onClick={this.props.clickEvent}
                    value={this.props.data[i]}
                    key={i}
                    id={i}
                />);
        }
    }

    render() {
        return (
            <div>
                <ul> {this.elements} </ul>
            </div>
        );
    }
}

List.propTypes = {
    data: PropTypes.array.isRequired,
    clickEvent: PropTypes.func.isRequired,
    width: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};


export default List;
