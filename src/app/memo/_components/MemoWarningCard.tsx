const MemoWarningCard = () => (
  <div className="flex gap-8 rounded-14 bg-grayscale-20 p-4">
    <span className="inline-flex items-center text-red-50 icon-sm">warning</span>
    <p className="text-grayscale-60 body-sm-15-regular">
      분석 결과, 해당 메모에는 <span className="text-red-50">잘못된 정보</span>와{' '}
      <span className="text-red-50">유해한 정보</span>가 포함되어 있을 수 있습니다.
    </p>
  </div>
);

export default MemoWarningCard;
