import React from "react";
import { Component } from "react";
import axios from "axios";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {searchWord: ""}
        this.onButtonClick = this.onButtonClick.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    onButtonClick(e){
        e.preventDefault();
        //OBTENR INFO DE LA API
        //MANDAR ARREGLO
        axios.get(`https://swapi.dev/api/people/?search=${this.state.searchWord}`)
        .then(res=>{
            console.log("RAWRESPONSE", res.data.results);
            this.props.onSearch(res.data.results);
        })
        .catch(err=>{
            console.log(err);
        });
    }

    inputChangeHandler(e){
        e.preventDefault();
        this.setState({searchWord: e.target.value});
    }
    
    render(){
        return(
            <form onSubmit={this.onButtonClick}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Search Character</label>
                    <input
                        type="text"
                        class="form-control" 
                        value={this.state.searchWord}
                        aria-describedby="emailHelp"
                        onChange={this.inputChangeHandler}
                    />
                    <div id="emailHelp" class="form-text">May the force be with you.</div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Search;
