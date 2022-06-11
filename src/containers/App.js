import React from "react";
import 'tachyons';
import ArrofCard from '../components/cardarr';
import { rob } from '../robots';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'
class App extends React.Component{
    constructor()
    {
        super()
        this.state={
            rob:rob,
            searchfield:''
        }
    }
    
    onSearchChange=(event)=>{
        console.log(event.target.value);    //gives us the value of the search term
        this.setState({ searchfield:event.target.value })
        
    }
    render(){
        const filteredrob=this.state.rob.filter(rob =>{
            return rob.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div>
                <div className="tc">
                    <h1 className="f1">ROBO-FRIENDS</h1>
                    <Searchbox searchchange={this.onSearchChange}/>     {/* The onSearchChange is passed as a prop here */ }
                </div>
                <Scroll>
                    <ArrofCard rob={ filteredrob }/>
                </Scroll>
            </div>
        );
    }
}
export default App;