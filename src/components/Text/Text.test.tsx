import { render, screen } from '@/utils/testUtils';
import { getRandomNumberWithRange } from '@/utils';

import Text, { TextProps, TextElement } from './Text';

const setup = (props?: TextProps) => {
  const utils = render(<Text {...props}>{props?.children}</Text>);
  const text = screen.getByText(new RegExp(`${props?.children}`));

  return { text, ...utils };
};

describe('<Text />', () => {
  it('Text를 렌더링할 수 있어야 한다.', () => {
    // given
    const props = {
      children: 'text',
    };
    const { text } = setup(props);

    // when
    // then
    expect(text).toBeInTheDocument();
  });

  it('텍스트를 가지고 렌더링할 수 있어야 한다.', () => {
    // given
    const props = {
      children: 'text',
    };
    const { text } = setup(props);

    // when
    // then
    expect(text).toHaveTextContent('text');
  });

  it('기본적으로 p 태그로 렌더링되어야 한다.', () => {
    // given
    const props = {
      children: 'text',
    };
    const { text } = setup(props);

    // when
    // then
    expect(text.tagName.toLowerCase()).toBe('p');
  });

  it('다른 텍스트를 입력할 수 있는 태그로도 렌더링할 수 있어야 한다.', () => {
    // given
    const tags: TextElement[] = [
      'p',
      'b',
      'i',
      'u',
      's',
      'em',
      'small',
      'strong',
      'del',
      'ins',
      'cite',
      'mark',
      'sub',
      'sup',
      'span',
    ];
    const tagIndex = getRandomNumberWithRange(0, tags.length);
    const tagName = tags[tagIndex];
    const props = {
      children: 'text',
      as: tagName,
    };
    const { text } = setup(props);

    // when
    // then
    expect(text.tagName.toLowerCase()).toBe(tagName);
  });
});
