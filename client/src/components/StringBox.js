import React, { Component } from 'react';

class StringBox extends Component {

    state = {
        string: ''
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.string)
    }

    render() {
        return (

            <div className="row">
                <form
                    className="col s6"
                    name='StringBox'
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"name='string'
                                value={this.state.value}
                                onChange={this.handleInputChange}>
                            </textarea>    
                            <label for="textarea1">String Input</label>
                        </div>
                    </div>
                </form>
                <button 
                    class="btn waves-effect waves-light" 
                    type="submit" 
                    name="action" 
                    onClick={this.handleSubmit}>Submit
                    <i class="material-icons right">send</i>
                </button>
            </div>

        )

    }

};

export default StringBox;