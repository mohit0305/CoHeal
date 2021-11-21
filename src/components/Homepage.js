import React ,{Component} from 'react';
import Banner from './Banner';
import SearchBox from './SearchBox';
import SearchList from './SearchList';


class HomePage extends Component {
  constructor(){
    super()
    this.state ={
      listLength: 0,
      list: []
    }
  }

  loadList= (list)=>{
    this.setState({
      listLength: list.length(),
      list: list
    })
    console.log(this.state);
  }

  render(){
    return (
          <div>
            <Banner/>
            <SearchBox loadList={this.loadList}/>
            <SearchList listLength={this.state.listLength} list={this.state.list}/>
          </div>
    );
  }
}


export default HomePage;
