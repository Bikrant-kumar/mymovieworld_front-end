import React, { Component } from 'react';
import $ from 'jquery'
import MovieRow from './MovieRow'
import fire from './firebase';
       
class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            searchterm:'',
            sortby:'popularity.desc',
            discover:'movie',
            page:1
         };
        this.performSearch("");
    }


    performSearch(searchterm){
        console.log("perform search using moviedb");
        const urlString="https://api.themoviedb.org/3/search/"+this.state.discover+"?api_key=0c5af6bd939a022bc58553562586c6bc&query="+this.state.searchterm;
        const urlString1 = "https://api.themoviedb.org/3/discover/"+this.state.discover+"?api_key=0c5af6bd939a022bc58553562586c6bc&sort_by="+this.state.sortby+"&page="+this.state.page;
        $.ajax({

            url:this.state.searchterm===""?urlString1:urlString,
            success:(searchResults)=>{
                console.log("Fetched data succesfully")
                const results = searchResults.results
                console.log(searchResults)
               
                var movieRows=[]
                results.forEach((movie)=>{
                    movie.poster_src="https://image.tmdb.org/t/p/w185"+movie.poster_path
                    const movieRow =<MovieRow movie ={movie}/>
                    movieRows.push(movieRow)
                })
                this.setState({rows:movieRows})
            },
            error:(xhr,status,err)=>{
                console.error("Failed to to fetch data")
            }
        })
    }

    logout=()=>{
        fire.auth().signOut();
     this.props.history.push("/");
    }

    Dis_Movie=()=>{
        this.setState({
            discover:"movie",
            searchterm:'',
            page:1
        },()=>{this.performSearch("")})
    }

    Dis_TV=()=>{
       this.setState({
        discover:"tv",
        searchterm:'',
        page:1
    },()=>{this.performSearch("")})
    }
    changeToNextPage=()=>{
        let {page}=this.state
        page=page+1
        this.setState({
            page:page
        },()=>{this.performSearch("")})
    }
    changeToPrevPage=()=>{
        let {page}=this.state
        if(this.state.page>1){
            page=page-1
           this.setState({
            page:page
           },()=>{this.performSearch("")})
        }
    }

    searchChangeHandler(event){
        console.log(event.target.value)
        const boundObject = this.urlString1
        //this.setstate({defaultState:false})
        this.setState({
            searchterm :event.target.value
        },()=>{console.log(this.state.searchterm)})
        // boundObject.performSearch(searchterm)
    }

    sortMovie=(event)=>{
        console.log(event.target.value);
        this.setState({
            sortby:event.target.value,
        },()=>{this.performSearch('')})
    }

    render(){
        console.log(this.props.name)
        return(
            <div>
              <table  style={{
                    backgroundColor:'green',
                    display:'block',
                    color:'white',
                    fontSize:20,
                    padding:3,
              }}>
                <tbody>
                    <tr>
                        <td>
                        <img width="40" margintop= '1px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCSSraPZjkCRu3kENEUDXMMicfSyWx5CjCckP2_ksT473scxQVg&s" />
                        </td>
                        <td>
                           <b> MyMovieWorld </b> 
                        </td>
                        <td><button onClick={this.Dis_Movie}> Movies </button></td>
                        <td><button onClick={this.Dis_TV}> TV Shows </button></td>
                        <td> <button > Favourites </button> </td>
                        <td>
                        <button  onClick={this.logout}> Logout </button>
                        </td><td>
                          <h1 >{this.props.name} </h1> 
                        </td>
                    </tr>
                   
                </tbody>
              </table>
              <div className="page_bottom">
              <input style={{ width:"25%"}}onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search item"/>
                <input type="button" onClick={this.performSearch.bind(this)} value="Search"/>
                
                <button  style={{float:"right"}} onClick={this.changeToNextPage}  value="Next">Next</button>
                <span style={{float:"right",color:"white",marginLeft:"2px",marginRight:"2px"}} >Page {this.state.page}</span>
                <button  style={{float:"right"}} onClick={this.changeToPrevPage} value="Prev">Prev</button>
                
                  <select name="Sort" style={{float:"right"}} onChange={this.sortMovie}>
                      <option value="popularity.desc">--Sort--</option>
                      <option value="popularity.asc">popularity.asc</option>
                      <option value="popularity.desc">popularity.desc</option>
                      <option value="release_date.asc">release_date.asc</option>
                      <option value="release_date.desc">release_date.desc</option>
                      <option value="revenue.asc">revenue.asc</option>
                      <option value="revenue.desc">revenue.desc</option>
                      <option value="vote_average.asc">vote_average.asc</option>
                      <option value="vote_average.desc">vote_average.desc</option>
                      <option value="primary_release_date.asc">primary_release_date.asc</option>
                      <option value="primary_release_date.desc">primary_release_date.desc</option>
                      <option value="original_title.asc">original_title.asc</option>
                      <option value="original_title.desc">original_title.desc</option>
                      <option value="vote_count.asc">vote_count.asc</option>
                      <option value="vote_count.desc">vote_count.desc</option>
                  </select>                          
                 
            </div>
            {this.state.rows}           
            </div>
        );
    }
}
export default Home;