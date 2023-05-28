import { userTypesA } from '../const';

type Props = {
  userTypesA: typeof userTypesA;
  params: string;
  onClickHandler: (index: number) => void;
};

function TypeTabs({ userTypesA, params, onClickHandler }: Props): JSX.Element {
  return (
    <ul className="flex pt-px">
      {userTypesA.map((element, index) => (
        <li key={index} onClick={() => onClickHandler(index)}>
          <div
            className={`w-28 capitalize text-center border rounded-t-xl border-black border-b-0 py-1 cursor-pointer
                 ${params === index.toString() ? 'bg-gray-200' : ''}`}
          >
            {element}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TypeTabs;
