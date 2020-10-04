import React, { Component } from 'react';
import Moment from 'react-moment';
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

export default class Gallery extends Component {

    constructor (props) {
        super(props)
        this.state = {
          user: {},
          photos : [],
        }
    }

    componentDidMount() {
        fetch("/api/photos", {
            method: "GET", // *Type of request GET, POST, PUT, DELETE
       
            headers: {
              "Content-Type": "application/json", // request content type
              "X-Requested-With": "XMLHttpRequest",
              "mode": "cors",
             // 'Authorization':'Bearer ' + token
            },
           
          })
          .then(res => res.json())
          .then(
            (result) => {
             console.log(result);
             this.setState({
                user: result[0],
                photos: result.photos
             });
             console.log(this.state.photos);
            },
           
            (error) => {
              console.log(error);
            }
          )
      }
      


    render() {
        const { user } = this.state
        const { photos } = this.state
        return (
            <div className="gallery">
                
                <div className="card ">
                    <div className="row profile">
                        <div className="column column1">
                            <img src={window.location.origin + '/' + user.profile } height="300" width="300" className="profile-pic"  ></img>
                        </div>
                        <div className="column column2">
                            <span className="full-name"> { user.name }</span>
                            <div className="inner-row">
                                <div className="inner-column inner-column2">
                                    <span className="profile-heading">Bio</span> <br />
                                    <label className="profile-bio">
                                       {user.bio}
                                    </label>
                                </div>
                                <div className="inner-column inner-column1">
                                    <span className="profile-heading">Phone</span> <br/>
                                    <label className="profile-contact">{user.phone}</label><br/>
                                    <span className="profile-heading">Email</span> <br/>
                                    <label className="profile-contact">{ user.email }</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row-card">
                        {photos.map((item, index) => (
                            <div key={index} className="column-card card">
                               
                                    <img src={window.location.origin + '/' +item.img} className="card-img-top" alt="..." />
                                  
                                       {/* <Lightbox image={window.location.origin + '/' +item.img} title="Image Title" /> */}
                                    <h5 className="card-title bottom-left">{item.title}</h5>
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                        
                                        <span className="featured-left">
                                            {item.featured ? <img src={window.location.origin + '/img/red-heart.jpg' } className="heart-img" />: <div className="heart-img"></div>}
                                        </span> 
                                        
                                        <span className="date-right"><Moment format="YYYY-MM-DD">{ item.updated_at }</Moment></span>
                                    </div>
                            </div>
                        ))}
                </div>
               
            </div>

        );
    }



}