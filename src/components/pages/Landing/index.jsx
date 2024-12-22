import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    return humanrightsfirst.org
  };

  return (
    <>
      <section className="container xm-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 mt-28 px-28">
        <div className="flex flex-col items-center">
          <img className="w-96 h-40 mb-4" src={barGraph} alt="Bar Graph" />
          <p className="text-center text-black-700 text-lg">Search Grant Rates By Office</p>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-60 h-40 mb-5" src={pieChart} alt="Pie Chart" />
          <p className="text-center text-black-700 text-lg">Search Grant Rates By Nationality</p>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-96 h-40 mb-4" src={lineGraph} alt="Line Graph" />
          <p className="text-center text-black-700 text-lg">Search Grant Rates Over Time</p>
        </div>
      </section>

      <div className="text-center mb-8">
        <button
          onClick={handleReadMore}
          className="bg-gray-500 text-white text-sm px-4 py-1 rounded mr-2  hover:bg-gray-900"
          >
            View the Data
            </button>
            <button
              onClick={() => downloadCSV()}
              className="bg-gray-500 text-white text-sm px-4 py-1 rounded hover:bg-gray-900"
            >
              Download the Data
            </button>
      </div>

      <section className="my-6 flex flex-col md:flex-row items-center justify-center gap-6 px-4">
        <img
          src={paperStack}
          alt="Stack of Papers"
          className="w-2/5 h-72 rounded-lg shadow-lg mr-28"
        />
        <p className="text-black text-base w-2/5 mr-28">Human Rights First created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
      </section>

      <div className="mt-44 text-4xl">Systemic Disparity Insights</div>

      <section className="container xm-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-10 mt-28 px-28">
          <div className="flex flex-col items-center">
            <p className="">36%</p>
            <p>By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.</p>
          </div>

          <div className="flex flex-col items-center"> 
            <p>5%</p>
            <p>The New York asylum office grant dropped 5 percent in fiscal year 2020.</p>
          </div>

          <div className="flex flex-col items-center"> 
            <p>6x Lower</p>
            <p>Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.</p>
          </div>
      </section>
    </>  
  );
};
