import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchGoogleNewsAction } from '../../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getGoogleNews, getIsGoogleNewsLoaded } from '../../../store/google-news-data/selectors';
import LoadingScreen from "../loading-screen";
import { changeIsGoogleNewsLoaded } from "../../../store/action";


const GoogleNewsTable = () => {
   const googleNews = useSelector(getGoogleNews);
   const isGoogleNewsLoaded = useSelector(getIsGoogleNewsLoaded);

   const dispatch = useDispatch();
   const {country, page} = useParams();

   useEffect(() => {
      dispatch(fetchGoogleNewsAction(page, country));
    }, [country, page]);

   return isGoogleNewsLoaded ? (
      <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Google News</h4>
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
                    <th className="sorting" style={{ width: "278px" }}>
                      Title
                    </th>
                    <th className="sorting" style={{ width: "46px" }}>
                      Source
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {googleNews.map((item, idx) => (
                     <tr className="odd" role="row" key={idx}>
                        <td>{item.title}</td>
                        <td>{item.source}</td>
                     </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {page === '1' ? 1 : page > 1 ? `${page - 1}1` : ''} to {`${page}0`}
                </div>
                <div className="dataTables_paginate paging_simple_numbers" id="example5_paginate">
					        <Link className="paginate_button previous disabled" to={`/${country}/google-news/${page !== '1' ? Number(page) - 1 : page}`} onClick={() => page !== '1' ? dispatch(changeIsGoogleNewsLoaded(false)) : ''}>
						        Previous
					        </Link>
					        <span>
							      <Link to={`/${country}/google-news/${page}`} className={`paginate_button  current`}>
								      {page}
							      </Link>
					        </span>
					        <Link className="paginate_button next" to={`/${country}/google-news/${Number(page) + 1}`} onClick={() => dispatch(changeIsGoogleNewsLoaded(false))}>
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

export default GoogleNewsTable;
