import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import PartSelection from './PartSelection';
import Footer from './Footer';
import './App.css';

class App extends React.Component{
  state = { videos: [], 
    selectedVideo: null , 
    bodyparts:['arm','chest','back','abs','leg','shoulders']
  };
   
  
  componentDidMount(){
    this.onTermSubmit('bodybuilding');
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    
    this.setState({videos : response.data.items,
      selectedVideo:response.data.items[0]
    });

  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  }

  render(){
    return(
      <div className='ui container'>
        <h1 className='text-center pt-3'>Don's Dynamic Gym</h1> 
        <div className='container'>
        <PartSelection onTermSubmit={this.onTermSubmit} bodyparts={this.state.bodyparts}/>
        </div>
        <div>
           <SearchBar onFormSubmit={this.onTermSubmit}/>
           </div>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column'>
            <VideoDetail video={this.state.selectedVideo}/>
            </div>
    <div className='six wide column'>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
        </div>
        </div>
        <Footer/>
      </div>
      );
  }
}

export default App;
