import './calculator.css'
import React, { useState } from 'react'

function Calculator() {
    const [value, setValue] = useState('')
  return (
    <div>
        <div id="display">
            <input type="text" value={value}/>
        </div>
        <div id='numbers'>
            <input id='zero' type="button" value="0" onClick={value }/>
            <input id='one' type="button" value="1" />
            <input id='two' type="button" value="2" />
            <input id='three' type="button" value="3" />
            <input id='four' type="button" value="4" />
            <input id='five' type="button" value="5" />
            <input id='six' type="button" value="6" />
            <input id='seven' type="button" value="7" />
            <input id='eight' type="button" value="8" />
            <input id='nine' type="button" value="9" />
    </div>
    </div>
  )
}

export default Calculator


// export class Calculator extends Component {

//     constructor(props) {
//       super(props)
//       this.state = {
//          input1: '',
//          input2: '',
//          answer: ''
//       };
//       this.clear();
//       this.clear = this.clear.bind(this);
//       this.value();
//       this.value = this.value.bind(this);
//     }

//     componentDidMount() {
//         this.clear();
//     }
//     componentDidMount() {
//         this.value();
//     }
    
//     value(){
//         this.setState({
//             input1: value
//         })
//     }
//     clear(){
//         this.setState({
//             input1: '',
//             input2: '',
//             answer: 0
//         });
//     }
//   render() {
//     return (
//       <div>
//         <div id="display">
//         <input type="text" value={value}/>
//         </div>
//         <div id='numbers'>
//             <input id='zero' type="button" value="0" onClick={this.value}/>
//             <input id='one' type="button" value="1" />
//             <input id='two' type="button" value="2" />
//             <input id='three' type="button" value="3" />
//             <input id='four' type="button" value="4" />
//             <input id='five' type="button" value="5" />
//             <input id='six' type="button" value="6" />
//             <input id='seven' type="button" value="7" />
//             <input id='eight' type="button" value="8" />
//             <input id='nine' type="button" value="9" />
//             {/* <div id="zero"><button>0</button></div>
//             <div id="one"><button>1</button></div>
//             <div id="two"><button>2</button></div>
//             <div id="three"><button>3</button></div>
//             <div id="four"><button>4</button></div>
//             <div id="five"><button>5</button></div>
//             <div id="six"><button>6</button></div>
//             <div id="seven"><button>7</button></div>
//             <div id="eight"><button>8</button></div>
//             <div id="nine"><button>9</button></div> */}
//         </div>
//         <div id="symbols">
//             <div id="equals"><button>=</button></div>
//             <div id="add"><button>+</button></div>
//             <div id="subtract"><button>-</button></div>
//             <div id="multiply"><button>*</button></div>
//             <div id="divide"><button>/</button></div>
//             <div id="decimal"><button>.</button></div>
//             <div id="clear"><button onClick={this.clear}>AC</button></div>
//         </div>

//       </div>
//     )
//   }
// }

// export default Calculator