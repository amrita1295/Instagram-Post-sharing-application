import React,{Component} from 'react';
//import Circle from './src/components/screens/circle-cropped.png'
import './File.css';
class File extends Component{
    render(){
        return(
            <div className="File">
                <header className="File-header">
                    <img src ={require('./components/screens/images/circle.png').default} className="File-logo" alt="logo"/>

                </header>
            </div>
        )
        
    }
}
export  default File;