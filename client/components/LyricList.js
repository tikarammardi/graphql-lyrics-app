import React, { Component } from 'react';
import {  graphql } from 'react-apollo';
import gql from 'graphql-tag';

 const  LyricList = ({mutate,lyrics}) => {

    const onLike = (id, likes) =>{
        mutate({
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

    const renderLyrics = ()=>{
        return lyrics.map(({content, id, likes})=>{
        return <li key={id} className='collection-item'>{content} 
        <div className='vote-box'>
        <i className='material-icons'
            onClick={()=>onLike(id,likes)}
        >thumb_up</i>
        {likes? likes : ''}
        </div>
        </li>
       
        })
    }
    
        return (
            <div className='collection'>
               {renderLyrics()}
            </div>
        )
    
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
