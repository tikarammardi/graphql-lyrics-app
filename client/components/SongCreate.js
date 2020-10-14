import React, { Component } from 'react'
import gql from 'graphql-tag'
import { compose, graphql } from 'react-apollo'
import {Link, hashHistory, useHistory} from 'react-router'
import fetchSongsQuery from '../queries/fetchSongs'

 class SongCreate extends Component {
    constructor(props){
        super(props)
        this.state= {
            title: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

       onSubmit (event){
        event.preventDefault();

    

        this.props.mutate({
            variables: {
                title: this.state.title
            },
            refetchQueries: [{
                query: fetchSongsQuery                
            }]
        }).then(()=>hashHistory.push('/') )

        

        
 
    }


    render() {
        return (
            <div>
                <Link to="/"> Back</Link>
                <h2>Create new song</h2>
                
                <form onSubmit={this.onSubmit}>
                    <label>Songle Title:</label>
                    <input type='text'onChange={(event)=>this.setState({title: event.target.value})} value={this.state.title}/>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

const mutation = gql`
mutation AddSong($title: String){
    addSong(title: $title ){
        title
    }
}
`;

export default graphql(mutation)(SongCreate);
