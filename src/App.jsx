import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './pages/Home';
import { Landing } from './pages/Landing';
import { About_us } from './pages/About_us';
import { Privacy_us } from './pages/Privacy_us';
import { Zitanwood } from './pages/Take_care_of_zitan_furniture';
import { Blog } from './pages/Blog';
import 'leaflet/dist/leaflet.css';


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
      {
        path: '/privacy',
        element: <Privacy_us/>,
      },
      {
        path: '/blog',
        element: <Blog/>,
        // children: [
        //   {
        //     // path: '/home',
        //     index: true,
        //     element: <Blog/>,
        //   },
        //   {
        //     path: '/blog/take_care_of_zitan_furniture',
        //     element: <Zitanwood/>,
        //   },
        // ]
      },
      {
        path: '/blog/take_care_of_zitan_furniture',
        element: <Zitanwood/>,
      },
    ]
  },

]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* WhatsApp Chat Button (appears on all pages) */}
      <WhatsAppChat 
        phoneNumber="1234567890" // Replace with your actual WhatsApp number
        companyName="Your Company" // Replace with your company name
      />
    </>
  );
  // return (<RouterProvider router={router} />
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
