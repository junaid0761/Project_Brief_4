import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Junaid Ahmed",
    email: "junaid@example.com",
    phone: "+91 9876543210",
    address: "Assam, India",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <section className="profile-header">
        <div className="profile-avatar">👤</div>

        <h1>My Profile</h1>

        <p>Manage your account information.</p>
      </section>

      <section className="profile-card">
        <div className="profile-info">
          <label>Full Name</label>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="profile-info">
          <label>Email Address</label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="profile-info">
          <label>Phone Number</label>

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>

        <div className="profile-info">
          <label>Delivery Address</label>

          <textarea
            name="address"
            value={profile.address}
            onChange={handleChange}
            disabled={!isEditing}
          ></textarea>
        </div>

        {!isEditing ? (
          <button
            className="edit-profile-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        ) : (
          <div className="profile-buttons">
            <button
              className="save-profile-btn"
              onClick={handleSave}
            >
              Save Changes
            </button>

            <button
              className="cancel-profile-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Profile;