import React, { useState, useEffect, useCallback } from "react";
import {
  User,
  Play,
  Code2,
  Smartphone,
  GitBranch,
  Layers,
  Mail,
  FileText,
  ChevronLeft,
  Command,
  Wifi,
  Battery,
  Minimize2,
  Maximize2,
  MapPin,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "../Icons";
import {
  AboutApp,
  PlaygroundApp,
  CodeApp,
  ProjectsApp,
  CareerApp,
  StackApp,
  ContactApp,
} from "./DuoApps";
import "./DuoSite.css";

const APPS = [
  { id: "about", name: "About", title: "About Anom", Icon: User, color: "#C5A982" },
  { id: "playground", name: "Playground", title: "Live Flutter Apps", Icon: Play, color: "#C5A982" },
  { id: "code", name: "Code", title: "Source & Architecture", Icon: Code2, color: "#C5A982" },
  { id: "projects", name: "Projects", title: "Shipped Systems & Apps", Icon: Smartphone, color: "#C5A982" },
  { id: "career", name: "Career", title: "Career Changelog", Icon: GitBranch, color: "#C5A982" },
  { id: "stack", name: "Stack", title: "Skills & Tooling", Icon: Layers, color: "#C5A982" },
  { id: "contact", name: "Contact", title: "Let's Build Something", Icon: Mail, color: "#C5A982" },
];

/* Natural (unscaled) size of the open device in px */
const NAT_W = 862;
const NAT_H = 622;
const MOBILE_BP = 880;

const useClock = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const npt = new Date(now.getTime() + (now.getTimezoneOffset() + 345) * 60000);
      setTime(
        `${String(npt.getHours()).padStart(2, "0")}:${String(npt.getMinutes()).padStart(2, "0")}`
      );
    };
    tick();
    const id = setInterval(tick, 5000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const useViewport = () => {
  const read = () => ({ w: window.innerWidth, h: window.innerHeight });
  const [vp, setVp] = useState(read);
  useEffect(() => {
    const onResize = () => setVp(read());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return vp;
};

const StatusBar = ({ time, right = true }) => (
  <div className="duo-status">
    <span>{time || "09:41"}</span>
    {right && (
      <span className="duo-status-icons">
        <span className="net">5G</span>
        <Wifi size={12} />
        <Battery size={14} />
      </span>
    )}
  </div>
);

/* ------------------------------ Home screen ------------------------------ */
const HomeScreen = ({ time, onOpen, onOpenPalette }) => (
  <div className="home-screen">
    <div className="widget profile-widget">
      <img src="/avatar.jpg" alt="Anom Maharjan" className="avatar-img" />
      <div className="profile-widget-text">
        <h1 className="widget-name">{personalInfo.name}</h1>
        <span className="widget-role">Flutter Developer & Software Engineer</span>
        <span className="widget-loc">
          <MapPin size={11} /> {personalInfo.location}
        </span>
      </div>
    </div>

    <div className="widget-row">
      <div className="widget clock-widget">
        <span className="widget-label">Kathmandu</span>
        <span className="clock-time">{time || "09:41"}</span>
        <span className="widget-label">NPT • UTC+5:45</span>
      </div>
      <div className="widget status-widget">
        <span className="live-pill">
          <span className="live-dot"></span> Available
        </span>
        <p>Senior mobile roles & enterprise contracts</p>
        <div className="mini-stats">
          <span><b>10+</b> apps</span>
          <span><b>4+</b> yrs</span>
        </div>
      </div>
    </div>

    <div className="icon-grid">
      {APPS.map((item) => (
        <button key={item.id} className="app-icon" onClick={() => onOpen(item.id)}>
          <span className="icon-tile" style={{ "--tile": item.color }}>
            <item.Icon size={24} />
          </span>
          <span className="icon-label">{item.name}</span>
        </button>
      ))}
      <a
        className="app-icon"
        href="/Anom_Maharjan_Resume.pdf"
        download="Anom_Maharjan_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="icon-tile" style={{ "--tile": "#92918D" }}>
          <FileText size={24} />
        </span>
        <span className="icon-label">Résumé</span>
      </a>
    </div>

    <div className="dock">
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="dock-btn">
        <GithubIcon size={22} />
      </a>
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="dock-btn">
        <LinkedinIcon size={22} />
      </a>
      <a href={`https://wa.me/977${personalInfo.phoneRaw}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="dock-btn">
        <WhatsAppIcon size={22} />
      </a>
      <button id="cmd-k-trigger" className="dock-btn" aria-label="Command palette" onClick={onOpenPalette}>
        <Command size={22} />
      </button>
    </div>
  </div>
);

/* -------------------------------- App view ------------------------------- */
const AppView = ({ appId, project, setProject }) => {
  switch (appId) {
    case "about":
      return <AboutApp />;
    case "playground":
      return <PlaygroundApp />;
    case "code":
      return <CodeApp />;
    case "projects":
      return <ProjectsApp project={project} setProject={setProject} />;
    case "career":
      return <CareerApp />;
    case "stack":
      return <StackApp />;
    case "contact":
      return <ContactApp />;
    default:
      return null;
  }
};

const AppScreenContent = ({ appId, project, setProject, onBack }) => {
  const app = APPS.find((a) => a.id === appId) || APPS[0];
  return (
    <>
      <div className="app-header">
        {onBack ? (
          <button className="header-back" onClick={onBack} aria-label="Back to home">
            <ChevronLeft size={18} />
          </button>
        ) : (
          <span className="header-icon" style={{ "--tile": app.color }}>
            <app.Icon size={14} />
          </span>
        )}
        <h2 className="app-title">{app.title}</h2>
      </div>
      <div className="app-scroll" key={appId + (project?.id || "")}>
        <AppView appId={appId} project={project} setProject={setProject} />
      </div>
    </>
  );
};

/* --------------------------------- Shell --------------------------------- */
const DuoSite = ({ navigateRef, onOpenPalette }) => {
  const time = useClock();
  const { w, h } = useViewport();
  const isMobile = w < MOBILE_BP;

  const [openApp, setOpenApp] = useState("about");
  const [mobileHome, setMobileHome] = useState(true);
  const [folded, setFolded] = useState(false);
  const [project, setProject] = useState(null);

  const navigate = useCallback((id, proj = null) => {
    setOpenApp(id);
    setProject(proj);
    setMobileHome(false);
    setFolded(false);
  }, []);

  useEffect(() => {
    if (navigateRef) navigateRef.current = navigate;
  }, [navigateRef, navigate]);

  const scale = Math.max(0.35, Math.min((w - 32) / NAT_W, (h - 150) / NAT_H, 1.25));

  /* ---------- Mobile: a single phone screen ---------- */
  if (isMobile) {
    return (
      <div className="duo-site mobile">
        <div className="duo-phone">
          <div className="duo-island"><span className="camera-lens"></span></div>
          <div className="duo-screen single">
            <StatusBar time={time} />
            {mobileHome ? (
              <div className="app-scroll">
                <HomeScreen time={time} onOpen={navigate} onOpenPalette={onOpenPalette} />
              </div>
            ) : (
              <AppScreenContent
                appId={openApp}
                project={project}
                setProject={setProject}
                onBack={() => {
                  setMobileHome(true);
                  setProject(null);
                }}
              />
            )}
            <div className="duo-home-bar static"></div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Desktop: the iPhone Duo ---------- */
  return (
    <div className="duo-site">
      <div className="duo-fit" style={{ width: NAT_W * scale, height: NAT_H * scale }}>
        <div
          className="duo-scaler"
          style={{ width: NAT_W, height: NAT_H, transform: `scale(${scale})` }}
        >
          <div className={`duo-device ${folded ? "folded" : ""}`}>
            {/* Left screen: home */}
            <div className="duo-half duo-half-left">
              <div className="duo-screen left">
                <div className="duo-glare"></div>
                <StatusBar time={time} right={false} />
                <div className="app-scroll">
                  <HomeScreen time={time} onOpen={navigate} onOpenPalette={onOpenPalette} />
                </div>
              </div>
            </div>

            {/* Right screen: open app, plus cover display on the outside */}
            <div className="duo-wing">
              <div className="duo-half duo-half-right wing-front">
                <div className="duo-screen right">
                  <div className="duo-glare"></div>
                  <div className="duo-status end">
                    <span className="duo-status-icons">
                      <span className="net">5G</span>
                      <Wifi size={12} />
                      <Battery size={14} />
                    </span>
                  </div>
                  <AppScreenContent
                    appId={openApp}
                    project={project}
                    setProject={setProject}
                  />
                </div>
              </div>

              <button
                type="button"
                className="duo-half duo-half-right wing-back"
                onClick={() => setFolded(false)}
                aria-label="Unfold device"
                tabIndex={folded ? 0 : -1}
              >
                <span className="cover-screen">
                  <img className="cover-photo" src="/avatar.jpg" alt="" />
                  <span className="cover-island"><span className="camera-lens"></span></span>
                  <span className="cover-time">{time || "09:41"}</span>
                  <span className="cover-date">Kathmandu • NPT</span>
                  <span className="cover-info">
                    <span className="cover-name">Anom Maharjan</span>
                    <span className="cover-role">Flutter Developer</span>
                    <span className="cover-hint">Tap to unfold</span>
                  </span>
                  <span className="cover-home-bar"></span>
                </span>
              </button>
            </div>

            <div className="duo-crease" aria-hidden="true"></div>
            <div className="duo-home-bar" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <div className="duo-controls">
        <button
          type="button"
          className="duo-pill-btn"
          onClick={() => setFolded((f) => !f)}
          aria-pressed={folded}
        >
          {folded ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          <span>{folded ? "Unfold" : "Fold"}</span>
        </button>
        <button type="button" className="duo-pill-btn ghost" onClick={onOpenPalette}>
          <Command size={14} />
          <span>⌘K</span>
        </button>
      </div>
    </div>
  );
};

export default DuoSite;
