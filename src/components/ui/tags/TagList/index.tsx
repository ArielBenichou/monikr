import Tag, { TagProps } from "../Tag";

export default function TagList({ items, onTagClick, ...tagProps }: Props) {
  return (
    <div className="flexbox flex-row flex-wrap gap-1">
      {items.map(it => <Tag {...tagProps} onClick={() => onTagClick(it)} key={it}>{it}</Tag>)}
    </div>
  );
}

interface Props extends TagProps {
  items: string[];
  onTagClick: (v: string) => void;
}
