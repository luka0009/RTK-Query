import { GoTrashcan } from "react-icons/go"
import { useRemovePhotoMutation } from "../store/apis/photosApi"

export default function PhotosListItem({ photo }) {
    
  const [removePhoto, results] = useRemovePhotoMutation();
  const handleRemovePhoto = () => {
    removePhoto(photo);
  }
  return (
      <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
        <img className='h-20 w-20' src={photo.url} alt='random photo' />
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-100 opacity-0 hover:opacity-70 transition duration-700 ">
          <GoTrashcan className="text-3xl"/>
        </div>
      </div>
    )
  };
  