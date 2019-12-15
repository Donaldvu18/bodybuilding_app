import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import google from '../apis/google';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import PartSelection from './PartSelection';
import Footer from './Footer';
import Header from './Header';
import './App.css';

class App extends React.Component{
  state = { videos: [], 
    selectedVideo: null , 
    bodyparts:['arms','chest','back','abs','legs','shoulders'],
    googleResults:[]
  };
   
  middle = React.createRef();

  componentDidMount(){
    this.onTermSubmit('bodybuilding');
  };

  onTermSubmit = term =>{
    this.onRequestAPI(term);
    this.middle.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    this.onGoogleAPI();
  };

  onRequestAPI = async (term) => {
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    });
    
    this.setState({videos : response.data.items,
      selectedVideo:response.data.items[0]
    });

  };

  // onGoogleAPI = async () => {
  //   const response = await google.get('/nearbysearch/json',{
  //     params:{
  //       location:'-33,151'
  //     }
  //   });
  //   console.log(response);
  //   // this.setState({videos : response.data.items,
  //   //   selectedVideo:response.data.items[0]
  //   // });

  // };

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  }
  
  render(){
    return(
      <div className='container'>
        <Header/>
        <div className='container'>
        <PartSelection onTermSubmit={this.onTermSubmit} bodyparts={this.state.bodyparts}/>
        </div>
        <div>
           <SearchBar onFormSubmit={this.onTermSubmit}/>
           </div>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='ten wide column' ref={this.middle}>
            <VideoDetail  video={this.state.selectedVideo}/>
            </div>
    <div className='six wide column pr-0'>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
        </div>
        </div>

        <div>
          <h1 className='text-center m-4 mt-5'>Search for a gym nearby</h1>
        </div>
        <Footer/>
      </div>
      );
  }
}

export default App;
