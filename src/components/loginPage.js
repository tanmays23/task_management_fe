import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import '../styles/login.css';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (password) => {
    const hasMinimumLength = password.length >= 8;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasTwoNumbers = /(?=(.*\d){2})/.test(password);
    
    return hasMinimumLength && hasSpecialCharacter && hasTwoNumbers;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setPasswordError('');

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long, include at least 1 special character, and at least 2 numbers.');
      return;
    }
  

    try {
      const response = await axios.post('http://localhost:5000/', {
        phoneNumber,
        password
      });
      // Handle the response as needed
      console.log(response.data);
    } catch (err) {
      console.error(err);
      setError('Login Successull');
    }
  };

  return (
    <div className='main-container' >
      <div className='container-1'>
        <h4 className='manage'>Manage all your tasks in one place!</h4>
        <h1 className='cloud'>Cloud-based Task Manager</h1>
      </div>

      <div className="container-2">
        <form className="form" onSubmit={handleSubmit}>
          <div className='main-wel'>
            <h1>Welcome back!</h1>
          </div>
          <div className='main-keep'>
            <p>Keep all your credentials safe!</p>
          </div>
          
          
          <label htmlFor="phonenumber" className='input-label'>Phone Number</label>
          <input
            className='input-field'
            type="tel"
            id="phonenumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="password" className='input-label'>Password</label>
          <input
            className='input-field'
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <div className='container-group'>
            
            <Link to="/forgotPage"><h4 className='for'>Forget Password?</h4></Link>
            
            {error && <p className="error-message">{error}</p>}
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <div>
            <button className='btn-1' type="submit"><Link to="/AdminPage">Log in</Link></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/login.css';

// const LoginPage = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const validatePassword = (password) => {
//     const hasMinimumLength = password.length >= 8;
//     const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
//     const hasTwoNumbers = /(?=(.*\d){2})/.test(password);
    
//     return hasMinimumLength && hasSpecialCharacter && hasTwoNumbers;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError('');
//     setPasswordError('');

//     if (!validatePassword(password)) {
//       setPasswordError('Password must be at least 8 characters long, include at least 1 special character, and at least 2 numbers.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/', {
//         phoneNumber,
//         password
//       });
//       console.log(response.data); // Handle the response as needed
//     } catch (err) {
//       console.error(err);
//       setError('Login Unsuccessful');
//     }
//   };

//   return (
//     <div className='bg-hwb-192 flex justify-end h-screen m-1'>
//       <div className='flex flex-row'>
//         <div className='poppins text-gray-700 ml-100 px-100 inline-block rounded-15px text-5 px-500 1b-cc-ccc mb-5'>
//           <h4 className='manage text-20'>Manage all your tasks in one place!</h4>
//           <h1 className='text-42'>Cloud-based Task Manager</h1>
//         </div>

//         <div className="bg-white p-110-80 rounded-2-percent mt-90 shadow-03 h-330 w-500 mr-3">
//           <form className="flex flex-col items-start max-h-1100 max-w-1500 w-300" onSubmit={handleSubmit}>
//             <div className='pl-23 mb-14'>
//               <h1 className='text-30 text-blue-500 text-center py-31 mb-0'>Welcome back!</h1>
//             </div>
//             <div className='pl-20 mb-10'>
//               <p className='text-13 text-center pb-10'>Keep all your credentials safe!</p>
//             </div>
            
//             <label htmlFor="phonenumber" className='ml-20 flex text-17 py-12'>Phone Number</label>
//             <input
//               className='ml-15 w-300 h-20 border-radius-20 p-8 border-1-cc'
//               type="tel"
//               id="phonenumber"
//               placeholder="Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               required
//             />

//             <label htmlFor="password" className='ml-20 flex text-17 py-12'>Password</label>
//             <input
//               className='ml-15 w-300 h-20 border-radius-20 p-8 border-1-cc'
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
            
//             <div className='pl-9 text-12 text-gray-700 poppins ml-20 mt-2'>
//               <Link to="/forgotPage" className='text-13'>Forget Password?</Link>
              
//               {error && <p className="text-red-500">{error}</p>}
//               {passwordError && <p className="text-red-500">{passwordError}</p>}
//             </div>
//             <div>
//               <button className='ml-10 w-300 p-10 bg-blue-600 text-white text-16 mt-30 hover:bg-blue-700'>
//                 <Link to="/AdminPage">Log in</Link>
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;
