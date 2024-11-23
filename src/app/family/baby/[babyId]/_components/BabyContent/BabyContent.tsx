import BabyContentHeader from './BabyContentHeader';
import BabyContentTabs from './BabyContentTabs/BabyContentTabs';

const BabyContent = () => (
  <div className="flex flex-col gap-16">
    <BabyContentHeader />
    <BabyContentTabs />
  </div>
);

export default BabyContent;
