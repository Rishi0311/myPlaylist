import React, { Component } from 'react';

import './App.css';
let defaultStyle = {
  color: 'white'
};
let fakeServerData = {
  user: {
    name: 'Rishi',
    playlist: [
      {
        name: 'My Fav',
        songs: [{name:'Jai Ho',duration:1234},
                {name:'Janam-Janam',duration:600},
                {name: 'Kal Ho Na Ho',duration:780}]
      },
      {
        name: '90s',
        songs: [{name:'Ek Ladki',duration: 1234},
                {name: 'Yes Boss',duration:1232},
                {name:'Zara Tasveeer Se',duration:3452}]
      },  
      {
        name: 'EnglishBeats',
        songs: [{name:'Bailamos',duration:1234}, 
                {name:'Smack That',duration:345}, 
                {name:'Rhythm Of Love',duration:3458}]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>{/*using object spread*/}
        <h2 style={defaultStyle}>{this.props.playlist && this.props.playlist.length} Playlists</h2>
      </div>
    );
  }
}

class HourCounter extends Component {
  render() {
    let allSongs = this.props.playlist.reduce((songs,eachPlaylist)=>{
      return songs.concat(eachPlaylist.songs)
    },[])

    let totalDuration = allSongs.reduce((sum,eachSong)=>{
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>{/*using object spread*/}
        <h2 style={defaultStyle}>{Math.round(totalDuration/3600)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text"></input>

      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: '25%', display: 'inline-block' }}>
        <img />
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{ ...defaultStyle, 'font-size': '50px' }}>
              {this.state.serverData.user.name}'s Playlist
        </h1>
        <PlaylistCounter playlist={this.state.serverData.user.playlist} />
            <HourCounter playlist={this.state.serverData.user.playlist} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>:<h1 style={{ ...defaultStyle, 'font-size': '50px' }}>Loading...</h1>
        }
      </div>
    );
  }
}


export default App;
