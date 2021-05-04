import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import EventCard from './EventCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#F3F3F3',
    },
})

// import { YelowBox } from 'react-native';

class EventList extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        const events = require('./db.json').events.map(e => ({
            ...e,
            date: new Date(e.date),
        }));
        this.setState({events});
    }

render(){
    return(
        <FlatList 
        style = {styles.list}
          data = { this.state.events }
          renderItem = { ( { item } ) => <EventCard event={item} /> }
            keyExtractor = { item => item.id}
        />
    );
}
}
export default EventList;