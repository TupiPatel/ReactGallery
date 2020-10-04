import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFoundPage extends Component {
    render(){
        return (
             <div>
                
                <p style={{textAlign:"center"}} className="not-found">
                    <label>This page is not found</label> <br />
                <Link to="/">Go to Home </Link>
                </p>
            </div>
        );
    }
}
