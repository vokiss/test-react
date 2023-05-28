import { USERSDATA } from '../const';

type Props = {
  tabsData: USERSDATA;
};

function UsersTable({ tabsData }: Props): JSX.Element {
  return (
    <div className="w-full">
      <table className="mt-5 w-full">
        <thead>
          <tr className="border-b-2">
            <th>Name</th>
            <th>Acount</th>
          </tr>
        </thead>
        <tbody>
          {tabsData.map((element, index) => (
            <tr key={index} className="border-b-2 border">
              <td>{`${element.name.first} ${element.name.last}`}</td>
              <td>{element.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
