import React from 'react';
import './App.css';

const BACKEND_API_URL = process.env.BACKEND_API_URL || 'http://api.localhost/';

const fetchContent = async (updateContent) => {
  const response = await fetch(`${BACKEND_API_URL}`,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  updateContent(data.content);
};

const App = () => {
  const [content, updateContent] = React.useState('Waiting for a response from Rails...');

  React.useEffect(() => {
    fetchContent(updateContent);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {content}
        </p>
      </header>
    </div>
  );
}

export default App;