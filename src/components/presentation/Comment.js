import React, {Component} from'react'


class Comment extends Component{

    render(){
        return(
            <div style={{marginBottom:15}}>
            <p style={{fontSize:18, fontWeight:600}}>{this.props.currentComment.body}</p>
            <span style={{fontSize:14, fontWeight:200}}>{this.props.currentComment.username}</span>
            <span style={{marginLeft:12,marginRight:12}}> | </span>
            <span style={{fontSize:14, fontWeight:200}}>{this.props.currentComment.timestamp}</span>
            <hr />
            </div>
        )

    }
}

export default Comment
