import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Morning Yoga Session', completed: true, priority: 'low' },
    { id: 2, title: 'Team Meeting - Project Review', completed: false, priority: 'high' },
    { id: 3, title: 'Lunch with Client', completed: false, priority: 'medium' },
    { id: 4, title: 'Grocery Shopping', completed: false, priority: 'medium' },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '32px'
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #FF9933 0%, #B4161B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Your Tasks
        </h1>
        <button style={{
          padding: '12px 24px',
          background: 'linear-gradient(135deg, #FF9933 0%, #B4161B 100%)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          + Add New Task
        </button>
      </div>
      
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)'
      }}>
        {tasks.map(task => (
          <div key={task.id} style={{
            padding: '20px',
            borderBottom: '1px solid #FFE4CC',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                onClick={() => toggleTask(task.id)}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '6px',
                  border: '2px solid #FF9933',
                  background: task.completed ? '#15803D' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                {task.completed && '✓'}
              </button>
              <div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '4px',
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#999' : '#333'
                }}>
                  {task.title}
                </h3>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    color: 'white',
                    fontWeight: '500',
                    background: task.priority === 'high' ? '#B4161B' : 
                               task.priority === 'medium' ? '#FF9933' : '#15803D'
                  }}>
                    {task.priority}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
