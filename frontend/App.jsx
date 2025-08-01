// frontend/App.jsx
import React from 'react';

function App() {
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
    </div>
  );
}

export default App;
