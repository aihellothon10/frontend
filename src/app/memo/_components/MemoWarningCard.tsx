const MemoWarningCard = ({ children }: MemoWarningCardProps) => (
  <div className="flex gap-8 rounded-14 bg-grayscale-20 p-4">
    <span className="inline-flex items-center text-red-50 icon-sm">warning</span>
    <p className="text-grayscale-60 body-sm-15-regular">{children}</p>
  </div>
);

interface MemoWarningCardProps {
  children: React.ReactNode;
}

export default MemoWarningCard;
