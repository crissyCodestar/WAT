import React, { Component } from 'react';
import './Galleries.css';


class Galleries extends Component {
    constructor(props) {
        super(props);
        this.state={
          selectedArtId: null
        }
    }

    onArtClick = art => {
      console.log("clicked on: ", art);
      this.props.onArtClick(art);
      this.setState({ selectedArtId: art.unique_key });
    };




    render(){
      console.log("In GALL: ",this.state.selectedArtId)
        const {resultArr} = this.props;



        return(
            <div>
                <ul id="galleryList">
                {resultArr.map ((art) => (
                  <div id="divLi" key={art.id}>
                      <li className="list_item"
                        onClick={() => this.onArtClick(art)}
                          >
                            <span className="list_num">
                            {art.id}.
                            </span>
                            <div className="link-title">
                            <span>
                            {art.name}
                            </span><br />
                            <span className="link-excerpt">
                             {art.address1}
                            </span>
                            </div>
                        </li>
                    </div>
                ))}


                </ul>
            </div>
        )
    }
}

export default Galleries;


// art={art}
// key={art.unique_key}
// selected={art.unique_key === this.state.selectedArtId}
//
// onArtClick={this.onArtClick}
