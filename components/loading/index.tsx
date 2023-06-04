import React from 'react';
import { LoadingContainer, LoadingText, LoadingSpinner } from './loading.styles'



const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSpinner size={60} />
      <LoadingText variant="subtitle1" color="textSecondary">
        Loading...
      </LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
