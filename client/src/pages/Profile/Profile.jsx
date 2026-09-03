import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

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

      {/* Profile Header */}
      <section className="profile-header">
        <div className="profile-avatar">👤</div>

        <PageTitle
          title="My Profile"
          subtitle="Manage your account information."
        />
      </section>

      {/* Profile Information */}
      <Card className="profile-card">

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
          <Button
            className="edit-profile-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        ) : (
          <div className="profile-buttons">

            <Button
              className="save-profile-btn"
              onClick={handleSave}
            >
              Save Changes
            </Button>

            <Button
              className="cancel-profile-btn"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>

          </div>
        )}

      </Card>
    </div>
  );
}

export default Profile;