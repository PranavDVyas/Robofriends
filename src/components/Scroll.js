import React from 'react';
// const Scroll = (props) =>
// {
//     return props.children;
// }
// export default Scroll;

class Scroll extends React.Component{
    render(){
        return(
            <div style={{overflowY:'scroll',border:'1px solid black',height: '500px'}}>
                {this.props.children}
            </div>
        )
    }
} 
export default Scroll;
