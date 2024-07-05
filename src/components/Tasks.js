import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/task.css';

// import AdminPage from './AdminPage';

const TasksPage = () => {
  // State to hold the search query
  const [query, setQuery] = useState("");
const [taskData , setTaskData] =useState([]);
const [teamMembers , setTeamMembers] =useState([]);
  // Handler for when the input changes
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjM2U2ODA5Ni02YjViLTQ4Y2ItODkxYy1iNTkzMzgxMTNlMmUiLCJpYXQiOjE3MjAwOTExMTgsImV4cCI6MTcyMDExOTkxOH0.DlEFJzHadRA3TEqE1PKmj67bQvu8ADV-8vseS-l3La4"
        const response = await axios.get('https://qhills-task-management-server.onrender.com/getAllUserTasks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      setTaskData(response.data);
      console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the fetch function
    fetchData();
  }, []);

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
                <button className="nav-item tasks">
                  <img className="audience-img" src="/tasks.png" alt="tasks" />
                  <span className="task">Tasks</span>
                </button>
                <Link to="/CreateCredentials">
                  {" "}
                  <button className="nav-item insight">
                    <img
                      className="insight-img"
                      src="/createcredentials.png"
                      alt="insight"
                    />
                    <span className="in">Create Credentials</span>
                  </button>
                </Link>
                <Link to="/CreateTask">
                  <button className="nav-item reports">
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
                  <Link to={"/"}>
                    {" "}
                    <button className="nav-item log">
                      <img
                        className="logout-img"
                        src="/logout.png"
                        alt="logout"
                      />
                      <span className="logout">Logout</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </navbar>
        <div className="list-container">
          <h1 className="tk">Task</h1>

          <navbar className="nav-table">
            <table className="table-4">
              <tr className="tr-7">
                <th className="table-task">Task</th>
                <th className="table-priority">Priority</th>
                <th className="table-team">Team</th>
              </tr>
              <hr className="line-1" />
              {
                taskData && taskData.map((item)=>(
                  <>
                <tr className="tab-high">
                  <td className="hig">
                    <p className="check">{item.name}</p>
                    <p className="may">{item.dueDate}</p>
                  </td>
                  <td className="hig-1">
                    <div className="log-1">
                      <img className="highs" src="/high.png" alt="high" />
                      <p className="hh">{item.priority}</p>
                    </div>
                    <button className="edit">
                    <p className="ed">Edit</p>
                    </button>
                  </td>
                 
                  <td className="task-team">
                          {item.users?.length > 0 ? (
                            item.users.map((member) => (
                              <div className="team-member-container" key={member.id}>
                                <button className="team-btn">
                                  <p className="team-label">{member.name[0]}</p>
                                  <span className="team-name">{member.name}</span>
                                </button>
                              </div>
                            ))
                          ) : (
                            <p>No team members</p>
                          )}
                        </td>
                </tr>
                <hr className="line" />
              </>) )
              }
              
              {/*  */}

             
            </table>
          </navbar>
        </div>
      </div>
    </>
  );
};

export default TasksPage;
