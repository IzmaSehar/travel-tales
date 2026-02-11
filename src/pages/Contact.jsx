import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
        <h1 id="contact-title">Contact Us</h1>
        <p id="contact-sub">We'd love to hear from you. Fill the form below.</p>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>
                <tr className="form-row-pop">
                  <td><label>Name:</label></td>
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
                  <td><label>Email:</label></td>
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
                  <td><label>Message:</label></td>
                  <td>
                    <textarea 
                      name="message" 
                      rows="5" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required
                    ></textarea>
                  </td>
                </tr>

                <tr>
                  <td className="text" colSpan="2">
                    <input type="submit" value="Send Message" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>

      {submittedData && (
        <div className="container" style={{ marginTop: '20px' }}>
          <h3>Submitted Message Details</h3>
          <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%', maxWidth: '500px', backgroundColor: 'white' }}>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{submittedData.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{submittedData.email}</td>
              </tr>
              <tr>
                <th>Message</th>
                <td>{submittedData.message}</td>
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
            <br />
            <p className="text"><b>Address:</b> Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;