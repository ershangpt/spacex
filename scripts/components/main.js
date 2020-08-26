import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cards from './cards';
import { triggerFilter } from '../action/index';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: null
        }
    }

    render() {
        const { cards } = this.props;
        return (
            <div className='right-panel'>
                {!cards ? <h4>No Mission Available</h4> :
                    cards.map(data => <Cards key={data.flight_number} data={data} />)}
            </div>
        );
    }

    componentDidMount() {
        this.props.triggerFilter({});
    }

}

const mapStateToProps = (state) => {
    return {
        filter: state.filter.filter,
        cards: state.filter.cards
    }
}

const mapDispatchToProps = { triggerFilter }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);