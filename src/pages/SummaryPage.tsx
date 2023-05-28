import { infoDataLength } from '../const';
import Cards from '../components/Cards';
import Header from '../components/Header';
import WelcomeCard from '../components/WelcomeCard';

function SummaryPage(): JSX.Element {
  return (
    <>
      <Header />
      <div className="mx-12 w-auto min-w-fit">
        <WelcomeCard />
        <Cards infoDataLength={infoDataLength} />
      </div>
    </>
  );
}

export default SummaryPage;
