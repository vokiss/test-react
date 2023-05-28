import { Link } from 'react-router-dom';

type Props = {
  infoDataLength: {
    type: string;
    length: number;
  }[];
};

function Cards({ infoDataLength }: Props): JSX.Element {
  return (
    <div className="my-2 grid grid-cols-2">
      {infoDataLength.map((e, index) => (
        <div
          key={index}
          className="moreInfo m-2 rounded-lg p-6 border-2 border-gray-300"
        >
          <h5 className="text-left mb-2 text-xl font-bold leading-tight text-neutral-800 ">
            {e.length}
          </h5>
          <p className="text-left mb-4 text-base text-neutral-600 font-medium capitalize">
            {e.type}
          </p>
          <Link to={`/navigator?tab=${index}`}>
            <button className="float-right rounded bg-blue-600 px-6 pb-2 pt-2.5 text-s font-medium leading-normal text-white ">
              See all
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
