// import React from 'react';
// import * as Styled from './Styled.App';
// import Layout from 'layout/Layout';

// const App = () => {
//   return (
//     <Styled.App>
//       <Layout />
//     </Styled.App>
//   );
// };

// export default App;

import React from 'react';

const App = () => {
  const callAPI = async () => {
    const response = await fetch('http://localhost:8080/');
    const result = await response.json();
    console.log(result);
  };
  const callAPI2 = async (name: string) => {
    const response = await fetch(`http://localhost:8080?name=${name}`);
    const result = await response.json();
    console.log(result);
  };
  return (
    <div>
      <button onClick={callAPI}>Click</button>
      <button onClick={() => callAPI2('laptop')}>Laptop</button>
    </div>
  );
};

export default App;
