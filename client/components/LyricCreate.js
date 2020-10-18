<<<<<<< HEAD
import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
 const  LyricCreate = (props)=> {
     const [content, setContent] = useState('');
     const onSubmit = (event) => {
         event.preventDefault();
=======
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
 class LyricCreate extends Component {
constructor(props){
    super(props);
    this.state = {content: ''};
    this.onSubmit = this.onSubmit.bind(this);
}
>>>>>>> c47bd1f056f4c4793c25547ec4ad4f314635a6b3


<<<<<<< HEAD
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
=======
       this.props.mutate({
           variables: {
               content: this.state.content,
               songId: this.props.songId
           }
       });
       this.setState({content: ''});
   }
    render() {
       
        return (
            <form onSubmit={this.onSubmit}>
               <label>Add a Lyrics</label>
               <input 
               value={this.state.content}
               onChange={event=>this.setState({content: event.target.value})}
               /> 
            </form>
        )
>>>>>>> c47bd1f056f4c4793c25547ec4ad4f314635a6b3
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
