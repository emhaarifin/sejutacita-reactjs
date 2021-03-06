import React, { useEffect, useState } from 'react';

interface DeferProps {
  chunkSize: number;
}

const Defer: React.FC<DeferProps> = ({ chunkSize, children }) => {
  const [renderedItemsCount, setRenderedItemsCount] = useState(chunkSize);

  const childrenArray = React.useMemo(() => React.Children.toArray(children), [children]);

  useEffect(() => {
    if (renderedItemsCount < childrenArray.length) {
      const handler = window?.requestIdleCallback(
        () => {
          setRenderedItemsCount(Math.min(renderedItemsCount + chunkSize, childrenArray.length));
        },
        { timeout: 200 }
      );
      return () => {
        window?.cancelIdleCallback(handler);
      };
    }
  }, [renderedItemsCount, setRenderedItemsCount, childrenArray.length, chunkSize]);

  return <>{childrenArray.slice(0, renderedItemsCount)}</>;
};

export default Defer;
