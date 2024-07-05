  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/createtask.css';  // Assuming you have a CSS file for styling

const CreateTask = ({ onSelect }) => {
  const [isPriorityDropdownOpen, setPriorityDropdownOpen] = useState(false);
  const [isMemberDropdownOpen, setMemberDropdownOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [prioritySearchTerm, setPrioritySearchTerm] = useState('');
  const [memberSearchTerm, setMemberSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePriorityToggle = () => {
    setPriorityDropdownOpen(!isPriorityDropdownOpen);
  };

  const handleMemberToggle = () => {
    setMemberDropdownOpen(!isMemberDropdownOpen);
  };

  const handlePrioritySearchChange = (event) => {
    setPrioritySearchTerm(event.target.value);
  };

  const handleMemberSearchChange = (event) => {
    setMemberSearchTerm(event.target.value);
  };

  const handlePriorityOptionClick = (option) => {
    setSelectedPriority(option);
    onSelect(option);
    setPriorityDropdownOpen(false);
    setPrioritySearchTerm(''); // Reset search term after selection
  };

  const handleMemberOptionClick = (option) => {
    setSelectedMember(option);
    onSelect(option);
    setMemberDropdownOpen(false);
    setMemberSearchTerm(''); // Reset search term after selection
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setShowDatePicker(false); // Hide the date picker after selecting a date
  };

  const handleDatePickerButtonClick = () => {
    setShowDatePicker(true); // Show the date picker on button click
  };

  const priorityOptions = [
    { value: '1', label: 'Low' },
    { value: '2', label: 'Medium' },
    { value: '3', label: 'High' },
  ];

  const memberOptions = [
    { value: 'user1', label: 'User1' },
    { value: 'user2', label: 'User2' },
    { value: 'user3', label: 'User3' },
  ];

  const filteredPriorityOptions = priorityOptions.filter(option =>
    option.label.toLowerCase().includes(prioritySearchTerm.toLowerCase())
  );

  const filteredMemberOptions = memberOptions.filter(option =>
    option.label.toLowerCase().includes(memberSearchTerm.toLowerCase())
  );

  return (
    <div className="container-7">
     <navbar className="nav-bar">
          <div className="nav-items">
            <div className="menu">
              <div className="menu">
                <p>Main Menu</p>
              </div>
              <div className="nav-bor">
               <Link to={"/AdminPage"} ><button className="nav-item members">
                  <img
                    className="members-img"
                    src="/members.png"
                    alt="members"
                  />
                  <span className="member">Members</span>
                </button></Link>
                <button className="nav-item tasks">
                  <img className="audience-img" src="/tasks.png" alt="tasks" />
                  <span className="task">Tasks</span>
                </button>
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
               <Link to={"/LoginPage"}> <button className="nav-item log">
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
      <div className="details">
        <div className="container-form">
          <form className="formm-2">
            <h1 className="tas">Create Task</h1>
            <label htmlFor="name" className="input-name">
              Name
            </label>
            <input
              className="input-fields"
              type="text"
              id="name"
              placeholder="Enter your Name"
              required
            />

            <label htmlFor="description" className="input-name">
              Description
            </label>
            <input
              className="input-fields"
              type="text"
              id="description"
              placeholder="Enter Description"
              required
            />

            <div className="priority">
              <label htmlFor="priority" className="select-priority">
                Select Priority
              </label>
              <div className="dropd">
                <div className="dropdown-head" onClick={handlePriorityToggle}>
                  {selectedPriority ? selectedPriority.label : "Select option"}
                  <span className="dropdown-arrow">{isPriorityDropdownOpen ? "▲" : "▼"}</span>
                </div>
                {isPriorityDropdownOpen && (
                  <div className="dropdown-li">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={prioritySearchTerm}
                      onChange={handlePrioritySearchChange}
                      className="dropdown-search"
                    />
                    {filteredPriorityOptions.map((option) => (
                      <div
                        key={option.value}
                        className="dropdown-item"
                        onClick={() => handlePriorityOptionClick(option)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <label htmlFor="duedate" className="due-date">
              Due Date
            </label>
            <div className="date-picker">
              <button className='select' type="button" onClick={handleDatePickerButtonClick}>
                Select Date
              </button>
              {showDatePicker && (
                <input className='date-in'
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  onBlur={() => setShowDatePicker(false)} // Hide the date picker if it loses focus
                  autoFocus
                />
              )}
              {selectedDate && (
                <p>
                 <h5 className='selected'> Selected Date: {new Date(selectedDate).toLocaleDateString()}</h5>
                </p>
              )}
            </div>

            <div className="assign">
              <label htmlFor="assign" className="input-assign">
                Assign Members
              </label>
              <div className="dropd">
                <div className="dropdown-head" onClick={handleMemberToggle}>
                  {selectedMember ? selectedMember.label : "Select member"}
                  <span className="dropdown-arrow">{isMemberDropdownOpen ? "▲" : "▼"}</span>
                </div>
                {isMemberDropdownOpen && (
                  <div className="dropdown-lis">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={memberSearchTerm}
                      onChange={handleMemberSearchChange}
                      className="dropdown-search"
                    />
                    {filteredMemberOptions.map((option) => (
                      <div
                        key={option.value}
                        className="dropdown-item"
                        onClick={() => handleMemberOptionClick(option)}
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
