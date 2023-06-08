import React from 'react';

function YouTubeEmbed() {
  const srcDoc = `<iframe src="https://goldbroker.com/widget/live/XAU?currency=USD&height=320" scrolling="no" frameborder="0" width="100%" height="320" style="border: 0; overflow: hidden;"></iframe>`;

  return (
    <div className='items-center'>
      <iframe
        title="YouTube video player"
        srcDoc={srcDoc}
        frameBorder="0"
        width="1500"
        height="320"
        style={{ border: '0', overflow: 'hidden' }}
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
