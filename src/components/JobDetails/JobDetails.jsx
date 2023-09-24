import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();

    const findJobs = jobs.find((job) => job.id == id);

    console.log(findJobs);
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    );
};

export default JobDetails;