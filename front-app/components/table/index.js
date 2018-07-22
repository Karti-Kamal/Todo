import React from 'react';



class Table extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
      return(
          <table className="table datatable-sorting">
              <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Job Title</th>
                  <th>DOB</th>
                  <th>Status</th>
                  <th className="text-center">Actions</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>Marth</td>
                  <td><a href="#">Enright</a></td>
                  <td>Traffic Court Referee</td>
                  <td>22 Jun 1972</td>
                  <td><span className="label label-success">Active</span></td>
                  <td className="text-center">
                      <ul className="icons-list">
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-menu9"></i>
                              </a>

                              <ul className="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><i className="icon-file-pdf"></i> Export to .pdf</a></li>
                                  <li><a href="#"><i className="icon-file-excel"></i> Export to .csv</a></li>
                                  <li><a href="#"><i className="icon-file-word"></i> Export to .doc</a></li>
                              </ul>
                          </li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Jackelyn</td>
                  <td>Weible</td>
                  <td><a href="#">Airline Transport Pilot</a></td>
                  <td>3 Oct 1981</td>
                  <td><span className="label label-default">Inactive</span></td>
                  <td className="text-center">
                      <ul className="icons-list">
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-menu9"></i>
                              </a>

                              <ul className="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><i className="icon-file-pdf"></i> Export to .pdf</a></li>
                                  <li><a href="#"><i className="icon-file-excel"></i> Export to .csv</a></li>
                                  <li><a href="#"><i className="icon-file-word"></i> Export to .doc</a></li>
                              </ul>
                          </li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Aura</td>
                  <td>Hard</td>
                  <td>Business Services Sales Representative</td>
                  <td>19 Apr 1969</td>
                  <td><span className="label label-danger">Suspended</span></td>
                  <td className="text-center">
                      <ul className="icons-list">
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-menu9"></i>
                              </a>

                              <ul className="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><i className="icon-file-pdf"></i> Export to .pdf</a></li>
                                  <li><a href="#"><i className="icon-file-excel"></i> Export to .csv</a></li>
                                  <li><a href="#"><i className="icon-file-word"></i> Export to .doc</a></li>
                              </ul>
                          </li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>Nathalie</td>
                  <td><a href="#">Pretty</a></td>
                  <td>Drywall Stripper</td>
                  <td>13 Dec 1977</td>
                  <td><span className="label label-info">Pending</span></td>
                  <td className="text-center">
                      <ul className="icons-list">
                          <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-menu9"></i>
                              </a>

                              <ul className="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><i className="icon-file-pdf"></i> Export to .pdf</a></li>
                                  <li><a href="#"><i className="icon-file-excel"></i> Export to .csv</a></li>
                                  <li><a href="#"><i className="icon-file-word"></i> Export to .doc</a></li>
                              </ul>
                          </li>
                      </ul>
                  </td>
              </tr>
              </tbody>
          </table>
      )
    }
}

export default Table;