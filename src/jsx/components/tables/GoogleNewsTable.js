import React, { useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { fetchAuGoogleNewsAction } from '../../../store/api-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getAuGoogleNews } from '../../../store/au-data/selectors';


const GoogleNewsTable = () => {
   const auGoogleNews = useSelector(getAuGoogleNews);

   const dispatch = useDispatch();
   const {page} = useParams();

   useEffect(() => {
      dispatch(fetchAuGoogleNewsAction(page));
    }, [page]);

   console.log(page);

   return (
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
                  {auGoogleNews.map((item, idx) => (
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
					   <Link className="paginate_button previous disabled" to={`/google_news_Australia/${page !== '1' ? Number(page) - 1 : page}`}>
						   Previous
					   </Link>
					   <span>
							<Link to={`/google_news_Australia/${page}`} className={`paginate_button  current`}>
								{page}
							</Link>
					   </span>
					   <Link className="paginate_button next" to={`/google_news_Australia/${Number(page) + 1}`}>
						   Next
					   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
};

export default GoogleNewsTable;
