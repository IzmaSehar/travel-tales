import { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    age: '',
    phone: '',
    destination: 'Paris'
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <div className="container page">
        <div id="registration-title">Register for Travel Updates</div>

        <div className="registration-form">
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr className="form-row-pop">
                  <td>Full Name:</td>
                  <td>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </td>
                </tr>

                <tr className="form-row-pop">
                  <td>Email:</td>
                  <td>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </td>
                </tr>

                <tr className="form-row-pop">
                  <td>Password:</td>
                  <td>
                    <input 
                      type="password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required 
                    />
                  </td>
                </tr>

                <tr className="form-row-pop">
                  <td>Gender:</td>
                  <td>
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Male" 
                      onChange={handleChange}
                      checked={formData.gender === "Male"}
                    /> Male &nbsp;
                    <input 
                      type="radio" 
                      name="gender" 
                      value="Female" 
                      onChange={handleChange}
                      checked={formData.gender === "Female"}
                    /> Female
                  </td>
                </tr>

                <tr className="form-row-pop">
                  <td>Age:</td>
                  <td>
                    <input 
                      type="number" 
                      name="age" 
                      min="1" 
                      value={formData.age} 
                      onChange={handleChange} 
                    />
                  </td>
                </tr>

                <tr className="form-row-pop">
                  <td>Phone:</td>
                  <td>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                    />
                  </td>
                </tr>

                <tr className="form-row-pop">
                  <td>Favorite Destination:</td>
                  <td>
                    <select 
                      name="destination" 
                      value={formData.destination} 
                      onChange={handleChange}
                    >
                      <option value="Paris">Paris</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Italy">Italy</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td className="text" colSpan="2">
                    <input type="submit" value="Register" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>

      {submittedData && (
        <div className="container" style={{ marginTop: '20px' }}>
          <h3>Submitted Registration Details</h3>
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '500px', backgroundColor: 'white' }}>
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{submittedData.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>{submittedData.gender}</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>{submittedData.age}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{submittedData.phone}</td>
              </tr>
              <tr>
                <th>Favorite Destination</th>
                <td>{submittedData.destination}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col-12 text mission-section">
            <p>Follow Us: 
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> Instagram</a> |
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> Facebook</a> |
              <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;