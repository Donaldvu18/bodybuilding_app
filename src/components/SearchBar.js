import React from 'react';

class SearchBar extends React.Component {
    state={term:''};

    onInputChange = (e) => {
        this.setState({term:e.target.value});
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(`${this.state.term} workout`);
    }

    render(){
    
        return(
            <div className='ui segment search-bar'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field' >
                        <label >Search for a specific muscle to workout:</label>
                        <input type='text'
                        placeholder='Enter muscle here' 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;