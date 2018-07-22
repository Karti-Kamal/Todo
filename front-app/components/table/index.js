import React from 'react';
import PropTypes from 'prop-types';
import Row from "../row";


class Table extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const thead = this.props.theadData.map((item , i) =>
            <th key={i}> {item}</th>
        );
        const tbody = this.props.tbodyData.map((item , i) =>
         <Row key={i} rowData={[item.id, item.title, item.startsAt]}/>


        );
      return(
          <table className="table datatable-sorting">
              <thead>
              <tr>
                  {thead}
              </tr>
              </thead>
              <tbody>
              {tbody}
              </tbody>
          </table>
      )
    }
}

Table.propTypes = {
    theadData: PropTypes.array,
    tbodyData: PropTypes.array,
};
export default Table;