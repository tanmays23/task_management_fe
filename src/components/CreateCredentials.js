import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/createcredentials.css';




const CreateCredentials = ({onSelect}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
    

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false);
    };
    const options = [
        { value: '1', label: 'User1' },
        { value: '2', label: 'User2' },
        { value: '3', label: 'User3' },
      ];

      const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
  return (
    <>
      <div className="create-credentials"></div>
        <div className="nav-content">
        <navbar className="nav-bar">
          <div className="nav-items">
            <div className="menu">
              <div className="menu">
                <p>Main Menu</p>
              </div>
              <div className="nav-bor">
               <Link to={"/AdminPage"}> <button className="nav-item members">
                  <img
                    className="members-img"
                    src="/members.png"
                    alt="members"
                  />
                  <span className="member">Members</span>
                </button></Link>
                <Link to={"/Tasks"}><button className="nav-item tasks">
                  <img className="audience-img" src="/tasks.png" alt="tasks" />
                  <span className="task">Tasks</span>
                </button></Link>
                <Link to="/CreateCredentials">
                  {" "}
                  <button  className="nav-item insight">
                    <img
                      className="insight-img"
                      src="/createcredentials.png"
                      alt="insight"
                    />
                    <span className="in">Create Credentials</span>
                  </button>
                </Link> 
                <Link to="/CreateTask">
                  <button  className="nav-item reports">
                    <img
                      className="reports-img"
                      src="/createtask.png"
                      alt="reports"
                    />
                    <span className="report">Create Tasks</span>
                  </button>
                 </Link>
                <button className="nav-item notification">
                  <img
                    className="notification-img"
                    src="/notification.png"
                    alt="notification"
                  />
                  <span className="noti">Notification</span>
                </button>
                <button className="nav-item settings">
                  <img
                    className="settings-img"
                    src="/settings.png"
                    alt="settings"
                  />
                 <span className="settings">Settings</span>
                </button>
              </div>

              
            </div>
            <div className="nav-sup">
              <div className="nav-bro">
              <div>
               <Link to={"/"}> <button className="nav-item log">
                  <img className="logout-img" src="/logout.png" alt="logout" />
                  <span className="logout">Logout</span>
                </button></Link>
              </div>
              {/* <Link to="/FeedbackPage">
                
                  <button className=" nav-item feedback">
                    <img
                      className="feedback-img"
                      src="/feedback.png"
                      alt="feedback"
                    />
                   <span className="feedback">Feedback</span>
                  </button>
            
              </Link> */}
            </div>
            </div>
          </div>
        </navbar>
          <div className="create">
            <h1 className="credentials">Create Credentials</h1>

            <div className="creden">
              <form className="create-1">
                <div className="write">
                  <h3 className="setup">Credentials Setup</h3>
                 
                </div>
                <h4 className="create-please">
                  set your credentials!
                </h4>
                <div className="dropdown">
                  <div className="dropdown-header" onClick={handleToggle}>
                    {selectedOption ? selectedOption.label : "Select options"}
                    <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
                  </div>
                  {isOpen && (
                  <div className="dropdown-list">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="dropdown-search"
                    />
                    {filteredOptions.map((option) => (
                      <div
                        key={option.value}
                        className="dropdown-item"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option.label}
                      </div>
                      ))}
                    </div>
                  )}
                </div>
                <button className='generate'> Generate</button>
              </form>
            </div>
          </div>
        </div>

    </>
  );
}

export default CreateCredentials;