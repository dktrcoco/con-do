import React, {Component} from "react";
import API from "../../utils/API";
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';


class UserSearch extends Component {
  //the signup state keeps track of all of the input fields in the signup form
  constructor(props){
    // console.log(props)
    super(props)
    this.state = {
      users: [],
      allCommittees: [] 
    }
  }
    
    //get all the options when the component first mounts
    componentDidMount = ()=>{
        API.getCommittees().then(res=>{
            this.setState({allCommittees: res.data})
        })
        API.getMyDelegates()
            .then(res=>{
                this.setState({
                    users: res.data
                })
            })
    } 
    render(){
        let allCommittees = this.state.allCommittees
  
        const columns = [
                    {
                        Header: 'Name',
                        accessor: 'name',
                        filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["name"] }),
                            filterAll: true,         
                            
                    },{
                        Header: 'Email',
                        accessor: 'email',
                        filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["email"] }),
                            filterAll: true
                    },{
                        Header: 'Committee',
                        id: 'committeeName',
                        accessor: user => {
                            // console.log(user)
                            if(user.committeeId){
                                return allCommittees[user.committeeId -1].name
                            }
                            else{
                                return null
                            }
                        }, filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["committeeName"] }),
                            filterAll: true,
                    },{
                        Header: 'Country',
                        accessor: 'country',
                        filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["country"] }),
                            filterAll: true
                    },
                    // {
                    //     Header: 'Delete',
                    //     id: 'deleteuser',
                    //     accessor: user => <button onClick={(e) => this.removeUser(user.id)}>X</button>
                  
                    // }      
        ]
        return(
          
        <div>
            {/* results will be displayed here */}
                {/* {this.state.users.map((user)=> <UserRecord key={user.email} name={user.name}/>)} */}
                <ReactTable data={this.state.users} columns={columns} filterable
                    defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value} minRows="10" defaultPageSize="10"/>
            
        </div>
     
        )
    }
   
}
export default UserSearch;