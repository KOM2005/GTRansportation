import React from 'react';
// import { Redirect } from 'react-router-dom';
// import {MenuItem,Nav,Navbar,NavItem} from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import HomePage from '../pages/HomePage';


class Load extends React.Component{

    handleChangeItem = e => {
        
        console.log('id:',e.target)
    }
    render() {
        // console.log('LOAD:',this.props.loads);
        return (
            // <div>
            // {this.props.loads.data.map( (load, key) => {
            //     return load.comment
            // })}
            // </div>
            <table className="table">
            <thead>
              <tr>
                {/* <th scope="row">#</th> */}
                <th scope="col">Pick up (date)</th>
                <th scope="col">Pick up (time)</th>
                <th scope="col">Load type</th>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Weight</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col">Dispatch</th>
                <th scope="col">Comment</th>
              </tr>
            </thead>
            <tbody>
                {this.props.loads.data.map( (load, key) => 
                    
                    <tr key={key} id={load._id} onClick={this.handleChangeItem}>
                        {/* <th scope="row">{key}</th> */}
                        <td>{load.datePickUp}</td>
                        <td>{load.timePickUp}</td>
                        <td>{load.loadType.typeName}</td>
                        <td>{load.origin}</td>
                        <td>{load.destination}</td>
                        <td>{load.weight}</td>
                        <td>{load.price}</td>
                        <td>{load.idStatus.statusName}</td>
                        <td>{load.idDispatch === null ? '' : load.idDispatch.contactPerson}</td>
                        <td>{load.comment}</td>
                    </tr>
                   
                )}
            </tbody>
          </table>
        )

    }
}

export default Load;
