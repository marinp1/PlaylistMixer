import * as React from 'react';

const ResolveDuplicatesButton: React.SFC<{ duplicateCount: number, onClick: (e:any) => void }>
= ({ duplicateCount, onClick }) => (
  <div className="button button-primary u-full-width" onClick={e => onClick(e)}>
    Resolve duplicates ({duplicateCount})
  </div>
);

export default ResolveDuplicatesButton;
