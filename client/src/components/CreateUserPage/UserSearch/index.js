import React, {Component} from "react";
import API from "../../../utils/API";
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';


class UserSearch extends Component {
  //the signup state keeps track of all of the input fields in the signup form
  constructor(props){
    // console.log(props)
    super(props)
    this.state = {
      users: [],
      allSchools: [],
      allCommittees: [] 
    }
  }
    
    //get all the options when the component first mounts
    componentDidMount = ()=>{
        API.getSchools().then(res =>{
            this.setState({allSchools: res.data})
        })
        API.getCommittees().then(res=>{
            this.setState({allCommittees: res.data})
        })
        API.getAllUsers()
            .then(res=>{
                let returnedUsers = res.data
                if (this.props.userType === "advisor"){
                    // console.log("filtering users")
                    returnedUsers = returnedUsers.filter(user => user.schoolId === this.props.schoolId)
                }
                returnedUsers = returnedUsers.filter(user => user.id != this.props.userId)
                this.setState({
                    users: returnedUsers
                })
            })
        } 
    removeUser = (userId)=>{
        API.removeUser(userId)
            .then(res=>{
                API.getAllUsers()
                    .then(res=>{
                        let returnedUsers = res.data
                        if (this.props.userType === "advisor"){
                            // console.log("filtering users")
                            returnedUsers = returnedUsers.filter(user => user.schoolId === this.props.schoolId)
                        }
                        returnedUsers = returnedUsers.filter(user => user.id != this.props.userId)
                        this.setState({
                            users: returnedUsers
                        })
                    })
                })
    }
    render(){
        let allSchools = this.state.allSchools
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
                        Header: 'School',
                        id: 'schoolName',
                        accessor: user => {
                            // console.log(user)
                            if(user.schoolId){
                                return allSchools[user.schoolId -1].name
                            }
                            else{
                                return null
                            }
                        }, filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["schoolName"] }),
                            filterAll: true,
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
                    },{
                        Header: 'Role',
                        accessor: 'userType',
                        filterMethod: (filter, rows) =>
                        matchSorter(rows, filter.value, { keys: ["userType"] }),
                            filterAll: true
                    },
                    {
                        Header: 'Delete',
                        id: 'deleteuser',
                        accessor: user => <button onClick={(e) => this.removeUser(user.id)}>X</button>
                  
                    }      
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