import React from 'react';

class SearchBar extends React.Component {
    state={term:''};

    onInputChange = (e) => {
        this.setState({term:e.target.value});
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }

    render(){
    
        return(
            <div className='ui segment search-bar'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field' >
                        <label style={{'color':'white'}}>If not shown above, search for it in the box below!</label>
                        <input type='text'
                        placeholder='Search for a muscle to workout' 
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