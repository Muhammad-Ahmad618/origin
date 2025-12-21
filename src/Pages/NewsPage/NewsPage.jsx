import PageHeader from "../../Components/PageHeader/PageHeader";
import VideoGamesNews from "../../Components/VideoGameNews/VideoGamesNews";

function NewsPage() {
  return (
    <div className="min-h-screen max-w-screen-2xl pt-34 pb-10 text-white mx-auto px-5 lg:px-24">
      <PageHeader title="News" description="Latest Game News and Updates" />
      <VideoGamesNews limit={10} />
    </div>
  );
}

export default NewsPage;
