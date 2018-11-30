import React, { Component } from 'react';
import './Main.css';
import axios from "axios";
import Galleries from "../Galleries/Galleries";
import Map from '../Map/Map';
import MapInfo from "../Map/MapInfo";
import './Main.css';
import SearchBar from '../SearchBar/SearchBar';

// if error
//   then meaasge
//   else
// if !selected gallery
//   then quote
//   else


class Main extends Component {
    constructor() {
        super();
        this.state = {
            zipcode: "",
            resultArr: [],
            selectedArt: null,
            arts:[],
            carts:[],
            searched: false,
        }
    }


    handleChange = (e) => {
      console.log("CLICKED", typeof e.target.value);
        this.setState({
            zipcode: e.target.value
        })
    }


      componentDidMount() {
        axios
          .get(
            "https://data.cityofnewyork.us/resource/43hw-uvdj.json?$limit=20"
          )
          .then(res => {
            let idNum = 0;
            const result = res.data.map(function(el) {
              var o = Object.assign({}, el);
              o.id = idNum+=1;
              return o;
            })

            this.setState({
              resultArr: result
            });
          })
          .catch(err => {
            console.log("error fetching arts");
          });
      }

      onMapChange = options => {
        this.setState({
          mapOptions: options
        });
      };


    handleSubmit = () => {
      console.log("ZIP", !isNaN(this.state.zipcode));
        axios
            .get(
                `https://data.cityofnewyork.us/resource/43hw-uvdj.json?zip=${this.state.zipcode}`
            )
            .then(res => {
                let idNum = 0;
                const result = res.data.map(function(el) {
                  var o = Object.assign({}, el);
                  o.id = idNum+=1;
                  return o;
                })

                this.setState({
                    resultArr: result,
                    searched: true

                });
            })
            .catch(err => {
                console.log("error fetching galleries");
            });
    }

    onArtClick = art => {
        this.setState({ selectedArt: art });
    };

    // renderBlah =()=>{
    //   const { selectedArt } = this.state;
    //
    // }


    render(){
      console.log("Carts",this.state.resultArr)

    console.log(this.state.selectedArt)
    const { selectedArt, zipcode, searched } = this.state;
    let art = !!selectedArt  ?
      MapInfo(selectedArt)
      :  <Featured />

     let error = !!isNaN(zipcode) ?
      (<div><h3>Error!!!</h3>
        <p>This is all you!</p>
        <p>Enter a valid zip code</p></div>)
        :
        <Featured/>

        let message = !!searched ? error : art
        console.log("message",message, searched);
        return(

            <div className="main_con">
                <div className="intro">
                    Search incrediable art galleries in and around your neighborhood.
                </div>
                <div className="search_bar">
                    <SearchBar
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}/>
                </div>
                <div id="homePage">
                    <div className="results">
                        <Galleries
                        resultArr={this.state.resultArr}
                        onArtClick={this.onArtClick} />
                    </div>
                    <div className="address">
                        {art}
                    </div>
                    <div className="Map">
                        <Map
                          google={this.props.google}
                          onArtClick={this.onArtClick}
                          containerElement={<div style={{ height: `100%` }} />}
                          mapElement={<div style={{ height: `100%` }} />}
                          resultArr={this.state.resultArr}
                          />
                    </div>

                </div>

            </div>
        )
    }
}


const Featured=()=>{


  return(
    <div className="quote_con">
        <div id="quote">
          <p >Art, freedom and creativity will change society faster than politics.</p>
          <h3>-Victor Pinchuk</h3>
        </div>
    </div>
  )
}

export default Main;
