import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const HistoryCard = ({
  title,
  subtitle,
  placeName,
  dateRange,
  location,
  tasks,
  courses,
  url,
}) => {
  return (
    <div className="mb-3">
      <div className="d-flex justify-content-between align-items-center">
        {!!url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex text-decoration-none align-items-center"
          >
            <h3 className="mb-0">{title}&#8203;</h3>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="1x"
              className=""
            />
          </a>
        ) : (
          <h3 className="mb-0">{title}</h3>
        )}

        <p className="mt-auto mb-0 text-muted fst-italic text-end">
          {subtitle}
        </p>
      </div>
      <p className="mb-0">{placeName}</p>
      <div className="d-flex justify-content-between">
        <p className="mb-0 text-muted fst-italic">{dateRange}</p>
        <p className="mb-0 text-muted fst-italic text-end">{location}</p>
      </div>
      {!!tasks?.length && <p className="mb-0">Tasks:</p>}
      <ul>
        {tasks?.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
      {!!courses?.length && <p className="mb-0">Courses:</p>}
      <div className="row">
        {courses?.map((course, index) => {
          return (
            <div className="col-md-6 col-lg-6 mb-3" key={index}>
              <span className="ps-3">¤ {course}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
