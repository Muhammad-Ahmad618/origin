import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomToast } from "../Components/custom/CustomToast";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser, FaLock, FaSpinner, FaWallet } from "react-icons/fa";
import { ToggleSwitch } from "../Components/ui/ToggleSwitch";
import { MdFolder } from "react-icons/md";

const tabs = [
  { id: "General", label: "General", icon: <IoSettingsOutline /> },
  { id: "Account", label: "My Account", icon: <FaRegUser /> },
  {
    id: "Notifications",
    label: "Notifications",
    icon: <IoNotificationsOutline />,
  },
  { id: "Privacy", label: "Privacy & Security", icon: <FaLock /> },
];

export default function SettingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("General");

  // General State
  const [runStartup, setRunStartup] = useState(true);
  const [language, setLanguage] = useState("English (US)");
  const [installPath, setInstallPath] = useState(
    "C:\\Program Files (x86)\\Origin\\Games",
  );
  const [autoUpdate, setAutoUpdate] = useState(true);

  // Account State
  const [username, setUsername] = useState("PlayerOne");
  const [email, setEmail] = useState("playerone@origin.com");
  const [status, setStatus] = useState("Online");

  // Notifications State
  const [downloadAlert, setDownloadAlert] = useState(true);
  const [chatSound, setChatSound] = useState(true);
  const [allowInvites, setAllowInvites] = useState(false);
  const [achievementAlert, setAchievementAlert] = useState(true);

  // Privacy State
  const [visibility, setVisibility] = useState("Friends Only");
  const [twoFactor, setTwoFactor] = useState(false);
  const [showLibrary, setShowLibrary] = useState(true);

  // Save Progress State
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      CustomToast({
        title: "Settings Saved",
        description: "Your settings have been updated successfully.",
      });
    }, 1000);
  };

  return (
    <div className="max-w-screen-2xl min-h-screen py-34 mx-auto px-5 lg:px-24 text-white">
      <div className="space-y-2 mb-8">
        <h1 className="text-[2.2rem] sm:text-[2.8rem] font-black tracking-wide bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          Configure your Origin client and profile settings.
        </p>
        <hr className="text-purple-500/30 mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Sidebar Tabs - Responsive Grid/Row layout */}
        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible gap-2 md:gap-1.5 pb-4 md:pb-0 scrollbar-none border-b border-white/5 md:border-b-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap md:w-full ${
                activeTab === tab.id
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content Pane */}
        <div className="md:col-span-3">
          <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
            {/* Subtle card backgrounds blur */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-600/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              {activeTab === "General" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold border-b border-white/5 pb-2 text-left">
                    General Settings
                  </h2>

                  <div className="space-y-2">
                    <ToggleSwitch
                      checked={runStartup}
                      onChange={() => setRunStartup(!runStartup)}
                      label="Run Origin on system startup"
                    />

                    <ToggleSwitch
                      checked={autoUpdate}
                      onChange={() => setAutoUpdate(!autoUpdate)}
                      label="Automatically update installed games"
                    />

                    <div className="flex flex-col gap-2 pt-4 text-left">
                      <label className="text-sm font-medium text-gray-300">
                        Client Language
                      </label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full max-w-xs bg-[#18181f] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none cursor-pointer"
                      >
                        <option value="English (US)">English (US)</option>
                        <option value="Español">Español</option>
                        <option value="Français">Français</option>
                        <option value="Deutsch">Deutsch</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2 pt-4 text-left">
                      <label className="text-sm font-medium text-gray-300">
                        Game Installation Path
                      </label>
                      <div className="flex gap-2">
                        <div className="relative flex-grow">
                          <input
                            type="text"
                            value={installPath}
                            onChange={(e) => setInstallPath(e.target.value)}
                            className="w-full bg-[#18181f] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:border-purple-500 outline-none"
                          />
                          <MdFolder className="absolute left-3 top-2.5 text-gray-400 text-lg" />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            CustomToast({
                              title: "Select Directory",
                              description:
                                "Path selection is handled by the OS file explorer.",
                            });
                          }}
                          className="px-4 py-2 text-sm bg-white/10 hover:bg-white/15 rounded-lg transition-colors cursor-pointer border border-white/5 font-semibold text-gray-200"
                        >
                          Browse
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Account" && (
                <div className="space-y-6 text-left">
                  <h2 className="text-xl font-bold border-b border-white/5 pb-2">
                    Account Profile
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-300">
                        Username
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-[#18181f] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-purple-500 outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#18181f] border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-purple-500 outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-300">
                        Online Status
                      </label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full bg-[#18181f] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none cursor-pointer"
                      >
                        <option value="Online">Online</option>
                        <option value="Away">Away</option>
                        <option value="Invisible">Invisible</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-300">
                        Account Tier
                      </label>
                      <div className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-purple-400 font-bold flex items-center h-[38px]">
                        Standard Origin Member
                      </div>
                    </div>
                  </div>

                  {/* Wallet Info Card */}
                  <div className="p-5 rounded-xl bg-purple-500/10 border border-purple-500/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-lg shrink-0">
                        <FaWallet />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">
                          Wallet Balance
                        </h4>
                        <p className="text-xs text-gray-400">
                          Add funds to purchase games instantly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6">
                      <span className="text-xl font-black text-purple-300">
                        $0.00
                      </span>
                      <button
                        type="button"
                        onClick={() => navigate("/store/wallet")}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase rounded-lg transition-all duration-200 cursor-pointer shadow-md shadow-purple-600/15 font-semibold text-center"
                      >
                        Manage Funds
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Notifications" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-bold border-b border-white/5 pb-2 text-left">
                    Notification Settings
                  </h2>

                  <div className="space-y-2">
                    <ToggleSwitch
                      checked={downloadAlert}
                      onChange={() => setDownloadAlert(!downloadAlert)}
                      label="Show desktop notification when downloads complete"
                    />
                    <ToggleSwitch
                      checked={chatSound}
                      onChange={() => setChatSound(!chatSound)}
                      label="Play alert sound for incoming chat messages"
                    />
                    <ToggleSwitch
                      checked={allowInvites}
                      onChange={() => setAllowInvites(!allowInvites)}
                      label="Allow game invitations from players who aren't friends"
                    />
                    <ToggleSwitch
                      checked={achievementAlert}
                      onChange={() => setAchievementAlert(!achievementAlert)}
                      label="Notify me when I unlock game achievements"
                    />
                  </div>
                </div>
              )}

              {activeTab === "Privacy" && (
                <div className="space-y-6 text-left">
                  <h2 className="text-xl font-bold border-b border-white/5 pb-2">
                    Privacy & Security
                  </h2>

                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-gray-300">
                        Profile Visibility
                      </label>
                      <select
                        value={visibility}
                        onChange={(e) => setVisibility(e.target.value)}
                        className="w-full max-w-xs bg-[#18181f] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 outline-none cursor-pointer"
                      >
                        <option value="Public">Public (Everyone)</option>
                        <option value="Friends Only">Friends Only</option>
                        <option value="Private">Private (Just Me)</option>
                      </select>
                      <p className="text-[11px] text-gray-500">
                        Controls who can search for your profile and view your
                        status.
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <ToggleSwitch
                        checked={showLibrary}
                        onChange={() => setShowLibrary(!showLibrary)}
                        label="Show my game library on my public profile page"
                      />
                      <ToggleSwitch
                        checked={twoFactor}
                        onChange={() => setTwoFactor(!twoFactor)}
                        label="Enable Two-Factor Authentication (2FA) on login"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Action Footer */}
              <div className="flex justify-end pt-8 border-t border-white/5 mt-8">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 font-bold text-white transition-all duration-200 cursor-pointer shadow-lg shadow-purple-600/25 flex items-center gap-2"
                >
                  {isSaving ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <span>Save Changes</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
