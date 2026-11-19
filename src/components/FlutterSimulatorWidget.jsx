import React, { useState } from "react";
import {
  ShoppingBag,
  Sparkles,
  HeartPulse,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  Sliders,
  Volume2,
} from "lucide-react";
import "./FlutterSimulatorWidget.css";

const FlutterSimulatorWidget = () => {
  const [activeScreen, setActiveScreen] = useState("shoprize");
  const [cartCount, setCartCount] = useState(1);
  const [ordered, setOrdered] = useState(false);
  const [quizFlipped, setQuizFlipped] = useState(false);
  const [booked, setBooked] = useState(false);

  return (
    <div className="simulator-widget-card">
      <div className="sim-header">
        <div className="sim-status-group">
          <span className="sim-live-badge">FLUTTER ENGINE 3.24</span>
          <span className="sim-fps">60 FPS</span>
        </div>
        {/* Screen Switcher Tabs */}
        <div className="sim-tabs">
          <button
            className={`sim-tab-btn ${activeScreen === "shoprize" ? "active" : ""}`}
            onClick={() => setActiveScreen("shoprize")}
          >
            <ShoppingBag size={12} />
            <span>Shoprize</span>
          </button>
          <button
            className={`sim-tab-btn ${activeScreen === "jlpt" ? "active" : ""}`}
            onClick={() => setActiveScreen("jlpt")}
          >
            <Sparkles size={12} />
            <span>JLPT AI</span>
          </button>
          <button
            className={`sim-tab-btn ${activeScreen === "cardiac" ? "active" : ""}`}
            onClick={() => setActiveScreen("cardiac")}
          >
            <HeartPulse size={12} />
            <span>Telehealth</span>
          </button>
        </div>
      </div>

      {/* Mini Device Frame */}
      <div className="phone-mockup-frame">
        <div className="phone-notch">
          <span className="phone-speaker"></span>
          <span className="phone-cam"></span>
        </div>

        <div className="phone-screen-content">
          {/* SCREEN 1: SHOPRIZE */}
          {activeScreen === "shoprize" && (
            <div className="phone-screen shoprize-screen">
              <div className="phone-nav-bar">
                <span className="app-brand-text">Shoprize</span>
                <div className="cart-badge-indicator">
                  <ShoppingBag size={14} />
                  <span className="cart-count">{cartCount}</span>
                </div>
              </div>

              <div className="sim-product-card">
                <div className="sim-product-tag">Kathmandu Fashion Flow</div>
                <h4 className="sim-product-name">Woolen Himalayan Cardigan</h4>
                <div className="sim-product-pricing">
                  <span className="price-tag">NPR 4,850</span>
                  <span className="stock-tag">In Stock</span>
                </div>
                <div className="sim-gateway-pills">
                  <span className="gateway-badge khalti">Khalti Pay</span>
                  <span className="gateway-badge esewa">eSewa Pay</span>
                </div>
              </div>

              {ordered ? (
                <div className="sim-order-success">
                  <CheckCircle2 size={18} className="text-emerald" />
                  <span>Order Dispatched via BLOC!</span>
                </div>
              ) : (
                <div className="sim-btn-row">
                  <button
                    className="sim-action-btn secondary"
                    onClick={() => setCartCount((c) => c + 1)}
                  >
                    + Add to Cart
                  </button>
                  <button
                    className="sim-action-btn primary"
                    onClick={() => {
                      setOrdered(true);
                      setTimeout(() => setOrdered(false), 2800);
                    }}
                  >
                    <CreditCard size={13} />
                    <span>Instant Checkout</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* SCREEN 2: JLPT AI APP */}
          {activeScreen === "jlpt" && (
            <div className="phone-screen jlpt-screen">
              <div className="phone-nav-bar">
                <span className="app-brand-text">JLPT Nepali • N3</span>
                <span className="ai-status-pill">
                  <Sparkles size={11} /> Gemini 1.5
                </span>
              </div>

              <div
                className={`sim-flashcard ${quizFlipped ? "flipped" : ""}`}
                onClick={() => setQuizFlipped(!quizFlipped)}
              >
                {!quizFlipped ? (
                  <>
                    <span className="kanji-display">開発者</span>
                    <span className="romaji-display">かいはつしゃ • Kaihatsusha</span>
                    <span className="card-tap-hint">Tap card for AI explanation</span>
                  </>
                ) : (
                  <div className="ai-explanation-box">
                    <span className="ai-meaning">Meaning: "Developer / Engineer"</span>
                    <p className="ai-breakdown">
                      開 (Kai: Open) + 発 (Hatsu: Launch) + 者 (Sha: Person). Used in mobile app development.
                    </p>
                    <span className="nepali-translation">नेपाली: सफ्टवेयर विकासकर्ता</span>
                  </div>
                )}
              </div>

              <button
                className="sim-action-btn outline-full"
                onClick={() => setQuizFlipped(!quizFlipped)}
              >
                <RefreshCw size={13} />
                <span>{quizFlipped ? "Show Front" : "Flip Flashcard"}</span>
              </button>
            </div>
          )}

          {/* SCREEN 3: NATIONAL CARDIAC CENTER */}
          {activeScreen === "cardiac" && (
            <div className="phone-screen cardiac-screen">
              <div className="phone-nav-bar">
                <span className="app-brand-text">Cardiac Care</span>
                <span className="security-pill">Encrypted Lab</span>
              </div>

              <div className="doctor-mini-card">
                <div className="doc-avatar-dot"></div>
                <div>
                  <h5 className="doc-name">Dr. R. Shrestha, MD</h5>
                  <span className="doc-spec">Senior Cardiologist • Cath Lab</span>
                </div>
              </div>

              <div className="appointment-picker">
                <span className="slot-label">Select Consult Slot:</span>
                <div className="slot-chips">
                  <span className="slot-chip selected">Today 3:30 PM</span>
                  <span className="slot-chip">Tomorrow 10:00 AM</span>
                </div>
              </div>

              {booked ? (
                <div className="sim-order-success">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>Consult Confirmed! SMS Sent.</span>
                </div>
              ) : (
                <button
                  className="sim-action-btn primary full"
                  onClick={() => {
                    setBooked(true);
                    setTimeout(() => setBooked(false), 2800);
                  }}
                >
                  Confirm Appointment
                </button>
              )}
            </div>
          )}
        </div>

        {/* Home Indicator */}
        <div className="phone-home-indicator"></div>
      </div>
    </div>
  );
};

export default FlutterSimulatorWidget;
