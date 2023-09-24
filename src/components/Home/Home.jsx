import Bannner from "../Banner/Bannner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="max-w-5xl mx-auto">
           <Bannner></Bannner>
           <CategoryList></CategoryList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;