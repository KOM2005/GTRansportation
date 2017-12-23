import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

var products = [{
    id: 1,
    name: "Product1",
    price: 120
}, {
    id: 2,
    name: "Product2",
    price: 80
}];

class Table extends React.Component {
    render() {
        return (
          <BootstrapTable data={ products }>
              <TableHeaderColumn width='150' dataField='id' isKey>ProductID</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='price'>ProductPrice</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField='name'>ProductName</TableHeaderColumn>
          </BootstrapTable>
        );
      }
  }

  export default Table;