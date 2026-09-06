import { createRoot } from "react-dom/client";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDot,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileCheck2,
  Flame,
  FolderSearch,
  GitBranch,
  KeyRound,
  Layers,
  Lock,
  LockKeyhole,
  Laptop,
  Menu,
  MonitorSmartphone,
  MousePointer2,
  Play,
  ScanLine,
  Search,
  SearchCheck,
  Server,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Unlock,
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
    id: "unrooted_suite",
    label: "Non-Rooted 5-Pillar Suite",
    title: "5-Pillar Non-Rooted Android Extraction Suite",
    title_extra: "Zero-Root Superiority Vector",
    description: "Industry-leading non-rooted acquisition capabilities that bypass allowBackup=false and SELinux file restrictions without requiring root privileges.",
    tone: "available",
    items: [
      "OEM Vendor Backup Emulation (Samsung Smart Switch / Huawei HiSuite RPC)",
      "Forensic Accessibility Agent UI Transcriber (Live chat UI scraping)",
      "System Telemetry & Dumpsys Miner (App timelines, Wi-Fi SSIDs, paired BT, cell towers)",
      "Non-Rooted Content Provider Harvester (Media index, deleted media, SIM ICCIDs)",
      "Cloud Token Harvester (Google, Samsung & messaging session tokens)",
    ],
  },
  {
    id: "advanced_non_rooted",
    label: "Exploits & APK Downgrade",
    title: "Targeted Filesystem & 46-App APK Downgrade",
    description: "Execute advanced non-rooted extraction vectors including CVE-2024-31317 init vulnerability filesystem acquisition (SPL ≤ June 2024) and failure-safe APK rollback downgrade attacks.",
    tone: "available",
    items: [
      "Automated Device App Inventory & Downgrade Compatibility Scanner",
      "CVE-2024-31317 init vulnerability filesystem acquisition",
      "46 app profiles (WhatsApp, Messenger, Instagram, Signal, Chrome, etc.)",
      "Automatic SHA-256 APK pre-check and base/split package preservation",
      "Failure-safe cleanup restoring exact original application packages",
    ],
  },
  {
    id: "screenlock_security",
    label: "Screen Lock & Security",
    title: "Passcode Assessment, Cracking & Lock Bypass",
    description: "Assess Android 5–14 lock screen mechanisms, measure wipe thresholds, dump Gatekeeper and pattern hashes, and crack credentials using pure Python or Hashcat GPU acceleration.",
    tone: "rooted",
    items: [
      "Lock settings assessment and anti-wipe delay calculator",
      "Offline Gatekeeper, SPBlob, and pattern hash extraction",
      "Instant pure-Python 389,112 path 3x3 pattern solver",
      "Rooted lock screen bypass and database patching engine",
    ],
  },
  {
    id: "decryption_carving",
    label: "Decryption & Carving Engine",
    title: "SQLCipher, Crypt14/15 & SQLite Slack Space Carver",
    description: "Decrypt protected messaging databases and carve deleted message fragments from unallocated SQLite pages, Write-Ahead Logs (WAL), and freelists.",
    tone: "available",
    items: [
      "WhatsApp msgstore.db.crypt14/15 key extraction & decryption",
      "Signal SQLCipher passphrase derivation & database decryption",
      "Telegram cache4.db and WAL file extraction",
      "SQLite page slack space, freelist & WAL frame carver",
    ],
  },
];

const workflow = [
  { number: "01", icon: ScanLine, title: "Observe & Assess", text: "Detect ADB transport, verify authorization posture, and assess lock screen wipe risk before taking case action." },
  { number: "02", icon: Layers, title: "Select Vector", text: "Choose 5-pillar non-rooted suite, 46-app APK downgrade, CVE-2024-31317 non-rooted acquisition, or lock cracking." },
  { number: "03", icon: KeyRound, title: "Decrypt & Carve", text: "Derive encryption keys, unpack WhatsApp/Signal sandboxes, and carve deleted records from SQLite WAL slack space." },
  { number: "04", icon: FileCheck2, title: "Verify & Export", text: "Review evidence composition, verify SHA-256 hashes, inspect audit logs, and produce court-ready reports." },
];

const features = [
  { icon: Smartphone, title: "5-Pillar Non-Rooted Suite", text: "Samsung Smart Switch RPC emulation, UI accessibility scraping, dumpsys telemetry, provider harvesting, and cloud tokens." },
  { icon: Layers, title: "46 APK Downgrade Profiles", text: "Failure-safe rollback framework supporting messaging, browsers, social, and cloud storage apps." },
  { icon: Cpu, title: "CVE-2024-31317 Vector", text: "Non-rooted full filesystem and userdata partition acquisition for devices with SPL ≤ June 2024." },
  { icon: Lock, title: "Screen Lock Suite", text: "Gatekeeper hash dumping, pure-Python 3x3 pattern solver, PIN brute-forcer, and rooted lock bypass." },
  { icon: KeyRound, title: "Database Decryption Engine", text: "Native decryption for WhatsApp msgstore.db.crypt14/15 and Signal SQLCipher databases." },
  { icon: SearchCheck, title: "SQLite Slack Carver", text: "Scans raw database files, freelists, and WAL frames to carve deleted message fragments." },
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
            <div className="eyebrow"><span className="eyebrow-dot" /> LOCAL ANDROID FORENSIC WORKSTATION</div>
            <h1>ForensiX</h1>
            <div className="hero-subtitle">Production Android Forensics &amp; Acquisition Suite</div>
            <p className="hero-lede">
              A comprehensive local workstation for non-rooted filesystem acquisition, failure-safe APK downgrade attacks across 46 app profiles, lock screen passcode cracking, database decryption, and SQLite carving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#downloads">Download ForensiX <ArrowRight size={17} /></a>
              <a className="button button-quiet" href="#capabilities">Explore capabilities <ChevronDown size={17} /></a>
            </div>
            <div className="hero-meta"><span><CircleDot size={13} /> Current release {release}</span><span><LockKeyhole size={13} /> Loopback-first</span><span><Server size={13} /> Windows / Linux / macOS</span></div>
          </div>

          <div className="workstation-window" aria-label="ForensiX workstation preview">
            <div className="window-bar">
              <div className="window-title"><span className="window-icon"><ShieldCheck size={15} /></span> ForensiX <span className="window-subtitle">/ ADVANCED EXTRACTIONS &amp; CARVING</span></div>
              <div className="window-controls"><span /><span /><span /></div>
            </div>
            <div className="window-body">
              <aside className="preview-sidebar">
                <div className="preview-logo">FORENSIX</div>
                <div className="preview-label">CASE WORKFLOW</div>
                <div className="preview-nav"><Activity size={14} /> Device readiness</div>
                <div className="preview-nav active"><Sparkles size={14} /> Deep extractions</div>
                <div className="preview-nav"><FolderSearch size={14} /> Cases</div>
                <div className="preview-nav"><FileCheck2 size={14} /> Evidence</div>
                <div className="preview-nav"><BookOpen size={14} /> Reports</div>
                <div className="preview-rule" />
                <div className="preview-label">SYSTEM</div>
                <div className="preview-nav"><Server size={14} /> Audit log</div>
                <div className="preview-nav"><ShieldCheck size={14} /> Validation</div>
              </aside>
              <div className="preview-main">
                <div className="preview-headline"><div><span className="mini-kicker">ADVANCED ACQUISITIONS</span><h2>Deep Extraction Engines</h2><p>APK downgrade attacks, CVE-2024-31317 vectors, lock screen solvers, and SQLite carvers.</p></div><button className="preview-action"><Play size={15} /> Run acquisition</button></div>
                <div className="preview-rule" />
                <div className="preview-grid">
                  <div className="preview-card preview-card-large">
                    <div className="device-status"><span className="status-pill status-green"><CheckCircle2 size={14} /> Active Engine</span><span className="adb-label">46 Profiles</span></div>
                    <div className="device-row"><div className="device-icon"><Layers size={23} /></div><div><strong>Rollback Downgrade &amp; Security Vectors</strong><span>WhatsApp, Signal, Telegram, Facebook, CVE-2024-31317</span></div></div>
                    <div className="preview-checks"><span><Check size={13} /> Failure-safe cleanup</span><span><Check size={13} /> SHA-256 verified</span><span><Check size={13} /> Chain of custody</span></div>
                    <div className="preview-card-footer"><span>Ready for deep extraction</span><span className="green-text">Hash integrity guaranteed</span></div>
                  </div>
                  <div className="preview-card side-card"><span className="mini-kicker">LOCK CRACKER</span><strong>Pattern &amp; PIN Solver</strong><p>Pure-Python 389,112 path 3x3 pattern solver &amp; Hashcat GPU engine.</p><button className="preview-outline">Open cracker <ArrowRight size={14} /></button></div>
                </div>
                <div className="preview-footer-row"><span><span className="green-dot" /> ForensiX workstation online</span><span>Case-scoped / hash-ready</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip"><div className="section-wrap trust-inner">
          <div className="trust-stat"><CalendarDays size={18} /><span><small>LATEST RELEASE</small><strong>{release}</strong></span></div>
          <div className="trust-stat"><Laptop size={18} /><span><small>PLATFORMS</small><strong>Windows / Linux / macOS</strong></span></div>
          <div className="trust-stat"><BadgeCheck size={18} /><span><small>WORKSTATION MODEL</small><strong>Local processing only</strong></span></div>
          <div className="trust-stat"><ShieldCheck size={18} /><span><small>EVIDENCE POSTURE</small><strong>Case-scoped and hash-ready</strong></span></div>
        </div></section>

        <section className="section-wrap section-block" id="capabilities">
          <div className="section-intro"><div><div className="eyebrow">THE WORKSTATION</div><h2>Every action has a reason, a scope, and a record.</h2></div><p>ForensiX is built for forensic examiners and investigators who require robust acquisition capabilities with complete chain-of-custody documentation.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p><a href="#workflow" aria-label={`Learn about ${title}`}><ArrowRight size={16} /></a></article>)}</div>
        </section>

        <section className="dark-band" id="workflow"><div className="section-wrap section-block workflow-block"><div className="section-intro inverse"><div><div className="eyebrow">ONE INVESTIGATION FLOW</div><h2>From device detection to court-ready report.</h2></div><p>Start with transport observation and capability assessment. End with verified evidence packages and reproducible audit logs.</p></div><div className="workflow-grid">{workflow.map(({ number, icon: Icon, title, text }) => <article className="workflow-step" key={number}><div className="step-number">{number}</div><Icon size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

        <section className="section-wrap section-block capability-section">
          <div className="section-intro"><div><div className="eyebrow">ACCESS POSTURE &amp; CAPABILITIES</div><h2>Complete transparency into supported forensic vectors.</h2></div><p>ForensiX provides clear visibility into device capability posture, encryption states, and active extraction methods.</p></div>
          <div className="capability-switcher" role="tablist" aria-label="Capability access posture">{capabilities.map((item) => <button key={item.id} className={activeCapability === item.id ? `cap-tab active ${item.tone}` : "cap-tab"} onClick={() => setActiveCapability(item.id)} role="tab" aria-selected={activeCapability === item.id}>{item.label}</button>)}</div>
          <div className={`capability-panel ${active.tone}`}><div className="cap-panel-copy"><div className="cap-panel-tag">{active.tone === "available" ? "PRODUCTION READY" : active.tone === "rooted" ? "PRIVILEGED / ROOTED" : "RESEARCH / PLANNED"}</div><h3>{active.title}</h3><p>{active.description}</p></div><ul>{active.items.map((item) => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></div>
          <div className="limitation-note"><ShieldAlert size={19} /><div><strong>Forensic Boundaries &amp; Integrity Assurances</strong><p>ForensiX enforces strict examiner safeguards: APK downgrade attacks verify SHA-256 hashes before installation and automatically restore original application packages. CVE-2024-31317 acquisitions check security patch levels (SPL ≤ June 2024) before launching filesystem collection.</p></div></div>
        </section>

        <section className="section-wrap section-block rooted-section"><div className="rooted-panel"><div className="rooted-copy"><div className="eyebrow">PRIVILEGED &amp; ROOTED EXTRACTIONS</div><h2>Defensible workflows for rooted devices and key derivation.</h2><p>When rooted access or privileged transports exist, ForensiX extracts private application sandboxes (Signal SQLCipher, Telegram cache4.db), derives database encryption keys, and executes lock screen bypass engine patches with clear audit trails.</p><a className="text-link" href="#downloads">Read workstation specifications <ArrowRight size={16} /></a></div><div className="rooted-list"><div><span className="rooted-icon"><ShieldCheck size={18} /></span><span><strong>Automated Root Detection</strong><small>Root availability and UID status are probed before privileged controls activate.</small></span></div><div><span className="rooted-icon"><LockKeyhole size={18} /></span><span><strong>Passphrase &amp; Key Derivation</strong><small>Extracts SQLCipher passphrases and WhatsApp crypt keys directly from sandbox memory.</small></span></div><div><span className="rooted-icon"><FileCheck2 size={18} /></span><span><strong>Complete Audit Trail</strong><small>Every operation records SHA-256 hashes, timestamps, and operator identifiers.</small></span></div></div></div></section>

        <section className="download-band" id="downloads"><div className="section-wrap download-block"><div className="download-intro"><div className="eyebrow">DOWNLOAD FORENSIX {release}</div><h2>A local forensic workstation for your investigation team.</h2><p>Portable builds are available for Windows, Linux, and macOS. Download the release, inspect the checksums, and run locally on examiner hardware.</p><div className="download-note"><Download size={16} /> Releases include checksums and platform-specific portable archives.</div></div><div className="download-grid"><DownloadCard platform="Windows" detail="Portable ZIP / x64" href={downloads.windows} primary /><DownloadCard platform="Linux" detail="Portable ZIP / x64" href={downloads.linux} /><DownloadCard platform="macOS" detail="Portable ZIP / Apple Silicon &amp; Intel" href={downloads.macos} /></div><a className="release-link" href={releasePage} target="_blank" rel="noreferrer">View release notes, checksums, and source <ExternalLink size={15} /></a></div></section>

        <section className="section-wrap section-block research-section"><div className="section-intro"><div><div className="eyebrow">ADVANCED VECTORS</div><h2>Built on rigorous forensic research.</h2></div><p>ForensiX integrates validated forensic vectors into a production-grade user interface for examiners.</p></div><div className="research-grid"><article><div className="research-head"><span className="research-status">PRODUCTION</span><span>NON-ROOTED</span></div><h3>CVE-2024-31317 Acquisition</h3><p>Exploits Android init vulnerability on SPL ≤ June 2024 devices to capture raw block-level system and userdata partitions over ADB.</p></article><article><div className="research-head"><span className="research-status">PRODUCTION</span><span>DOWNGRADE</span></div><h3>46 Application Profiles</h3><p>Failure-safe rollback framework supporting messaging, browser, social, and cloud storage apps with automatic package restoration.</p></article><article><div className="research-head"><span className="research-status">PRODUCTION</span><span>LOCK SUITE</span></div><h3>Gatekeeper &amp; Pattern Cracker</h3><p>Dump offline Gatekeeper hashes, solve 3x3 pattern locks instantly with pure Python (389,112 paths), or leverage Hashcat GPU acceleration.</p></article></div></section>

        <section className="final-cta"><div className="section-wrap final-cta-inner"><div><div className="eyebrow">READY FOR INVESTIGATION</div><h2>Start with ForensiX v1.0.0 today.</h2></div><a className="button button-primary" href={downloads.windows}>Download v1.0.0 <Download size={17} /></a></div></section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><ShieldCheck size={19} /></span><span className="brand-word">FORENSIX</span></a><p>Local Android evidence workstation with full chain-of-custody reporting.</p></div><div className="footer-links"><div><strong>Product</strong><a href="#capabilities">Capabilities</a><a href="#workflow">Workflow</a><a href="#downloads">Downloads</a></div><div><strong>Project</strong><a href="https://github.com/harshraj211/ForensiX" target="_blank" rel="noreferrer">Workstation source <ExternalLink size={13} /></a><a href={releasePage} target="_blank" rel="noreferrer">GitHub releases <ExternalLink size={13} /></a><a href="https://github.com/harshraj211/ForensiX-Website/issues" target="_blank" rel="noreferrer">Contact / issues <ExternalLink size={13} /></a></div></div></div><div className="section-wrap footer-bottom"><span>ForensiX {release}</span><span>Designed for authorized forensic examination and controlled investigation.</span></div></footer>
    </div>
  );
}

function DownloadCard({ platform, detail, href, primary = false }) {
  return <article className={primary ? "download-card primary-download" : "download-card"}><div className="platform-icon"><MonitorSmartphone size={20} /></div><div className="download-card-copy"><h3>{platform}</h3><p>{detail}</p></div><a className="download-icon" href={href} aria-label={`Download ForensiX for ${platform}`}><Download size={17} /></a></article>;
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
