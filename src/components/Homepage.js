import React ,{Component} from 'react';
import SearchBox from './SearchBox';

class HomePage extends Component {
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
         <div className = '' >
         <br></br>
         <SearchBox SearchChange={this.change} Select={this.selectchange} ClickSearch={this.search} ClearSearch={this.clear} SelectValue={this.state.Select} SearchValue = {this.state.Searchfield}/>
         <br></br>
         <br></br>
         
         </div>
           );
         }
                             }

export default HomePage;
