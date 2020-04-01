import React, { Component } from 'react';

class DateSelectorDropDown extends Component {

    static defaultProps = {
        list: []
    };

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            labelItem: null,
            typeDropdown: null
        };
    }

    componentWillMount() {
        const { label } = this.props.list[0];
        if (typeof label != 'undefined') {
            this.checkType(false);
        } else {
            this.checkType(true);
        }
        this.setState({
            labelItem: 'Select a Date'
        });
    }
    checkType = (value) => {
        this.setState({
            typeDropdown: value
        });
    };
    showDropdown = () => {
        this.setState({ isOpen: true });
        document.addEventListener("click", this.hideDropdown);
    };
    hideDropdown = () => {
        this.setState({ isOpen: false });
        document.removeEventListener("click", this.hideDropdown);
    };
    chooseItem = (value) => {
        if (this.state.labelItem !== value) {
            this.setState({
                labelItem: value
            });
            this.props.updateSelection(value);
        }
    };

    renderDataDropDown = (item, index) => {
        const { value, label } = this.state.typeDropdown ? { value: index, label: item } : item;
        return (
            <li
                key={index}
                value={value}
                onClick={() => this.chooseItem(label)}
            >
                <a>{label}</a>
            </li>
        )
    };
    render() {
        const { list } = this.props;
        return (
            <React.Fragment>
                <div className={`dropdown ${this.state.isOpen ? 'open' : ''}`}>
                    <button className="dropdown-toggle" type="button" onClick={this.showDropdown}>
                        {this.state.labelItem}
                    </button>
                    <button className="dropdown-toggle caret-container" type="button" onClick={this.showDropdown}>
                        <span className="caret"></span>
                    </button>

                    <ul className="dropdown-menu">
                        {list.map(this.renderDataDropDown)}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default DateSelectorDropDown;


