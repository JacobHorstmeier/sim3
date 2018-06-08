import React, { Component }from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            myPosts: true,
            post: []

        }
    }



    render (){
        let mappedPosts = this.state.post.map(post => {
            return (
                <div key={post.id}>
                    {post.title}
                    {post.user_name}
                    {/* profile pic goes here */}
                </div> 
            )
        })
        return (
            <div>
                Dashboard
                <input type='search' className=''/>
                <button type='' className=''>Search</button>
                <button type='' className=''>Reset</button>
                <label htmlFor='myPosts'>My Posts</label>
                <input type='checkbox' id='myPosts' value={this.state.myPosts}/>
                <h3>Posts : {this.props.match.params.id}</h3>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        
      id: state.id,
      
    };
  }
  
  export default connect( mapStateToProps )(Dashboard);