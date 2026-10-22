import Hero from "@/component/Hero";
import LibrarySection from "@/component/LibrarySection";
import { getAllworkout } from "@/utils/api";


const Home = async () => {
  const workouts = await getAllworkout();
  // const workouts = data.data;
  return (
    <div>
   <Hero />
   <LibrarySection workouts={workouts}/>

    </div>
  );
};

export default Home;
