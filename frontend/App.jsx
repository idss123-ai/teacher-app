// frontend/App.jsx
import React, { useState } from 'react';
import api from './services/api';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const result = await api.login(email, password);

    if (result.success) {
      setSuccess('✅ Login successful! Welcome back.');
      setIsLoginOpen(false);
      setEmail('');
      setPassword('');
      // In future: redirect to main app
    } else {
      setError(result.message);
    }
  };

  // Handle registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const result = await api.register(firstName, lastName, email, password);

    if (result.success) {
      setSuccess('🎉 Account created! You can now log in.');
      setIsRegisterOpen(false);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } else {
      setError(result.message);
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Sidebar (1/3 width) */}
      <div style={{
        width: '33.33%',
        backgroundColor: '#000',
        color: '#fff',
        padding: '20px',
        overflowY: 'auto'
      }}>
        <h2>Teacher</h2>

        <input
          type="text"
          placeholder="Search prompts..."
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            borderRadius: '4px',
            border: '1px solid #555',
            backgroundColor: '#111',
            color: '#fff'
          }}
        />

        <h3>Categories</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="#planning" style={{ color: '#fff', textDecoration: 'none' }}>Planning</a></li>
          <li><a href="#resources" style={{ color: '#fff', textDecoration: 'none' }}>Resources</a></li>
          <li><a href="#media" style={{ color: '#fff', textDecoration: 'none' }}>Media</a></li>
          <li><a href="#content" style={{ color: '#fff', textDecoration: 'none' }}>Content</a></li>
          <li><a href="#management" style={{ color: '#fff', textDecoration: 'none' }}>Management</a></li>
          <li><a href="#legal" style={{ color: '#fff', textDecoration: 'none' }}>Legal & Compliance</a></li>
          <li><a href="#professional" style={{ color: '#fff', textDecoration: 'none' }}>Professional Development</a></li>
          <li><a href="#idss" style={{ color: '#00ff00', textDecoration: 'none' }}>IDSS Teachers</a></li>
        </ul>

        <h3>Saved Prompts</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
          <li>My Lesson Plan (Oct 5)</li>
          <li>Unit Planner Draft</li>
        </ul>

        <button style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#00ff00',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Request Access (IDSS)
        </button>
      </div>

      {/* Main Content Area (2/3 width) */}
      <div style={{
        width: '66.67%',
        padding: '30px',
        overflowY: 'auto',
        backgroundColor: '#fff'
      }}>
        <div style={{ textAlign: 'right', marginBottom: '20px' }}>
          <button
            onClick={() => setIsLoginOpen(true)}
            style={{
              padding: '10px 20px',
              backgroundColor: '#000',
              color: '#fff',
              border: '1px solid #000',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Sisene
          </button>
        </div>

        <h1>Welcome, Teacher</h1>
        <p>Select a prompt from the sidebar to get started.</p>

        <div style={{
          border: '1px solid #ddd',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <h3>Selected Prompt: Lesson Planner</h3>
          <form>
            <label>Grade Level: <input type="text" placeholder="e.g., 5th Grade" /></label><br/><br/>
            <label>Subject: <input type="text" placeholder="e.g., Science" /></label><br/><br/>
            <label>Topic: <input type="text" placeholder="e.g., Ecosystems" /></label><br/><br/>
            <label>Duration: <input type="text" placeholder="e.g., 45 minutes" /></label><br/><br/>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
              <span>📎</span>
              <input type="file" />
            </div>
          </form>

          <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #eee',
            borderRadius: '4px'
          }}>
            <h4>AI Response:</h4>
            <p>Here is a detailed lesson plan for teaching ecosystems to 5th graders...</p>
          </div>

          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button>Save</button>
            <button>Share</button>
            <button>Retry</button>
            <button>Edit</button>
            <button>Print</button>
            <button>Export</button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {isLoginOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>Logi sisse</h3>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Meiliaadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Parool"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>{success}</p>}
              <button type="submit" style={buttonStyle}>Logi sisse</button>
            </form>
            <p>
              No account?{' '}
              <span
                onClick={() => {
                  setIsLoginOpen(false);
                  setIsRegisterOpen(true);
                }}
                style={{ color: '#00f', cursor: 'pointer' }}
              >
                Registreeri siin
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {isRegisterOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h3>Registreeri</h3>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Eesnimi"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Perekonnanimi"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Meiliaadress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="password"
                placeholder="Parool"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={inputStyle}
              />
              {error && <p style={{ color: 'red' }}>{error}</p>}
              {success && <p style={{ color: 'green' }}>{success}</p>}
              <button type="submit" style={buttonStyle}>Registreeri</button>
            </form>
            <p>
              Already have an account?{' '}
              <span
                onClick={() => {
                  setIsRegisterOpen(false);
                  setIsLoginOpen(true);
                }}
                style={{ color: '#00f', cursor: 'pointer' }}
              >
                Log in here
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Modal styles
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '30px',
  borderRadius: '8px',
  width: '90%',
  maxWidth: '400px',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

const buttonStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  width: '100%',
};

export default App;
