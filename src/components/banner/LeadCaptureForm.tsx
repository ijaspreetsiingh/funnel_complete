import React from 'react';
import { useDispatch } from 'react-redux';
import { updateFormData } from '../../redux/booking'; // सुनिश्चित करें कि यह पाथ सही है
import './style.css'; // सुनिश्चित करें कि यह पाथ सही है

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    dispatch(updateFormData({
      fullName: data.name as string,
      emailAddress: data.email as string,
      whatsappNumber: data.phone as string
    }));

    console.log("Form data submitted to Redux:", {
      fullName: data.name,
      emailAddress: data.email,
      whatsappNumber: data.phone
    });

    setTimeout(() => {
      alert("Form submitted successfully! Redirecting...");
      onSuccess();
    }, 1000);
  };

  return (
    <div className="popup-form-overlay-luna">
      <div className="popup-form-content-luna">
        <button className="close-button-luna" onClick={onClose}>×</button>
        <h3>Watch Full Video</h3>
        <p>Please provide your details to watch the full video.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group-luna">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group-luna">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group-luna">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10,15}" title="Please enter a valid phone number" required />
          </div>
          <button type="submit" className="submit-button-luna">Submit & Watch</button>
        </form>
      </div>
    </div>
  );
};

export default LeadCaptureForm; 
