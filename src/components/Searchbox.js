import React from "react";
import 'tachyons';
class Searchbox extends React.Component{
    render(){
        return(
            <input type="search" placeholder="search your robofriends" className="tc pa3 b--green bg-lightest-blue georgia grow" onChange={this.props.searchchange}/>
        )
    }
}
export default Searchbox;