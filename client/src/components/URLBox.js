import React, { Component } from 'react';

class URLBox extends Component {

    state = {
        URL: '',
        method: 'POST'
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.URL);
        console.log(this.state.method);
    }

    render() {

        return (

            <div className="row">

                <div className="input-field col s1">
                    <select className='browser-default'
                        name='method'
                        value={this.state.value}
                        onChange={this.handleInputChange} >
                        <option value="" disabled>Choose your option</option>
                        <option value="POST" selected>POST</option>
                        <option value="GET">GET</option>
                    </select>
                </div>
                <form
                    className="col s6"
                    name='URLBox'
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea 
                                id="textarea1" 
                                className="materialize-textarea"
                                name='URL'
                                value={this.state.value}
                                onChange={this.handleInputChange}></textarea>
                            <label for="textarea1">URL Input</label>
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

export default URLBox;