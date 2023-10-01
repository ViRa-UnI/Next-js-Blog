```javascript
import { useEffect, useState } from 'react';

const useLazyLoading = (imgSelector, imageDataSet) => {
  const [observed, setObserved] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset[imageDataSet];
          lazyImage.classList.remove(imgSelector);

          observer.unobserve(lazyImage);
        }
      });
    });

    const arr = document.querySelectorAll(`.${imgSelector}`);
    arr.forEach(v => {
      observer.observe(v);
    });

    setObserved(observer);
  }, [imgSelector, imageDataSet]);

  useEffect(() => {
    return () => {
      if (observed) {
        observed.disconnect();
      }
    };
  }, [observed]);

  return observed;
};

export default useLazyLoading;
```