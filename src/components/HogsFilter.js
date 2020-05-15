import React, { Component } from 'react'

export default class HogsFilter extends Component {

    constructor() {
        super()
        this.state = {
            greased: null
        }
    }


    handleChangeType = (event) => {
        // console.log(event.target.value)
        this.props.filterBy(event.target.value)
    }



    render() {
        return (
            <div className="field">
                <select name="type" id="type" onChange={this.handleChangeType}>
                    < option value="Grease">Filter Grease</option>          
                    <option value="Name">Filter name</option>         
                    <option value="Weight">Filter Weight</option> 
                    <option value="None">Filter None</option>      
                </select>    
            </div>
    
        ) 
    }  
}