let uniqueDays = [];

{incidents.map((incident) => {
  if (!uniqueDays.includes(incident.day)) {
    uniqueDays.push(incident.day);

    if (incident.elb_status_code === "503") {
      return (
        <div
          key={incident.issue_id}
          className="mt-3 andromeda-card flex flex-column gap-3"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div>
            <div className="flex gap-2 justify-content-start align-content-center">
              <i className="text-lg">
                <IoIosWarning />
              </i>
              <div className="font-bold text-1000">
                {incident.elb_status_code}
              </div>
            </div>
            <p className="text-xl card-title font-semibold">
              Some APIs were facing {incident.elb_status_code} error. We have identified the cause and actively working on it.
            </p>
            <p className="font-semibold sub-title mt-6">
              resolved
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={incident.issue_id}
          className="mt-3 andromeda-card flex flex-column gap-3"
          style={{
            marginBottom: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div>
            <div className="flex gap-2 justify-content-start align-content-center">
              <i className="text-lg">
                <IoIosWarning />
              </i>
              <div className="font-bold text-1000">
                No issues found
              </div>
            </div>
            {/* <p className="text-xl card-title font-semibold">
              Some APIs were facing {incident.elb_status_code} error. We have identified the cause and actively working on it.
            </p> */}
            <p className="font-semibold sub-title mt-6">
              resolved
            </p>
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
})}
