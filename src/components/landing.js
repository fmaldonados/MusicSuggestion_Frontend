import React from 'react';
import {Redirect} from 'react-router-dom';

class Landing extends React.Component {
    render() {
        return (
            this.props.isAuth?<Redirect to='/home'></Redirect>:
            (<div className='Landing'>
                <div className="landingBackground bg">
                    <div className="transparentOVerlay">
                    </div>

                </div>

                <h1 className="backgroundTitle">THE PERFECT PLACE FOR MUSIC HEAVEN</h1>

            </div>)
        )
    }
}

export default Landing;