import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id,logo,company_name, job_title,remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure className="mt-8"><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
          </h2>
          <p className="text-2xl font-semibold my-2">{company_name}</p>
          <div className="card-actions justify-start">
            <div className="badge p-4 text-lg font-medium badge-outline">{remote_or_onsite}</div> 
            <div className="badge badge-outline text-lg font-medium p-4">{job_type}</div>
          </div>
        <div className="flex mt-2">
        <p className="text-base font-medium flex items-center gap-1"><CiLocationOn className="text-2xl font-bold"></CiLocationOn>{location}</p>
          <p className="text-base font-medium flex items-center gap-1"><CiDollar className="text-2xl font-bold"></CiDollar>{salary}</p>
        </div>
        </div>
        <div className="text-center mb-6">
      <Link to={`/job/${id}`}>
      <button className="btn btn-primary" type="button">View Details</button>
      </Link>

        </div>
      </div>
    );
};

export default Job;