import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums {error.message}</div>;
  } else {
    content = data.map((album) => {
      return (
        <AlbumsListItem key={album.id} album={album}/>
      );
    });
  }

  return (
    <div className="">
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold"> Albums for {user.name} </h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          Add ALbum
        </Button>
      </div>
      <div className='ml-5'>{content}</div>
    </div>
  );
}

export default AlbumsList;
