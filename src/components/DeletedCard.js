'use client'
import axios from 'axios';
import something from '../images/something.png'

export default function DeletedCard({ name, category, id, brand, img }) {
  let photo = `https://thewebstorenode.uz.thewebstore.uz//view/${img[0]}`
  
  const handleDelete = async () => {
    var answer = window.confirm("Mahsulot olib tashlansinmi?");
    if (answer) {
      try {
        const response = await axios.delete(
          `https://thewebstorenode.uz.thewebstore.uz/posts/${id}`,
          {
            headers: {
              token: "eyJhbGciOiJIUzI1NiJ9.MQ.1tRPowLx-U0FAddHad0zerSPN41lydQhy7A-toLHzBo",
            },
          }
        );
        if (response.status === 200) {
          alert("Muvaffaqiyatli o'chirildi")
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

  let setcategory = ''
  if (category == 1) {
    setcategory = 'Mavsumiy'
  } else if(category == 2){
    setcategory = 'Smartfonlar'
  }else if( category == 3){
    setcategory = 'Planshetlar'
  }else{
    setcategory = ' boshqa'
  }

  return (
    <div className="flex-col justify-between min-h-52 h-full  flex overflow-hidden bg-white cursor-pointer rounded-xl group border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg group">
      <div className="flex justify-center w-[260px]">     
         <img className='object-fill h-[260px] hover:w-[275px]'  width={260} height={260}  src={photo ? photo : something} alt="" />
      </div>

     <div > <span className="mr-3 bg-lime-300 w-2/6 text-center mt-2 ml-2 px-2.5 py-1 rounded-full text-sm">
        {setcategory}
      </span>
      <span className="bg-gray-300 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full mt-2 inline-block">
        {brand}
      </span></div>
      <h3 className="font-bold mt-2 text-black ml-3 text-xl">{name}</h3>
      <button
        onClick={handleDelete}
        className="bg-gray-700 text-white flex justify-center items-center w-full font-bold py-4  mt-3 rounded-t-3xl hover:bg-gray-900 w-5/6 mx-auto transition"
      >
        Olib tashlash 🗑️
      </button>
    </div>
  );
}
