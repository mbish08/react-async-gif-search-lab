import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {

    componentDidMount() {
// add fetch here - store the first 3 gifs in state and pass down to GifList as a prop
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <GifList />
            {/* need to add prop for submit handler function */}
                <GifSearch />
            </div>
        );
    }
}

export default GifListContainer;
