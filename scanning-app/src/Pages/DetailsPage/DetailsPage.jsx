import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DetailsPage.module.css";
import heroImage from "../../assets/HomePage/homePage.png";
import goBack from "../../assets/DetailsPage/goBack.png";
import NotFound from "../NotFound/NotFound";

function DetailsPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    input, // domain
    a, // IPv4 addresses
    aaaa, // IPv6 addresses
    title,
    status_code,
    webserver, // server name
    tech, // technologies
    cname,
  } = state || {};
  if (!state) {
    return <NotFound />;
  }
  const domainValue = input || "N/A";

  const ipv4 = a && a.length > 0 ? a : null;
  const ipv6 = aaaa && aaaa.length > 0 ? aaaa : null;

  const technologies = tech && tech.length > 0 ? tech : null;
  const serverValue = webserver || "N/A";
  const statusCode = status_code || "N/A";

  const webpageTitle = title || "N/A";
  const cnameRecords = cname && cname.length > 0 ? cname : null;

  return (
    <div className={styles.detailsPage}>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.goBackContainer}>
          <img
            src={goBack}
            className={styles.goBackImg}
            alt="go back"
            onClick={() => navigate("/")}
          />
        </div>
        <h1 className={styles.heroTitle}>Scan Results</h1>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.resultItem}>
          <h2>Domain</h2>
          <p>{domainValue}</p>
        </div>

        <div className={styles.resultItem}>
          <h2>Related IPv4s</h2>
          {ipv4 ? (
            <ul>
              {ipv4.map((ip, idx) => (
                <li key={idx}>{ip}</li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>

        <div className={styles.resultItem}>
          <h2>Related IPv6s</h2>
          {ipv6 ? (
            <ul>
              {ipv6.map((ip6, idx) => (
                <li key={idx}>{ip6}</li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>

        <div className={styles.resultItem}>
          <h2>Webpage Title</h2>
          <p>{webpageTitle}</p>
        </div>

        <div className={styles.resultItem}>
          <h2>Status Code</h2>
          <p>{statusCode}</p>
        </div>

        <div className={styles.resultItem}>
          <h2>Web Server</h2>
          <p>{serverValue}</p>
        </div>

        <div className={styles.resultItem}>
          <h2>Technologies</h2>
          {technologies ? (
            <ul>
              {technologies.map((techItem, idx) => (
                <li key={idx}>{techItem}</li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>

        <div className={styles.resultItem}>
          <h2>CNAME Records</h2>
          {cnameRecords ? (
            <ul>
              {cnameRecords.map((cname, idx) => (
                <li key={idx}>{cname}</li>
              ))}
            </ul>
          ) : (
            <p>N/A</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default DetailsPage;
