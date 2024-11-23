const AlertMemo = () => (
  <>
    <div className="border-dimmed-20 mt-3 cursor-pointer rounded-12 border-2 bg-alert-memo-gradient px-2.5 py-3.75 opacity-70">
      <div className="flex gap-8">
        <span className="icon-md">notifications</span>
        <div>
          <p className="!text-icon-xs !leading-[1.4] title-lg-24-extrabold">
            평소에 궁금해하시던 `~`에 대한 정보가 도착했습니다!
          </p>
          <p className="!text-label-md body-sm-15-medium">자동 생성된 메모를 확인하고 저장하세요.</p>
        </div>
        <span className="inline-flex items-center justify-center icon-md">chevron_forward</span>
      </div>
    </div>
  </>
);

export default AlertMemo;
