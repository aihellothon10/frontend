const MemoSection = ({ title, help, children }: MemoSectionProps) => (
  <div className="flex flex-col gap-8">
    <div className="flex gap-6">
      <div className="text-grayscale-60 label-md-14-regular">{title}</div>
      {help && <span className="text-grayscale-50 icon-xs">help</span>}
    </div>
    {children}
  </div>
);

interface MemoSectionProps {
  title: string;
  help?: boolean;
  children: React.ReactNode;
}

export default MemoSection;
