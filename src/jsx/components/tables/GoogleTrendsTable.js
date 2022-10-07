import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Table } from "react-bootstrap";

import data from "./tableData.js";

const GoogleTrendsTable = () => {
   return (
      <Fragment>
         {/*<PageTitle activeMenu="Datatable" motherMenu="Table" />*/}
         <div className="row">
         <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Google Trends</h4>
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <table
                        id="example"
                        className="display w-100 dataTable"
                        role="grid"
                        aria-describedby="example_info"
                     >
                        <thead>
                           {data.googleTrendsTable.columns.map((d, i) => (
                              <th key={i}>{d}</th>
                           ))}
                        </thead>
                        <tbody>
                           {data.googleTrendsTable.data.map((d, i) => (
                              <tr key={i}>
                                 {d.map((da, i) => (
                                    <td key={i}>{da}</td>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                        <tfoot>
                           <tr role="row">
                              {data.googleTrendsTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </tfoot>
                     </table>
                  </div>
               </Table>
            </div>
         </div>
      </div>
         </div>
      </Fragment>
   );
};

export default GoogleTrendsTable;
