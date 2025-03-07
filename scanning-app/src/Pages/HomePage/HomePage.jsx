import React, { useState } from "react";
import styles from "./HomePage.module.css";
import logo from "../../assets/HomePage/logo.png";
import { scanDomain } from "../../API/api";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
function HomePage() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleScan = async () => {
    setError(false);
    setLoading(true);
    try {
      const data = await scanDomain(domain);
      navigate(`/details/${domain.split(".")[0]}`, { state: data });
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}

      <div
        className={styles.homePage}
        style={{
          opacity: loading ? 0.5 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        <section className={styles.hero}>
          <a href="/">
            <img className={styles.logo} src={logo} alt="logo" />
          </a>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Website Scanner</h1>
            <label className={styles.label}>Enter a domain to scan:</label>
            <br />
            <form
              className={styles.inputAndButtonContainer}
              onSubmit={(e) => {
                e.preventDefault();
                if (!domain.trim() || loading) {
                  return;
                }
                handleScan();
              }}
            >
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder='(e.g., "youtube.com")'
                className={styles.input}
              />
              <button
                type="submit"
                className={styles.button}
                disabled={!domain.trim() || loading}
              >
                SCAN
              </button>
            </form>

            {error && (
              <div className={styles.error}>
                Oops! We couldn't find any information for that domain. Please
                double-check the spelling or try a different one.
              </div>
            )}
          </div>
        </section>
        <section className={styles.description}>
          <p>
            Quickly scan any website to retrieve essential details like status
            code, IP addresses, and technologies used. Simply enter a domain
            below and let our scanner do the rest!
          </p>
        </section>
      </div>
    </>
  );
}

export default HomePage;
