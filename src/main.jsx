import { createRoot } from "react-dom/client";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Download,
  ExternalLink,
  FileCheck2,
  FolderSearch,
  GitBranch,
  LockKeyhole,
  Menu,
  MonitorSmartphone,
  MousePointer2,
  Play,
  ScanLine,
  Search,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import "./styles.css";

const release = "v1.0.0";
const releasePage = "https://github.com/harshraj211/ForensiX/releases/tag/v1.0.0";
const downloads = {
  windows: "https://github.com/harshraj211/ForensiX/releases/download/v1.0.0/ForensiX-Windows-Portable.zip",
  linux: "https://github.com/harshraj211/ForensiX/releases/download/v1.0.0/ForensiX-Linux-Portable.zip",
  macos: "https://github.com/harshraj211/ForensiX/releases/download/v1.0.0/ForensiX-macOS-Portable.zip",
};

const capabilities = [
  {
    id: "unrooted",
    label: "Authorized ADB",
    title: "A defensible starting point for ordinary devices",
    description: "Begin with what the transport can prove. ForensiX checks the device, records authorization state, and only exposes providers that pass the current capability assessment.",
    tone: "available",
    items: ["Device identity and readiness", "Contacts, SMS, and call logs", "Shared-storage media and documents", "Screenshot capture and documented screen sessions"],
  },
  {
    id: "rooted",
    label: "Rooted / privileged",
    title: "More access, with more responsibility",
    description: "When a device is already rooted or an authorized privileged transport is available, the same case workflow can expose broader filesystem and private-application paths subject to device state and encryption.",
    tone: "rooted",
    items: ["Root status and access evidence", "Broader filesystem assessment", "Private application paths where accessible", "Explicit limitations and custody records"],
  },
  {
    id: "research",
    label: "Research track",
    title: "Legacy access research stays clearly labelled",
    description: "Device-specific legacy Android pathways are a research area, not a promise of the current release. Results depend on chipset, patch level, boot state, encryption, and lawful authorization.",
    tone: "research",
    items: ["Android 7-10 legacy pathways", "Pre-2019 patch-level investigations", "Qualcomm-specific research", "APK downgrade research with explicit limitations"],
  },
];

const workflow = [
  { number: "01", icon: ScanLine, title: "Observe", text: "Detect the ADB transport, identify the device, and capture the authorization state before any case action." },
  { number: "02", icon: FolderSearch, title: "Scope", text: "Create a case, assess rooted or unrooted access, and show only the evidence providers supported by that state." },
  { number: "03", icon: FileCheck2, title: "Acquire", text: "Select records or media deliberately. Every acquired item is hashed, attributed, and linked to its case." },
  { number: "04", icon: GitBranch, title: "Explain", text: "Review the evidence composition, custody history, limitations, and reproducible report outputs." },
];

const features = [
  { icon: Smartphone, title: "Device readiness", text: "Transport, authorization, Android version, and access posture in one preflight view." },
  { icon: FolderSearch, title: "Selective acquisition", text: "Contacts, messages, call logs, device information, media, and documents without blind collection." },
  { icon: FileCheck2, title: "Integrity by default", text: "Hashes, evidence identifiers, verification actions, and case-scoped custody history." },
  { icon: MonitorSmartphone, title: "Documented screen work", text: "scrcpy mirror, control, screenshot capture, and MP4 examination sessions with clear disclosures." },
  { icon: Search, title: "Evidence review", text: "Thumbnails, metadata, artifact search, timeline context, and key evidence review." },
  { icon: BookOpen, title: "Report-ready output", text: "Preliminary reports and audit exports designed to explain what happened and what did not." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCapability, setActiveCapability] = useState("unrooted");
  const active = capabilities.find((item) => item.id === activeCapability) ?? capabilities[0];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="ForensiX home">
          <span className="brand-mark"><ShieldCheck size={19} strokeWidth={1.8} /></span>
          <span className="brand-word">FORENSIX</span>
        </a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a href="#overview" onClick={closeMenu}>Overview</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#workflow" onClick={closeMenu}>Workflow</a>
          <a href="#downloads" onClick={closeMenu}>Downloads</a>
          <a className="nav-cta" href={releasePage} target="_blank" rel="noreferrer" onClick={closeMenu}>View release <ExternalLink size={14} /></a>
        </nav>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-wrap" id="overview">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> LOCAL ANDROID EVIDENCE WORKSTATION</div>
            <h1>Evidence work that explains itself.</h1>
            <p className="hero-lede">ForensiX brings device readiness, controlled acquisition, media review, and chain-of-custody reporting into one local workstation.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#downloads">Download ForensiX <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#capabilities">Explore capabilities <ChevronDown size={17} /></a>
            </div>
            <div className="hero-meta"><span><CircleDot size={13} /> Current release {release}</span><span><LockKeyhole size={13} /> Loopback-first</span><span><Server size={13} /> Windows / Linux / macOS</span></div>
          </div>

          <div className="workstation-window" aria-label="ForensiX workstation preview">
            <div className="window-bar">
              <div className="window-title"><span className="window-icon"><ShieldCheck size={15} /></span> ForensiX <span className="window-subtitle">/ DEVICE READINESS</span></div>
              <div className="window-controls"><span /><span /><span /></div>
            </div>
            <div className="window-body">
              <aside className="preview-sidebar">
                <div className="preview-logo">FORENSIX</div>
                <div className="preview-label">CASE WORKFLOW</div>
                <div className="preview-nav active"><Activity size={14} /> Device readiness</div>
                <div className="preview-nav"><FolderSearch size={14} /> Cases</div>
                <div className="preview-nav"><FileCheck2 size={14} /> Evidence</div>
                <div className="preview-nav"><BookOpen size={14} /> Reports</div>
                <div className="preview-rule" />
                <div className="preview-label">SYSTEM</div>
                <div className="preview-nav"><Server size={14} /> Audit log</div>
                <div className="preview-nav"><ShieldCheck size={14} /> Validation</div>
              </aside>
              <div className="preview-main">
                <div className="preview-headline"><div><span className="mini-kicker">PHASE 0 / TRANSPORT VALIDATION</span><h2>Device readiness</h2><p>Classify the connected Android transport before any case-linked acquisition.</p></div><button className="preview-action"><ScanLine size={15} /> Detect devices</button></div>
                <div className="preview-rule" />
                <div className="preview-grid">
                  <div className="preview-card preview-card-large">
                    <div className="device-status"><span className="status-pill status-green"><CheckCircle2 size={14} /> Authorized</span><span className="adb-label">ADB 1.0.41</span></div>
                    <div className="device-row"><div className="device-icon"><Smartphone size={23} /></div><div><strong>Android transport observed</strong><span>Infinix X666 / serial ending 13099</span></div></div>
                    <div className="preview-checks"><span><Check size={13} /> USB transport</span><span><Check size={13} /> Authorization</span><span><Check size={13} /> Case scope</span></div>
                    <div className="preview-card-footer"><span>Ready for capability assessment</span><span className="green-text">No evidence collected</span></div>
                  </div>
                  <div className="preview-card side-card"><span className="mini-kicker">NEXT ACTION</span><strong>Assess capabilities</strong><p>Root posture, providers, media paths, and limitations.</p><button className="preview-outline">Open assessment <ArrowRight size={14} /></button></div>
                </div>
                <div className="preview-footer-row"><span><span className="green-dot" /> Local workstation online</span><span>Case-scoped / hash-ready</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip"><div className="section-wrap trust-inner"><span>BUILT FOR CONTROLLED EXAMINATION</span><span>NO PUBLIC API</span><span>CASE-SCOPED EVIDENCE</span><span>EXPLICIT LIMITATIONS</span></div></section>

        <section className="section-wrap section-block" id="capabilities">
          <div className="section-intro"><div><div className="eyebrow">THE WORKSTATION</div><h2>Every action has a reason, a scope, and a record.</h2></div><p>ForensiX is designed for investigators who need to move quickly without losing the explanation behind an acquisition.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p><a href="#workflow" aria-label={`Learn about ${title}`}><ArrowRight size={16} /></a></article>)}</div>
        </section>

        <section className="dark-band" id="workflow"><div className="section-wrap section-block workflow-block"><div className="section-intro inverse"><div><div className="eyebrow">ONE INVESTIGATION FLOW</div><h2>From transport to report without losing the thread.</h2></div><p>Start with observation. End with an evidence package that makes the boundaries of the work visible.</p></div><div className="workflow-grid">{workflow.map(({ number, icon: Icon, title, text }) => <article className="workflow-step" key={number}><div className="step-number">{number}</div><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="section-wrap section-block capability-section">
          <div className="section-intro"><div><div className="eyebrow">ACCESS POSTURE</div><h2>Show the investigator what the device can actually support.</h2></div><p>Access varies by Android version, authorization, encryption, patch level, OEM behavior, and privilege. The product should say so plainly.</p></div>
          <div className="capability-switcher" role="tablist" aria-label="Capability access posture">{capabilities.map((item) => <button key={item.id} className={activeCapability === item.id ? `cap-tab active ${item.tone}` : "cap-tab"} onClick={() => setActiveCapability(item.id)} role="tab" aria-selected={activeCapability === item.id}>{item.label}</button>)}</div>
          <div className={`capability-panel ${active.tone}`}><div className="cap-panel-copy"><div className="cap-panel-tag">{active.tone === "available" ? "AVAILABLE NOW" : active.tone === "rooted" ? "ACCESS-DEPENDENT" : "RESEARCH / PLANNED"}</div><h3>{active.title}</h3><p>{active.description}</p></div><ul>{active.items.map((item) => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></div>
          <div className="limitation-note"><ShieldAlert size={19} /><div><strong>What this does not claim</strong><p>ForensiX does not currently promise temporary rooting, password brute force, lock bypassing, Qualcomm/EDL extraction, or universal APK downgrading. Device-specific legacy paths are isolated as research and will carry their own limitations when implemented.</p></div></div>
        </section>

        <section className="section-wrap section-block rooted-section"><div className="rooted-panel"><div className="rooted-copy"><div className="eyebrow">ROOTED DEVICE SUPPORT</div><h2>When privilege exists, keep the workflow defensible.</h2><p>Rooted or privileged access can open paths that ordinary ADB cannot. ForensiX keeps the distinction visible so a reviewer can tell which artifacts came from shared storage, a provider, a root-assisted path, or a research workflow.</p><a className="text-link" href="#downloads">Read the workstation boundaries <ArrowRight size={16} /></a></div><div className="rooted-list"><div><span className="rooted-icon"><ShieldCheck size={18} /></span><span><strong>Access is assessed</strong><small>Root status is detected and recorded before root-only controls appear.</small></span></div><div><span className="rooted-icon"><LockKeyhole size={18} /></span><span><strong>Private data is conditional</strong><small>Encryption, app sandboxing, and device state still determine what is reachable.</small></span></div><div><span className="rooted-icon"><FileCheck2 size={18} /></span><span><strong>Limitations stay attached</strong><small>Reports and custody history carry the access posture alongside the evidence.</small></span></div></div></div></section>

        <section className="download-band" id="downloads"><div className="section-wrap download-block"><div className="download-intro"><div className="eyebrow">DOWNLOAD FORENSIX {release}</div><h2>A local workstation for the environments you already use.</h2><p>Portable builds are available for Windows, Linux, and macOS. Download the release, review the setup requirements, and keep the workstation on the examiner's machine.</p><div className="download-note"><Download size={16} /> Releases include checksums and platform-specific portable archives.</div></div><div className="download-grid"><DownloadCard platform="Windows" detail="Portable ZIP / x64" href={downloads.windows} primary /><DownloadCard platform="Linux" detail="Portable ZIP / x64" href={downloads.linux} /><DownloadCard platform="macOS" detail="Portable ZIP / Apple Silicon & Intel" href={downloads.macos} /></div><a className="release-link" href={releasePage} target="_blank" rel="noreferrer">View release notes, checksums, and source <ExternalLink size={15} /></a></div></section>

        <section className="section-wrap section-block research-section"><div className="section-intro"><div><div className="eyebrow">RESEARCH NOTES</div><h2>Ambition is useful. Overclaiming is not.</h2></div><p>Some forensic access paths are real but narrow, device-specific, and dependent on historical security conditions. We will publish them with the boundaries they require.</p></div><div className="research-grid"><article><div className="research-head"><span className="research-status">RESEARCH</span><span>LEGACY ANDROID</span></div><h3>Android 7-10 pathways</h3><p>Older Android generations and pre-2019 patch levels may support additional device-specific investigation paths. Support cannot be generalized across OEMs.</p></article><article><div className="research-head"><span className="research-status">PLANNED</span><span>EXPLICIT LIMITS</span></div><h3>APK downgrade research</h3><p>Any future downgrade workflow will be limited by package signing, rollback protection, app state, and device policy. It will not be presented as a universal recovery method.</p></article><article><div className="research-head"><span className="research-status muted-status">OUT OF SCOPE</span><span>NO CLAIM</span></div><h3>Passwords and lock bypass</h3><p>Brute force, lock bypassing, and unverified access escalation are not part of the current product promise.</p></article></div></section>

        <section className="final-cta"><div className="section-wrap final-cta-inner"><div><div className="eyebrow">MAKE THE RECORD STRONGER</div><h2>Start with the release that is available today.</h2></div><a className="button button-primary" href={downloads.windows}>Download v1.0.0 <Download size={17} /></a></div></section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><ShieldCheck size={19} /></span><span className="brand-word">FORENSIX</span></a><p>Local Android evidence work, with its limits attached.</p></div><div className="footer-links"><div><strong>Product</strong><a href="#capabilities">Capabilities</a><a href="#workflow">Workflow</a><a href="#downloads">Downloads</a></div><div><strong>Project</strong><a href="https://github.com/harshraj211/ForensiX" target="_blank" rel="noreferrer">Workstation source <ExternalLink size={13} /></a><a href={releasePage} target="_blank" rel="noreferrer">GitHub releases <ExternalLink size={13} /></a><a href="https://github.com/harshraj211/ForensiX-Website/issues" target="_blank" rel="noreferrer">Contact / issues <ExternalLink size={13} /></a></div></div></div><div className="section-wrap footer-bottom"><span>ForensiX {release}</span><span>Designed for authorized examination and controlled testing.</span></div></footer>
    </div>
  );
}

function DownloadCard({ platform, detail, href, primary = false }) {
  return <article className={primary ? "download-card primary-download" : "download-card"}><div className="platform-icon"><MonitorSmartphone size={20} /></div><div className="download-card-copy"><h3>{platform}</h3><p>{detail}</p></div><a className="download-icon" href={href} aria-label={`Download ForensiX for ${platform}`}><Download size={17} /></a></article>;
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
