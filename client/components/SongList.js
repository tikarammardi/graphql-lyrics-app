import React from 'react';
import {  graphql } from 'react-apollo';
import {Link} from 'react-router'
import fetchSongsQuery from '../queries/fetchSongs'
import deleteSong from '../queries/deleteSong';


const SongList =(props) =>  {

const onSongDelete =  (id) =>{
  props.mutate({
    variables:{id},
  }).then(() => props.data.refetch())
}

  const renderSongs = ()=> {
    return props.data.songs.map(({id,title}) => {
      return (
        <li key={id} className='collection-item'>
          <Link to={`/songs/${id}`}>
          {title} 
          </Link>
       
          <i 
          className='material-icons'
          onClick={()=> onSongDelete(id)}
          >delete</i>
        </li>
      );
    });
  }

  
    
    return (
      <div>
      <ul className='collection'>
        {props.data.loading ? 'Loading....' : renderSongs()}
      </ul>
      <Link to="songs/new"className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
         </Link>
      </div>
    );
  
}



export default graphql(deleteSong)(graphql(fetchSongsQuery)(SongList))

