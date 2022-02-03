import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const WithRouterSample = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <h3>Location</h3>
      <textarea
        value={JSON.stringify(location, null, 2)}
        readOnly  
      />
      <h3>match</h3>
      <textarea
        value={JSON.stringify(params, null, 2)}
        readOnly  
      />
      <button onClick={() => navigate('/')}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;