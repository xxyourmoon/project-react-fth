import React from "react";

function Example() {
  const name = "Budi"; // const karena nilainya tidak berubah

  let age = 20; // let karena nilainya akan berubah
  age = age + 1; // ubah nilai age

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-sm mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">Contoh Deklarasi Variabel</h2>
      <p className="text-gray-700">
        Nama: <span className="font-semibold">{name}</span>
      </p>
      <p className="text-gray-700">
        Usia: <span className="font-semibold">{age}</span>
      </p>
    </div>
  );
}

export default Example;
