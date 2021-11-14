import React from 'react';
import ReactDOM from 'react-dom';

function Employee(props) {
    return <h2>Merhaba , {props.name}</h2>
}

class Saat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            gecikme : props.gecikme
        };
    }
    componentDidMount (){
        this.timerID = setInterval(() => this.tick(),this.state.gecikme)
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date:new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>Saat kaç?</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
         );
    }
}

function App() {
    return (
        <div>
            <Saat gecikme={1000}/>
            <Saat gecikme ={1200}/>
        </div>
    )
}
// function Advanced(){
//     return (
//         <div>
//             <Employee name="xkraltr"/>
//             <Employee name="Edilee"/>
//             <Employee name="Magic"/>
//         </div>
//     );
// }
// export default Advanced;

ReactDOM.render(
    <App />,
    document.getElementById('root')
)




