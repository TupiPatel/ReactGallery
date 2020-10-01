import React, { Component } from 'react';
import { useEffect, useState } from 'react';

export default class Gallery extends Component {

    constructor (props) {
        super(props)
        this.state = {
          user: {},
          photos : []
        }
    }

    componentDidMount() {
        fetch("/api/photos")
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
                            <img src="/img/profile.jpeg" height="300" width="300" className="profile-pic"></img>
                        </div>
                        <div className="column column2">
                            <span> { user.name }</span>
                            <div className="inner-row">
                                <div className="inner-column inner-column2">
                                    <span>BIO</span>
                                    <label>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing…mpor incididunt ut labore et dolore magna aliqua
                                    </label>
                                </div>
                                <div className="inner-column inner-column1">
                                    <span>Phone</span> <label>555-555-5555</label>
                                    <span>Email</span> <label>{ user.email }</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    {photos.map((item, index) => (
                        <div key={index} >
                            <span className='indent' >{item.title}</span>
                            <span className='indent' >{item.description}</span>
                        </div>
                    ))}
                        
                </div>
            </div>

        );
    }



}