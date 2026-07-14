import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "./../hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-6">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-5">
            <img
              src="/images/profile_pic.jpg"
              alt="Lakshya"
              className="w-20 h-20 rounded-full object-cover"
            />

            <div>
              <h3 className="text-2xl font-semibold">Lakshya Raikwal</h3>
              <p className="text-gray-500">AI Software Engineer</p>
              <p className="text-sm text-gray-400">Tampere, Finland</p>
            </div>
          </div>

          <div className="status-badge status-green">
            <span className="status-dot"></span>
            Open to Opportunities
          </div>
        </div>

        <div className="space-y-3">
          <h3>Let's Build Something Together</h3>

          <p>
            Whether it's an AI project, a full-stack application, collaboration,
            or simply talking about technology, I'm always happy to connect.
          </p>

          <a
            href="mailto:lakshyaraikwal85@gmail.com"
            className="text-blue-600 hover:underline"
          >
            lakshyaraikwal85@gmail.com
          </a>
        </div>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
