import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import gql from 'graphql-tag'
 class LyricList extends Component {

    onLike(id, likes){
        this.props.mutate({
            variables: {id},
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    id:id,
                    __typename: 'LyricType',
                    likes : likes + 1
                }
            }
        
        })
    }

    renderLyrics(){
        return this.props.lyrics.map(({content, id, likes})=>{
        return <li key={id} className='collection-item'>{content} 
        <div className='vote-box'>
        <i className='material-icons'
            onClick={()=>this.onLike(id,likes)}
        >thumb_up</i>
        {likes? likes : ''}
        </div>
        </li>
       
        })
    }
    render() {
        return (
            <div className='collection'>
               {this.renderLyrics()}
            </div>
        )
    }
}

const mutation = gql`
    
mutation LikeLyrics($id: ID){
    likeLyric(id: $id){
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
