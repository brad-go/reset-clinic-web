import { useCallback, useState } from 'react';

import { FIELDSETS, SMOKING_STATUS, PREFERENCE } from '@/constants';
import { Text } from '@/components/Text';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { setUser } from '@/store/userSlice';
import { useAppDispatch, useAppSelector } from '@/hooks';

import type { RootState } from '@/store';
import type { CustomObject, SmokingStatus, Preference } from '@/types';

import * as S from './Form.styles';

const initialFormValues: CustomObject<string> = {
  smokingStatus: '',
  preference: '',
  nickname: '',
};

const initialFormErrors: CustomObject<boolean> = {
  smokingStatus: false,
  preference: false,
  nickname: false,
};

const Form = () => {
  const user = useAppSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialFormErrors);
  const [isSaved, setIsSaved] = useState(!!user.nickname);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const { id, name } = e.target as HTMLButtonElement;

    setErrors((prev) => ({ ...prev, [id]: false }));
    setValues((prev) => ({ ...prev, [id]: name }));
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, nickname: e.target.value }));
  }, []);

  const handleFocus = useCallback(() => {
    setErrors((prev) => ({ ...prev, nickname: false }));
  }, []);

  const isValidForm = useCallback(() => {
    let isValid = true;

    Object.entries(values).forEach(([key, value]) => {
      if (value || (key === 'nickname' && user.nickname)) return;

      setErrors((prev) => ({ ...prev, [key]: true }));
      isValid = false;
    });

    return isValid;
  }, [values, user.nickname]);

  const updateUser = useCallback(() => {
    const newUser = {
      ...user,
      nickname: user.nickname || values.nickname,
      preference: values.preference as Preference,
      smokingStatus: values.smokingStatus as SmokingStatus,
    };

    dispatch(setUser(newUser));
  }, [dispatch, values, user]);

  const handleSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (isSaved) {
        setIsSaved(false);
        setValues((prev) => ({
          ...prev,
          preference: '',
          smokingStatus: '',
        }));
        setErrors(initialFormErrors);
        return;
      }

      if (!isValidForm()) return;

      updateUser();
      setIsSaved(true);
    },
    [isSaved, isValidForm, updateUser]
  );

  return isSaved ? (
    <>
      <S.List>
        <li>
          <S.Heading>흡연 상황</S.Heading>
          <Text>: {SMOKING_STATUS[user.smokingStatus as SmokingStatus]}</Text>
        </li>
        <li>
          <S.Heading>영상 종류</S.Heading>
          <Text>: {PREFERENCE[user.preference as Preference]}</Text>
        </li>
        <li>
          <S.Heading>닉네임</S.Heading>
          <Text>: {user.nickname}</Text>
        </li>
      </S.List>
      <S.ButtonContainer>
        <S.SaveButton type="submit" variant="fill" onClick={handleSubmit}>
          수정
        </S.SaveButton>
      </S.ButtonContainer>
    </>
  ) : (
    <S.Form>
      {FIELDSETS.map(({ id, legend, options, errorMessage }) => (
        <S.Fieldset key={id}>
          <S.Legend>{legend}</S.Legend>
          <Select
            id={id}
            selected={values[id]}
            options={options}
            onClick={handleClick}
          />
          {errors[id] && <S.ErorrMessage>{errorMessage}</S.ErorrMessage>}
        </S.Fieldset>
      ))}
      <S.Label htmlFor="nickname">
        닉네임을 지정해주세요.
        <Input
          id="nickname"
          name="nickname"
          value={user.nickname || values.nickname}
          disabled={!!user.nickname}
          placeholder="닉네임을 입력해주세요"
          isError={errors.nickname}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {errors.nickname && (
          <S.ErorrMessage>
            {values.nickname
              ? '이미 존재하는 닉네임입니다.'
              : '닉네임을 입력해주세요.'}
          </S.ErorrMessage>
        )}
      </S.Label>
      <S.ButtonContainer>
        <S.SaveButton type="submit" variant="fill" onClick={handleSubmit}>
          저장
        </S.SaveButton>
      </S.ButtonContainer>
    </S.Form>
  );
};

export default Form;
