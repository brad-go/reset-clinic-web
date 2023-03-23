import { useState, useEffect } from 'react';

export type UseScriptStatus = 'loading' | 'idle' | 'ready' | 'error';

const useScript = (src: string) => {
  const [status, setStatus] = useState<UseScriptStatus>(
    src ? 'loading' : 'idle'
  );

  useEffect(() => {
    if (!src) {
      setStatus('idle');
      return;
    }

    let script = document.querySelector(
      `script[src="${src}"]`
    ) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.setAttribute('data-status', 'loading');
      document.body.appendChild(script);

      const setAttributeFromEvent = (event: Event) => {
        const scriptStatus = event.type === 'load' ? 'ready' : 'error';

        script.setAttribute('data-status', scriptStatus);
      };

      script.addEventListener('load', setAttributeFromEvent);
      script.addEventListener('error', setAttributeFromEvent);
    } else {
      const newStatus = script.getAttribute('data-status') as
        | UseScriptStatus
        | undefined;

      setStatus(newStatus || 'loading');
    }

    const setStateFromEvent = (event: Event) => {
      const newStatus = event.type === 'load' ? 'ready' : 'error';

      setStatus(newStatus);
    };

    script.addEventListener('load', setStateFromEvent);
    script.addEventListener('error', setStateFromEvent);

    // eslint-disable-next-line consistent-return
    return () => {
      if (script) {
        script.removeEventListener('load', setStateFromEvent);
        script.removeEventListener('error', setStateFromEvent);
      }
    };
  }, [src]);

  return status;
};

export default useScript;
