import { WindowControls } from "#components";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import WindowWrapper from "./../hoc/WindowWrapper";
import { posts } from "#constants";

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search">
            <Search className="icon" />

            <input
              type="text"
              placeholder="https://lakshyaraikwal.dev/projects"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="posts">
        <h2>Currently Building</h2>

        <div className="space-y-8">
          {posts.map(({ id, image, title, date, link, status }) => (
            <div key={id} className="post">
              <div className="col-span-2">
                <img src={image} alt={title} />
              </div>

              <div className="content">
                <p>{date}</p>

                <div className="flex items-center gap-3 mt-1">
                  <h3>{title}</h3>

                  <span
                    className={`status-badge ${
                      status === "Active Development"
                        ? "status-green"
                        : status === "Coming Soon"
                          ? "status-yellow"
                          : "status-blue"
                    }`}
                  >
                    <span className="status-dot" />
                    {status}
                  </span>
                </div>

                {status === "Coming Soon" ? (
                  ""
                ) : (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                    <MoveRight className="icon-hover" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
