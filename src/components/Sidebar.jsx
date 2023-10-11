import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListItem = ({ image, text, altText }) => {
  return (
    <li className="shadow-lg p-3 cursor-pointer flex items-center hover:bg-gray-100">
      <img className="h-5 w-5" src={image} alt={altText} />
      <p className="mx-2">{text}</p>
    </li>
  );
};

const SubscriptionItem = ({ image, text }) => {
  return (
    <li className="shadow-lg p-3 cursor-pointer flex items-center hover:bg-gray-100">
      <img
        src={image}
        alt=""
        className="rounded-full h-6 w-6 border border-gray-500"
      />
      <p className="mx-2">{text}</p>
    </li>
  );
};

const Sidebar = () => {
  const isMenuOpened = useSelector((store) => store.app.isMenuOpened);
  const subscriptions = [
    {
      image:
        "data:image/jpeg;base64,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",
      text: "T-Series",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP74moc64V_d8rCP_TR-Hpjd0j4pYAJ0Mf9xo08TD60w&s",
      text: "Mr.Beast",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCCKlc5BgLrsOHQ53X9mAIzkRJ4iTyVfkWaOAAsVSeA&s",
      text: "Filmymoji",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFsFCnO3LUJG2AlGW_0A4E4N915ptWSW50P-tlZaNAg&s",
      text: "Beluga",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvRSkvWPubO3drYI2txT_g3CJ__wUtvZ1hvYMlQKk3A&s",
      text: "Howcast",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkR_yEofe8XY6VU1RDDSMA3xiTkEQQZZ1-Ry-10kIFg&s",
      text: "DudePerfect",
    },
  ];
  const otherOptions = [
    {
      image: "https://img.icons8.com/ios/50/time-machine--v1.png",
      text: "History",
    },
    {
      image: "https://img.icons8.com/material-outlined/24/video.png",
      text: "Your videos",
    },
    {
      image:
        "https://img.icons8.com/external-anggara-filled-outline-anggara-putra/32/external-watchlater-multimedia-anggara-filled-outline-anggara-putra-2.png",
      text: "Watch later",
    },
    {
      image: "https://img.icons8.com/ios-filled/50/cut.png",
      text: "Your clips",
    },
    {
      image: "https://img.icons8.com/ios/50/facebook-like--v1.png",
      text: "Liked videos",
    },
  ];
  return !isMenuOpened ? null : (
    <div className="p-4 shadow-lg">
      <ul className="p-2">
        <li className="shadow-lg p-3 flex items-center hover:bg-gray-100">
          <img
            src="https://img.icons8.com/ios-filled/50/home.png"
            className="h-5 w-5"
          />
          <Link to="/" className="mx-2">
            Home
          </Link>
        </li>
        <ListItem
          image="data:image/png;base64,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"
          text="Shorts"
          altText="Shorts"
        />
        <ListItem
          image="https://img.icons8.com/ios-glyphs/30/video-playlist.png"
          text="Subscriptions"
          altText="subscription"
        />
      </ul>
      <hr />
      <h1 className="font-bold pt-5">Other options</h1>
      <ul>
        {otherOptions.map((item, index) => {
          return (
            <ListItem
              image={item?.image}
              text={item?.text}
              altText={""}
              key={index}
            />
          );
        })}
      </ul>
      <hr className="underline underline-offset-1" />
      <h1 className="font-bold pt-3">Subscriptions</h1>
      <ul>
        {subscriptions.map((item, index) => {
          return (
            <SubscriptionItem
              image={item?.image}
              text={item?.text}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
