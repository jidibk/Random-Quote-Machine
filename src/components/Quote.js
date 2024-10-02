import React, { Component } from 'react'
import './quote.css';


class Quote extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: '',
         author: ''
      };
      this.newQuote();
      this.newQuote = this.newQuote.bind(this);
    }
    
    componentDidMount() {
        this.newQuote();
    }
    
    newQuote(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      this.setState({
        text: data.content,
        author: data.author
      });
    })
    .catch(error => console.error("Error fetching the quote:", error));
    }
    
    render() {
        
        return (
        <div id='mainClass' className='wrapper'>
            
            <div id='quote-box' className='quote-box'>
                <div id='text' className='text'>
                    <h3>
                        <i class="fa fa-quote-left" ></i> {this.state.text} <i class="fa fa-quote-right" ></i>
                    </h3>
                </div>
                <div id='author'>
                    <p>-{this.state.author}</p>
                </div>
                
                <div className='buttons'>
                    <button id='new-quote' className='btn btn-primary float-right' onClick={this.newQuote}>New Quote</button>
                    <a id="tweet-quote"
                    title="Tweet this quote!"
                    target="_blank"
                    href='twitter.com/intent/tweet' ><button className='btn btn-primary float-left'><img src='' alt='X'></img></button></a>
                </div>
                
            </div>
            <div className='footer'>by #JIDIBK</div>
        </div>
        )
    }
}



export default Quote


