import { Chip } from '@/app/_components/common';

const MemoChip = ({ item, filter, onChange }: MemoChipProps) => (
  <>
    <Chip checked={filter.has(item)} onChange={() => onChange(item)}>
      {item}
    </Chip>
  </>
);

interface MemoChipProps {
  filter: Set<string>;
  item: string;
  onChange: (item: string) => void;
}

export default MemoChip;
