import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import food from '../apis/food';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import PartSelection from './PartSelection';
import Footer from './Footer';
import Header from './Header';
import Food from './Food';
import FoodList from './FoodList';
import './App.css';

class App extends React.Component{
  state = { videos: [], 
    selectedVideo: null , 
    bodyparts:['arms','chest','back','abs','legs','shoulders'],
    recipes:[]
  };
   
  middle = React.createRef();
  begin = React.createRef();
  componentDidMount(){
    this.onTermSubmit('bodybuilding');
    this.onFoodApi('salmon');
    this.begin.current.scrollIntoView({ behavior: 'smooth', block: 'start' })


  };

  onTermSubmit = term =>{
    this.onRequestAPI(term);
    this.middle.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

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

  onFoodApi = async (term) => {
    const response = await food.get('/search',{
      params:{
        query:term
      }
    });
    
    this.setState({recipes:response.data.results});

  }
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
      <div className='container don' ref={this.begin}>
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
        <div class="divider div-transparent div-arrow-down mb-2"></div>
          <div className='header-don'>
          <h1 className='text-center m-4'>Diet and Nutrition</h1>
          <h2 className='text-center m-4 my-5'>Type in an ingredient to find healthy recipe suggestions!</h2>
          </div>
          <Food onFoodApi={this.onFoodApi}/>
          <FoodList recipes={this.state.recipes}/>
        </div>
        <Footer />
      </div>
      );
  }
}

export default App;
