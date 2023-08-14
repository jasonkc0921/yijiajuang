// import { useEffect, useState } from "react";
// import { Loading } from "./Loading";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Integration } from "./components/Integration"
// import { Designs } from "./designs"
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { About_us } from './pages/About_us';
import 'leaflet/dist/leaflet.css';

const url = 'https://course-api.com/react-tours-project';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        // path: '/home',
        index: true,
        element: <Landing/>,
      },
      {
        path: '/home',
        element: <Landing/>,
      },
      {
        path: '/about',
        element: <About_us/>,
      },
    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />
  // const [isLoading, setIsLoading] = useState(true)
  // const [tours, setTours] = useState([])

  // const removeTour = (id) => {
  //   const newTours = tours.filter((tour) => tour.id !== id);
  //   setTours(newTours);
  // }

  // const fetchTours = async () => {
  //   setIsLoading(true)
  //   try {
  //     const response = await fetch(url);
  //     const tours = await response.json()
  //     setTours(tours);
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setIsLoading(false)
  // }

  // useEffect(()=> {
  //   fetchTours();
  // },[])

  // if (isLoading) {
  //   return (
  //     <main>
  //       <Loading />
  //     </main>
  //   )
  // }

  // if (tours.length === 0) {
  // return (
  //   <main>
  //     <div className='title'>
  //       <h2>no tours left</h2>
  //       <button type='button' className="btn" onClick={() => fetchTours()}>
  //         refresh
  //       </button>

  //     </div>
  //   </main>
  // )
  // }

  // return <main>
  // {/* <Woods />  */}
  // <Navbar />
  // <Hero />
  // <Woods1 />
  // <Integration />
  // <IrregularGrid />

  // </main>;
};
export default App;
