import { Button } from '@/components/Button';

import * as S from './Select.styles';

interface Option {
  id: string;
  content: string;
}

interface SelectProps {
  id?: string;
  options: Option[];
  selected: string | null;
  onClick: React.MouseEventHandler;
}

const Select = ({ id, options, selected, onClick }: SelectProps) => {
  return (
    <S.Select>
      {options.map(({ id: optionId, content }) => (
        <S.Option key={optionId}>
          <Button
            id={id}
            name={optionId}
            clicked={selected === optionId}
            fullWidth
            onClick={onClick}
          >
            {content}
          </Button>
        </S.Option>
      ))}
    </S.Select>
  );
};

export default Select;
