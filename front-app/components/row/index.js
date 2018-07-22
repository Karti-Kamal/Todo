import React from 'react';
import PropTypes from 'prop-types';

class Row extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        const data =  Object.keys(this.props.rowData).map((item , i) =>
            <td key={i}> {this.props.rowData[item]}</td>

        );

        return(
            <tr>
                {data}
            </tr>
        )
    }
}


Row.propTypes = {
    rowData: PropTypes.any,
};
export default Row;