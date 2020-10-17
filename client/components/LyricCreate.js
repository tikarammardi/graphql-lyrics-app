import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
 const  LyricCreate = (props)=> {
     const [content, setContent] = useState('');
     const onSubmit = (event) => {
         event.preventDefault();


         props.mutate({
             variables: {
                 content: content,
                 songId: props.songId
             }
         });
         setContent('');
     };


     return (
         <form onSubmit={onSubmit}>
             <label>Add a Lyrics</label>
             <input
             value={content}
             onChange={event => setContent(event.target.value)}
         />
         </form>
     )
    }


const mutation = gql`
mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId){
      id
      lyrics {
        content
        id
        likes
      }
    }
  }
`;
export default graphql(mutation)(LyricCreate);
