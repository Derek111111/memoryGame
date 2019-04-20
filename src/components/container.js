import React from "react";
import navbar from "./navbar";

class container extends React.Component{

    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.state = {score:0, highScore:0};
    };

    handleIncrement = () =>{
        this.setState({score: this.state.score +1});
    };

    handleRoundEnd = () =>{
        if(this.state.score > this.state.highScore){
            this.setState({highScore: this.state.score});
        }
        this.setState({score:0});
    };

    render(){

        return(
            <navbar score={this.state.score}></navbar>
        );

    };

};

export default container;