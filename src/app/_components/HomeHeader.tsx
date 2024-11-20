import Header from './common/Header';

const HomeHeader = () => (
  <Header>
    <div className="gap-4 flex items-center">
      <span className="icon-fill icon-md">description</span>
      <span className="title-md-22-extrabold">홈페이지</span>
    </div>
    <span className="icon-fill icon-lg">settings</span>
  </Header>
);

export default HomeHeader;
