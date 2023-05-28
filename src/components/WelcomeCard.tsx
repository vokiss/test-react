import { Link } from 'react-router-dom';
import { usersData } from '../const';

function WelcomeCard(): JSX.Element {
  return (
    <div className="main_card">
      <div className="border-2 border-gray-300 border-b-0 bg-gray-100  h-12" />
      <div className="p-6 border-2 border-gray-300 ">
        <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
          Welcome
        </h5>
        <p className="mb-4 text-base text-neutral-600 font-medium">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <Link to="/navigator?tab=0">
          <button className="rounded bg-blue-600 px-6 pb-2 pt-2.5 text-s font-medium leading-normal text-white ">
            See transactions
          </button>
        </Link>
      </div>
      <div className="font-medium h-12 py-2 bg-gray-100 border-2 border-t-0 border-gray-300 ">
        You have {usersData.length} transactions
      </div>
    </div>
  );
}

export default WelcomeCard;
