import React ,{Component} from 'react';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
class App extends Component {
  constructor(){
    super()
    this.state ={
      Searchfield : '',
      Select : 'Vaccine'
    }
  }
 
    change=(event)=>{
    this.setState({Searchfield:event.target.value});
    }
    selectchange=(event)=>{
      this.setState({Select:event.target.value});
      }
    clear=(event)=>{
      this.setState({Searchfield:""});
      }
      search=(event) =>{
        console.log(this.state.Searchfield)
      }
  render(){
        
         return (
         <div className = 'tc' >
         <h1 className = 'f1'>Search Vaccine </h1>
         <br></br>
         <SearchBox SearchChange={this.change} Select={this.selectchange} ClickSearch={this.search} ClearSearch={this.clear} SelectValue={this.state.Select} SearchValue = {this.state.Searchfield}/>
         <br></br>
         <br></br>
         <Scroll>
         
           </Scroll>
         
         </div>
           );
         }
                             }

export default App;
