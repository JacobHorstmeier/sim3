import React from 'react';
import {connect} from 'react-redux';


function Nav(props) {
    console.log(props)
    return (
        <div>
            Nav
            <a href="#/dashboard"><button type='' className=''>Home</button></a>
            <a href="#/new"><button type='' className=''>New Post</button></a>
            <a href="#/"><button type='' className=''>Logout</button></a>
            
        </div> 
    
    )
}

function mapStateToProps(state) {
    return {
        
      user_name: state.user_name,
      profile_pic: state.profile_pic
    };
  }
  
  export default connect( mapStateToProps )(Nav);