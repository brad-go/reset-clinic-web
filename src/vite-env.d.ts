interface ImportMetaEnv {
  readonly VITE_API_END_POINT?: string;
  readonly VITE_KAKAO_JAVASCRIPT_KEY?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

/// <reference types="vite/client" />
