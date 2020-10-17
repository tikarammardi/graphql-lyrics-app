import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
 class LyricCreate extends Component {
constructor(props){
    super(props);
    this.state = {content: ''};
    this.onSubmit = this.onSubmit.bind(this);
}

   onSubmit(event){
       event.preventDefault();

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
    }
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