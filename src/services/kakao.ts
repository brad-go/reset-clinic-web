import type { UseScriptStatus } from '@/hooks/useScript';

export const initKakao = (status: UseScriptStatus) => {
  if (status === 'ready' && window.Kakao) {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }
  }
};
