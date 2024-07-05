import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/admin.css";
// import AdminPage from './AdminPage';

const AdminPage = () => {
  // State to hold the search query
  const [query, setQuery] = useState("");

  // Handler for when the input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
 

  return (
    <>
      <div className="nav-content">
        <navbar className="nav-bar">
          <div className="nav-items">
            <div className="menu">
              <div className="menu">
                <p>Main Menu</p>
              </div>
              <div className="nav-bor">
                <button className="nav-item members">
                  <img
                    className="members-img"
                    src="/members.png"
                    alt="members"
                  />
                  <span className="member">Members</span>
                </button>
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
        <div className="list-container">
          <h1 className="mem">Members</h1>

          <div>
            <table className="table-1">
              <tr className="tr-1">
                <th className="empty"></th>
                <th className="table-name">Name</th>
                <th className="table-email">Email</th>
                <th className="table-contact">Contact</th>
                <th className="table-add">Address</th>
              </tr>
              <tr>
                <td>1.</td>
                <td>john</td>
                <td>abc@</td>
                <td>3485</td>
                <td>dc</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>john</td>
                <td>abc@</td>
                <td>348583475</td>
                <td>dc</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>john</td>
                <td>abc@</td>
                <td>348583475</td>
                <td>dc</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>john</td>
                <td>abc@</td>
                <td>348583475</td>
                <td>dc</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;

