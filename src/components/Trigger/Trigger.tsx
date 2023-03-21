import * as S from './Trigger.styles';

interface TriggerProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Trigger = ({ children, onClick }: TriggerProps) => {
  return (
    <S.Container type="button" onClick={onClick}>
      <S.Outer>
        <S.InnerHeight>
          <S.Inner>{children}</S.Inner>
        </S.InnerHeight>
      </S.Outer>
    </S.Container>
  );
};

export default Trigger;
