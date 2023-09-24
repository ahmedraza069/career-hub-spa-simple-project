import { useEffect, useState } from "react";
import Job from "../job/job";




const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([])

    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    } ,[])


    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Featured jobs</h1>
        <div className="grid grid-cols-2 gap-4 my-8">
            {
                featuredJobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
            }
        </div>
        <div className={dataLength === featuredJobs.length ? 'hidden' : ''}>
        <div className="text-center mb-8">
        <button
            onClick={() => setDataLength(featuredJobs.length)}
            type="button" className="btn btn-primary">See All Jobs</button>
        </div>
        </div>
        </div>
    );
};

export default FeaturedJobs;