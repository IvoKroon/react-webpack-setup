import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from './list';

export class SelectBox extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false, placeholderActive: true, selected: null, selectedId: '' };
        this.items = this.props.items;
        this.outSideAction = this.props.action;
        this.placeholder = this.props.placeholder;

        this.selectClickEvent = this.selectClickEvent.bind(this);
        this.optionClickEvent = this.optionClickEvent.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ open: false });
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
    }
    // SelectClicker
    selectClickEvent() {
        if (!this.state.open) {
            document.addEventListener('mousedown', this.handleClickOutside);
        } else {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
        this.setState({ open: !this.state.open, placeholderActive: false });
    }
    // Clickevent for li's
    optionClickEvent(id) {
        this.outSideAction(id);
        this.setState({ open: false, selected: this.items[id], selectedId: id });
    }

    render() {
        return (
            <div ref={list => this.setWrapperRef(list)}>
                <div>
                    <button onClick={this.selectClickEvent} >
                        { this.state.selected ? (
                            this.state.selected
                        ) : (
                            this.placeholder
                        )}
                    </button>
                    { this.state.open ? (
                        <List clickEvent={this.optionClickEvent} data={this.items}/>
                    ) : (null)}
                    <input type="hidden" value={this.state.selectedId} />
                </div>
            </div>
        );
    }
}

SelectBox.propTypes = {
    items: PropTypes.array.isRequired,
    action: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default SelectBox;
