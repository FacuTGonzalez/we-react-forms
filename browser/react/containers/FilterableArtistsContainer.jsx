import React, { Component } from 'react'

import Artists from '../components/Artists'
import FilterInput from '../components/FilterInput'

export default class FilterableArtistsContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue : ""
        }
    }

    handleChange = (evento) => {
        evento.preventDefault();
        this.setState({inputValue: evento.target.value})
    }

    render() {
        console.log("render");
        const {artists} = this.props;
        const inputValue= this.state.inputValue
        const filteredArtist= artists.filter((artist)=>{
           return artist.name.match(inputValue)
        }) 
        return (
            <React.Fragment>
                <FilterInput funcion={this.handleChange} />
                <Artists artists={filteredArtist}  />
            </React.Fragment>
        )
    }
}

