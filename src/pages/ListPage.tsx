/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import UsersTable from '../components/UsersTable';
import { DEFAULT_SEARCH_PARAMS, sortData, userTypesA } from '../const';
import Header from '../components/Header';
import TypeTabs from '../components/TypeTabs';

function ListPage(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams(
    DEFAULT_SEARCH_PARAMS
  );
  const params = Object.fromEntries([...searchParams]);

  const onClickHandler = (index: number) => {
    setSearchParams({ tab: `${index}` });
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({ tab: `${currentParams.tab}` });
    window.scrollTo(0, 0);
  }, [searchParams, setSearchParams]);

  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto w-min border border-black rounded-xl">
        <TypeTabs
          onClickHandler={onClickHandler}
          params={params.tab}
          userTypesA={userTypesA}
        />
        <UsersTable tabsData={sortData(searchParams.get('tab'))} />
      </div>
    </>
  );
}

export default ListPage;
