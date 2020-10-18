import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import {Link} from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';

 const SongDetail =(props)=> {

    console.log('props,', props)
     
        const {song} = props.data;
        const {params} = props;
        

        if(!song) {
            return <div>Loading.....</div>
        }

        return (
            <div>
                <Link to='/'>Back</Link>
                <h2>{song.title}</h2>
                <LyricList lyrics = {song.lyrics}/>
                <LyricCreate songId={params.id}/>
            </div>
        )
    
}

export default graphql(fetchSong,{
    options:(props) => { return { variables: {id: props.params.id}}}
})(SongDetail);