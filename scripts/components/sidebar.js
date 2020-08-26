import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';

import { triggerFilter } from '../action/index';

const FILTERS = {
    'launch_year': {
        label: 'Launch Year',
        data: [...Array(15).keys()].map(d => d + 2006)
    },
    'launch_success': {
        label: 'Successful Launch',
        data: ['true', 'false']
    },
    'launch_landing': {
        label: 'Successful Landing',
        data: ['true', 'false']
    }
};

class Sidebar extends Component {
    state = {}
    constructor() {
        super()
        this.state = {
            selectedBadge: {}
        }
    }

    onBadgeClick = (key, val) => {
        const { selectedBadge } = this.state;
        if (selectedBadge[key]) {
            selectedBadge[key] === val ? delete selectedBadge[key] : selectedBadge[key] = val;
        } else {
            selectedBadge[key] = val;
        }
        this.setState({ ...this.state, selectedBadge })
        this.props.triggerFilter(selectedBadge)
    }
    render() {
        const { selectedBadge } = this.state;
        return (
            <div className="left-panel">
                <h6>Filter</h6>
                {
                    Object.entries(FILTERS).map(([key, value]) => (
                        <div key={key}>
                            <span className="filter-title">{value['label']}</span>
                            <hr />
                            <div className="filter-opt">
                                {value['data'].map(d => <Badge className={selectedBadge[key] && selectedBadge[key] === d ? 'selected-badge' : ''} key={d} onClick={this.onBadgeClick.bind(this, key, d)} variant="success">{d}</Badge>)}
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = { triggerFilter }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);