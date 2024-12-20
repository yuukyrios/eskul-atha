import Header from "./component/header";
import Navigation from "./component/navigation";
import Card from "./component/card";
import InfoBox from "./component/infobox";
import Footer from "./component/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyAMUGEtEKIy_j9yT6cAyFv_JRoGsbhD-jA&s"
            content="Content for English Camp. Lorem Ipsum is simply dummy text that has roots in classical Latin literature from 45 BC, making it over 2000 years old."
          />
          <InfoBox />
          <Card
            imgSrc="https://i.ytimg.com/vi/qbkg46EUmf0/maxresdefault.jpg"
            content="Content for Kodein Club. Lorem Ipsum is simply dummy text that has roots in classical Latin literature from 45 BC, making it over 2000 years old."
          />
          <Card
            imgSrc="https://www.jannatalquran.com/wp-content/uploads/2017/09/Read-the-Quran.jpg"
            content="Content for Quran Camp. Lorem Ipsum is simply dummy text that has roots in classical Latin literature."
          />
          <Card
            imgSrc="https://i.ytimg.com/vi/y7sh0lA0WBw/maxresdefault.jpg"
            content="Content for Kajian Islam. Lorem Ipsum is simply dummy text that has roots in classical Latin literature."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
