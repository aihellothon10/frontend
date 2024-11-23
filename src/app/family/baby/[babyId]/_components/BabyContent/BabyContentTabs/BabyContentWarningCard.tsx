const BabyContentWarningCard = ({ title, children }: BabyContentWarningCardProps) => (
  <div className="flex items-start gap-8 rounded-14 bg-grayscale-20 p-4">
    <span className="text-red-50 icon-fill icon-sm">warning</span>
    <div className="flex flex-col gap-6">
      <h3 className="text-red-50 body-md-17-medium">{title}</h3>
      <p className="text-grayscale-60 body-sm-15-regular">{children}</p>
    </div>
  </div>
);

interface BabyContentWarningCardProps {
  title: string;
  children: React.ReactNode;
}

export default BabyContentWarningCard;
