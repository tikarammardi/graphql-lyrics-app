import React, { Component } from 'react';

import { compose, graphql } from 'react-apollo';
import {Link} from 'react-router'
import fetchSongsQuery from '../queries/fetchSongs'
import deleteSong from '../queries/deleteSong';
import { mutations } from 'apollo-client/mutations/store';

class SongList extends Component {
onSongDelete  (id){
  this.props.mutate({
    variables:{id},
  }).then(() => this.props.data.refetch())
}

  renderSongs() {
    return this.props.data.songs.map(({id,title}) => {
      return (
        <li key={id} className='collection-item'>
          <Link to={`/songs/${id}`}>
          {title} 
          </Link>
       
          <i 
          className='material-icons'
          onClick={()=> this.onSongDelete(id)}
          >delete</i>
        </li>
      );
    });
  }

  render() {
    
    return (
      <div>
      <ul className='collection'>
        {this.props.data.loading ? 'Loading....' : this.renderSongs()}
      </ul>
      <Link to="songs/new"className='btn-floating btn-large red right'>
        <i className='material-icons'>add</i>
         </Link>
      </div>
    );
  }
}



export default graphql(deleteSong)(graphql(fetchSongsQuery)(SongList))

