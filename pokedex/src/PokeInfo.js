import React, { Component } from 'react';
import './App.css';

class PokeInfo extends Component {
    state={
        poke: null
    }
    // not good to hit api here as it only load once
    componentDidMount(){
        console.log("poke-info did mount");
    }

    componentDidUpdate(){
     console.log("component got updated")   
    }

    //we put the logic here because if we put it in didMount it only happens once, if we do it in didupdate will have an infinite loop because it will get the info and update it again (and so on). So componentWillReceiveProps is the best place to do this. 
    componentWillReceiveProps(){
        const {selected} = this.props;
        console.log('this.props.selected',': ', this.props.selected);
        
        if (selected){
            fetch(selected)
            .then(resp => resp.json())
            .then(json =>{
                console.log('json',': ', json);
                this.setState({poke: json})
            })
        }
    }

    render() {
    console.log('this.props',': ', this.props);
    const {poke} = this.state;
    if(poke){
        return (
          <div >
              <h2> Information </h2>
            
              <h3> {poke.id} : {poke.name}  </h3>
              <h4> Height: {poke.height}: Weight: {poke.weight}</h4>  
          </div>
        );
    }else{
        return <div> Loading... </div>
    }
    
  }
}

export default PokeInfo;
