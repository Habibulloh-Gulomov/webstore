'use client'
import axios from 'axios';

export default function DeletedCard({ name, category, id, brand}) {
  
  const handleDelete = async () => {
    var answer = window.confirm("Mahsulot olib tashlansinmi?");
if (answer) {  
  try {
    const response = await axios.delete(
      `http://thewebstorenode.uz.thewebstore.uz/posts/:${id}`,
      {
        headers: {
          token: "eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo",
        },
      }
    );
    if (response.status === 200) {
      window.location.reload()
    } else {      
      alert('Failed to delete the item.');

    }
  } catch (error) {
    alert('Error deleting the item.');
    console.error('Delete error:', error.message);
  }
}
else {
  //
}
    
  };

  return (
    <div className="bg-white border shadow-md rounded-xl p-4 w-64">
      <div className="flex justify-center">
        <div className="w-40 h-40 bg-gray-200 rounded-lg">rasm</div>
      </div>

      <span className="mr-2 bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        {category}
      </span>
      <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        {brand}
      </span>
      <h3 className="text-lg font-semibold mt-2 text-black">{name}</h3>
      <button
        onClick={handleDelete}
        className="bg-gray-500 text-white flex justify-center items-center w-full py-3 rounded-lg mt-3 hover:bg-red-500 transition"
      >
        Olib tashlash 🗑️
      </button>
    </div>
  );
}
