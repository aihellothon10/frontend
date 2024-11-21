import { useState } from 'react';

const useFileReader = () => {
  const [images, setImages] = useState<string[]>([]);
  const [error, setError] = useState<null | string>(null);

  const fileReader = (file: File) => {
    const read = new FileReader();

    return new Promise<string>((resolve, reject) => {
      read.onloadend = () => {
        const { result } = read;

        if (!result) reject(ERROR_MESSAGES.FAIL_TO_READ);
        else if (typeof result !== 'string') reject(ERROR_MESSAGES.FAIL_TO_FILE_TYPE);
        else resolve(result.toString());
      };

      read.onerror = () => {
        reject(ERROR_MESSAGES.FAIL_TO_READING);
      };

      read.readAsDataURL(file);
    });
  };

  const reader = async (file: File) => {
    try {
      const imageUrl = await fileReader(file);

      setImages([...images, imageUrl]);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return { images, reader, error };
};

const ERROR_MESSAGES = {
  FAIL_TO_READ: '파일 읽기에 실패했습니다.',
  FAIL_TO_FILE_TYPE: '유효하지 않는 파일입니다',
  FAIL_TO_READING: '파일을 읽는 도중에 실패했습니다.',
};

export default useFileReader;
