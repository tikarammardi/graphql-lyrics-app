import React, { useState } from 'react'
import gql from 'graphql-tag'
import {  graphql } from 'react-apollo'
import {Link, hashHistory} from 'react-router'
import fetchSongsQuery from '../queries/fetchSongs'

 const SongCreate =({mutate}) => {
   

    const [title, setTitle] = useState('');

       const onSubmit = (event) =>{
        event.preventDefault();

    

        mutate({
            variables: {
                title
            },
            refetchQueries: [{
                query: fetchSongsQuery                
            }]
        }).then(()=>hashHistory.push('/') )

        

        
 
    }


    
        return (
            <div>
                <Link to="/"> Back</Link>
                <h2>Create new song</h2>
                
                <form onSubmit={onSubmit}>
                    <label>Songle Title:</label>
                    <input type='text'onChange={(event)=>setTitle(event.target.value)} value={title}/>
                    <button>Add</button>
                </form>
            </div>
        )
    
}

const mutation = gql`
mutation AddSong($title: String){
    addSong(title: $title ){
        title
    }
}
`;

export default graphql(mutation)(SongCreate);
