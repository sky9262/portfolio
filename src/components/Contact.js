import styles from "@/styles/Contact.module.css";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faSquareEnvelope,
  faSquarePhone,
  faHouseLaptop,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Contact = () => {
  const windowSize = useWindowSize();
  // TODO: Add website URL after the host name is confirmed.
  return (
    <>
      <div id="card-contact" className={`${styles.contact__background} bg-light-lilac`}>
        <div className={`${windowSize.containerClass} mt-3 mb-3 h-100`}>
          <div className="row h-100 d-flex justify-content-between align-items-center">
            <div className="col-12 col-lg-6">
              <div className="d-flex">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faSquareEnvelope}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="mailto:akash2002.pat@gmail.com" className="mt-auto mb-auto text-decoration-none">
                  <p className="mt-auto mb-auto">
                    {"akash2002.pat@gmail.com"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://www.linkedin.com/in/sky9262" target="_blank" className="mt-auto mb-auto text-decoration-none">
                  <p className="mt-auto mb-auto">
                    {"www.linkedin.com/in/sky9262"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faSquarePhone}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="tel:+919262962604" className="mt-auto mb-auto text-decoration-none">
                  <p className="mt-auto mb-auto">
                    {"+91 92 6296 2604"}
                  </p>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex mt-3 mt-lg-0">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://sky9262.tistory.com/"
                  className="mt-auto mb-auto text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"sky9262.tistory.com"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a href="https://www.github.com/sky9262"
                  className="mt-auto mb-auto text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"www.github.com/sky9262"}
                  </p>
                </a>
              </div>
              <div className="d-flex mt-3">
                <div className={`${styles["contact__icon"]}`}>
                  <FontAwesomeIcon
                    icon={faHouseLaptop}
                    size="2x"
                    className="me-3"
                  />
                </div>
                <a
                  className="mt-auto mb-auto text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mt-auto mb-auto">
                    {"Hybrid / Remote"}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
