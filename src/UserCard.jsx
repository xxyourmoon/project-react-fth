import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city } = props;
  const [clicked, setClicked] = useState(false);

  return (
    // Card container
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      {/* Nama user */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>

      {/* Email user */}
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>

      {/* Alamat user */}
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      <button
        className="bg-gray-01 text-white p-2 rounded-md"
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;
