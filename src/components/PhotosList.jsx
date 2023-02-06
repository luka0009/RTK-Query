import {
  useFetchPhotosQuery,
  useAddPhotoMutation,
} from "../store/apis/photosApi";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

export default function PhotosList({ album }) {
  const { data, error, isFetching, isLoading } = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  }

  let content;
  if(isFetching) {
    content = <Skeleton className='h8 w8' times={4}></Skeleton>
  } else if(error) {
    content = <div>Error Fetching Photos {error.message}</div>
  } else {
    content = data.map(photo => {
        return <PhotosListItem key={photo.id} photo={photo}/>
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button onClick={handleAddPhoto} loading={addPhotoResults.isLoading}>Add Photo</Button>
      </div>
      {/* className="mx-[100px] grid grid-cols-6 gap-3" */}
      <div className='mx-8 flex flex-row flex-wrap justify-center gap-9'>
        {content}
      </div>
    </div>
  );
}
