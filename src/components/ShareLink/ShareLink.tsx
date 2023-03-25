import { useState, useEffect } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useScript } from '@/hooks';
import { initKakao } from '@/services';
import { KAKAO } from '@/constants';

import * as S from './ShareLink.styles';

interface ShareLinkProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareLink = ({ isOpen, onClose }: ShareLinkProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const currentUrl = window.location.href;
  const status = useScript(KAKAO.javascriptSdkUrl);

  const handleKakaoClick = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });

    onClose();
  };

  const handleUrlClick = () => {
    if (isCopied) return;

    setIsCopied(true);
    onClose();

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  useEffect(() => {
    initKakao(status);
  }, [status]);

  return (
    <>
      <S.Container isOpen={isOpen}>
        <S.Heading>링크 나에게로 보내놓기</S.Heading>
        <S.LinkContainer>
          <FacebookShareButton url={currentUrl} onClick={onClose}>
            <FacebookIcon size={48} round borderRadius={24} />
          </FacebookShareButton>
          <TwitterShareButton url={currentUrl} onClick={onClose}>
            <TwitterIcon size={48} round borderRadius={24} />
          </TwitterShareButton>
          <S.KakaoShareButton onClick={handleKakaoClick}>
            <S.KakaoIcon src={KAKAO.imageUrl} />
          </S.KakaoShareButton>
          <CopyToClipboard text={currentUrl} onCopy={handleUrlClick}>
            <S.URLShareButton>URL</S.URLShareButton>
          </CopyToClipboard>
        </S.LinkContainer>
        <S.CloseButton onClick={onClose}>취소</S.CloseButton>
      </S.Container>
      <S.Alert isCopied={isCopied}>url이 clipboard에 복사되었습니다.</S.Alert>
      {isOpen && <S.Backdrop onClick={onClose} />}
    </>
  );
};

export default ShareLink;
