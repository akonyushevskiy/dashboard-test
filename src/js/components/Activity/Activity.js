import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchActivityData, changeFilter} from '../../actions/activityActions';

import Dropdown from 'react-dropdown';
import ChartistGraph from 'react-chartist';

const filterOptions = {
    groups: ['All groups', 'React'],
    timePeriod: ['Last 7 days', 'Last 30 days'],
    measurement: ['Sentiment'],
    other: ['Other', 'Export', 'Print']
};

const biPolarBarChartOptions = {
    stackBars: true,
    horizontalBars: true,
    seriesBarDistance: 100,
    axisX: {
        offset: 30
    },
    axisY: {
        offset: 80
    },
    onlyInteger: true
};

class Activity extends Component {

    componentWillMount() {
        this.props.fetchActivityData();
    }

    onSelect(){
        console.log('change filter, lets reload data!');
    }

    render () {

        const Chart = this.props.activity.data ? <ChartistGraph data={this.props.activity.data} options={biPolarBarChartOptions} type={'Bar'} /> : <div>Loading...</div>;

        return (

            <div className="content page-activity">
                <form className="filter">
                    <fieldset>
                        <label for="">Groups:</label>
                        <Dropdown options={filterOptions.groups} onChange={this.onSelect.bind(this)} value={this.props.activity.filter.groups} placeholder="Select an option" />
                    </fieldset>
                    <fieldset>
                        <label for="">Time Period:</label>
                        <Dropdown options={filterOptions.timePeriod} onChange={this.onSelect.bind(this)} value={this.props.activity.filter.timePeriod} placeholder="Select an option" />
                    </fieldset>
                    <fieldset>
                        <label for="">Measurement:</label>
                        <Dropdown options={filterOptions.measurement} onChange={this.onSelect.bind(this)} value={this.props.activity.filter.measurement} placeholder="Select an option" />
                    </fieldset>
                    <fieldset>
                        <Dropdown options={filterOptions.other} onChange={this.onSelect.bind(this)} value={this.props.activity.filter.other} placeholder="Other" />
                    </fieldset>
                </form>

                { Chart }

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        activity: state.activity
    }
}

export default connect(mapStateToProps, { fetchActivityData, changeFilter})(Activity);