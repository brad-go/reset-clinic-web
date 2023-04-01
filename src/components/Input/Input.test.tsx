import userEvent from '@testing-library/user-event';

import { render, screen } from '@/utils/testUtils';

import Input, { InputProps } from './Input';

const setup = (props: Partial<InputProps> = { value: '' }) => {
  const user = userEvent.setup();

  const onChange = jest.fn();
  const onFocus = jest.fn();
  const onBlur = jest.fn();

  const utils = render(
    <Input
      value={props.value || ''}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  );

  const input = screen.getByRole('textbox');

  return { user, onChange, onFocus, onBlur, input, ...utils };
};

describe('<Input />', () => {
  it('Input을 렌더링해야 한다.', () => {
    // given
    const { input } = setup();

    // when
    // then
    expect(input).toBeInTheDocument();
  });

  it('value값과 함께 렌더링할 수 있어야 한다.', () => {
    // given
    const props = {
      value: 'value',
    };
    const { input } = setup(props);

    // when
    // then
    expect(input).toHaveValue('value');
  });

  it('placeholder를 지정할 수 있어야 한다.', () => {
    // given
    const props = {
      value: '',
      placeholder: 'placeholder',
    };
    const { input } = setup(props);

    // when
    // then
    expect(input).toHaveProperty('placeholder', 'placeholder');
  });

  it('Input에 입력 이벤트가 발생하면 onChange가 호출되어야 한다.', async () => {
    // given
    const { user, input, onChange } = setup();

    // when
    await user.type(input, 'hello');

    // then
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('Input이 포커스되면 onFocus가 호출되어야 한다.', async () => {
    // given
    const { user, input, onFocus } = setup();

    // when
    await user.click(input);

    // then
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  it('Input에서 포커스가 사라지면 onBlur가 호출되어야 한다.', async () => {
    // given
    const { user, input, onBlur } = setup();

    // when
    await user.click(input);
    await user.tab();

    // then
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
