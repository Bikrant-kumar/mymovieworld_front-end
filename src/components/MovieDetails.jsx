import React, { Component } from "react"
import './card.css';

class MovieDetails extends Component{

    back=()=>{
        this.props.history.push({pathname:"/home"});
    }

    render() {
        // console.log(this.props.location.state.m_details.id)
        return (
            <div className="card" marginTop="1px" key={this.props.location.state.m_details.id}>
                <input className="backbutton" type="button" onClick={this.back} value=" "/>
                <img alt="poster" width="200" height="250" src={this.props.location.state.m_details.poster_src}/>
                <div class="container1">
                           <h2><b>{this.props.location.state.m_details.title}</b></h2>
                           <h2><b>{this.props.location.state.m_details.original_name}</b></h2>
                           <p ><b>{this.props.location.state.m_details.overview}</b></p>
                           <p ><h4>Release Date : {this.props.location.state.m_details.release_date}</h4> </p>
                           <p ><h4>Popularity : {this.props.location.state.m_details.popularity}</h4></p>
                           <p><h4>Vote_Average : { this.props.location.state.m_details.vote_average}</h4></p>
                           <p>
                           <img width="25" height="25" src="https://i.ya-webdesign.com/images/movie-rating-symbols-png-9.png" />
                           {this.props.location.state.m_details.vote_average}/10</p>
                           
                           </div> 
                    {/* <input type="button" onClick={this.viewMovie.bind(this)} value="Details"/>                 */}
            </div>   
        );
    }

} 

export default MovieDetails
