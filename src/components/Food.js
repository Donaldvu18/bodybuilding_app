import React from 'react';

class Food extends React.Component{

    state={term:''}

    onInputChange = (e) => {
        this.setState({term:e.target.value});
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFoodApi(`${this.state.term}`)
    }
    render(){


        return (
            <div className='ui segment search-bar mt-5'>
            <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field' >
                    <label >Search Recipes </label>
                    <input type='text'
                    placeholder='Enter ingredient here' 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                </div>
            </form>
        </div>
    )
        
    }

}

export default Food