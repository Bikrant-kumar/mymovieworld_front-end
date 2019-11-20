import React, { Component } from 'react';
import './card.css'
import MovieDetails from './MovieDetails'
import {BrowserRouter as Router,Switch,Route, withRouter}from'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';


class MovieRow extends Component{


    addFav=()=>{
        console.log(this.props.movie);
        // axios.post("http://",this.props.movie)
        // .then(response =>{
        //     console.log(response)
        // })
        // .catch(error=>{
        //     console.log(error)
        // })

    }

    viewMovie(){
        //console.log(moviedetail);
        console.log(this.props.movie);
        this.props.history.push({pathname:"/MovieDetails", state:{m_details:this.props.movie}})
        
               
    }

    render(){
        return( <div className="grid">
        <table className="card" key={this.props.movie.id}>
             <tbody>
                <tr>
                   <td>
                     <img alt="poster" width="144" height="180" align="center" src={this.props.movie.poster_src}/>
                        </td>
                        <div className="container">
                            <td >
                            <b><h4>{this.props.movie.title}</h4></b>
                           <b>{this.props.movie.original_name}</b>
                           <p >{this.props.movie.overview}</p>
                           <p>
                            <td>
                           <img width="25" height="25"  src="https://i.ya-webdesign.com/images/movie-rating-symbols-png-9.png" />
                           </td><td>{this.props.movie.vote_average}/10 </td>
                           <td>
                           <IconButton   aria-label="add to favorites" >
                             <FavoriteIcon  className="favicon" onClick={this.addFav}/>
                            </IconButton></td>
                           <td>
                           <input className=" detail" type="button" onClick={this.viewMovie.bind(this)} value="Details"/></td></p>
                           </td>
                           
                         </div>                   
                 </tr>
             </tbody>
         </table>  
         </div>
        )}
}

export default withRouter(MovieRow);