import userEvent from '@testing-library/user-event';

import { render, screen } from '@/utils/testUtils';

import Button, { ButtonProps } from './Button';

const setup = (props?: Partial<ButtonProps<'button'>>) => {
  const user = userEvent.setup();
  const onClick = jest.fn();
  const utils = render(
    <Button onClick={onClick} {...props}>
      {props?.children}
    </Button>
  );
  const button = screen.getByRole('button');

  return { user, button, onClick, ...utils };
};

describe('<Button />', () => {
  it('텍스트와 함께 버튼을 렌더링해야 한다.', () => {
    // given
    const { button } = setup({ children: '버튼' });

    // when
    // then
    expect(button).toHaveTextContent('버튼');
  });

  it('버튼을 클릭하면 onClick 함수가 호출되어야 한다.', async () => {
    // given
    const { user, button, onClick } = setup({ children: '버튼' });

    // when
    await user.click(button);

    // then
    expect(onClick).toHaveBeenCalled();
  });
});
