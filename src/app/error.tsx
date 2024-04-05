'use client';

import { useEffect } from 'react';

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center">
      <p>いや、何か問題が発生しました...おそらくリフレッシュしますか?</p>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default ErrorPage;
