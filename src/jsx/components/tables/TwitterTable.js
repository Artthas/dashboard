import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchTwitterAction } from '../../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getTwitter, getIsTwitterLoaded } from '../../../store/twitter-data/selectors';
import LoadingScreen from "../loading-screen";
import { changeIsTwitterLoaded } from "../../../store/action";


const TwitterTable = () => {
   const twitter = useSelector(getTwitter);
   const isTwitterLoaded = useSelector(getIsTwitterLoaded);

   const dispatch = useDispatch();
   const {country, page} = useParams();

   useEffect(() => {
      dispatch(fetchTwitterAction(page, country));
    }, [country, page]);

   return isTwitterLoaded ? (
      <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Twitter</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="job_data" className="dataTables_wrapper ">
              <table
                className="display w-100 dataTable "
                id="example5"
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting" style={{ width: "46px" }}>
                      Number
                    </th>
                    <th className="sorting" style={{ width: "120px" }}>
                      Title
                    </th>
                    <th className="sorting" style={{ width: "278px" }}>
                      Twits
                    </th>
                    <th className="sorting" style={{ width: "70px" }}>
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {twitter.map((item, idx) => (
                     <tr className="odd" role="row" key={idx}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.tweets}</td>
                        <td>{new Date(item.date).toString()}</td>
                     </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {page === '1' ? 1 : page > 1 ? `${page - 1}1` : ''} to {`${page}0`}
                </div>
                <div className="dataTables_paginate paging_simple_numbers" id="example5_paginate">
					      <Link className="paginate_button previous disabled" to={`/${country}/twitter/${page !== '1' ? Number(page) - 1 : page}`} onClick={() => page !== '1' ? dispatch(changeIsTwitterLoaded(false)) : ''}>
						      Previous
					      </Link>
					      <span>
							   <Link to={`/${country}/twitter/${page}`} className={`paginate_button  current`}>
								   {page}
							   </Link>
					      </span>
					      <Link className="paginate_button next" to={`/${country}/twitter/${Number(page) + 1}`} onClick={() => dispatch(changeIsTwitterLoaded(false))}>
						      Next
					      </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   ) : <LoadingScreen />;
};

export default TwitterTable;
