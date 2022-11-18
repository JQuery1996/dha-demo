import { MONTHS } from "../config";
const stars = [
    {
        employeeName: "Hiba Dimashky",
        organization: "Digital Horizon",
        totalPoint: 91,
        status: "bg-success",
    },
    {
        employeeName: "Hasan Takaleh",
        organization: "Digital Horizon",
        totalPoint: 79,
        status: "bg-info",
    },
    {
        employeeName: "Mohammad Amen",
        organization: "Digital Horizon",
        totalPoint: 36,
        status: "bg-warning",
    },
];
export function BoardOfStars() {
    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
            <div className="card-body d-flex align-items-center p-4">
                <h4 className="fw-700 mb-0 font-xssss text-grey-900">
                    Board of stars
                </h4>
                <a className="fw-600 ms-auto font-xssss text-primary">Top 10</a>
            </div>
            {stars.map((star, index) => (
                <div
                    key={index}
                    className="card-body d-flex pt-0 ps-4 pe-4 pb-3 overflow-hidden"
                >
                    <div
                        className={`bg-success me-2 p-3 rounded-xxl ${star.status}`}
                    >
                        <h4 className="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                            <span className="ls-1 d-block font-xsss text-white fw-600">
                                {MONTHS[new Date().getMonth()].slice(0, 3)}
                            </span>
                            {star.totalPoint}
                        </h4>
                    </div>
                    <h4 className="fw-700 text-grey-900 font-xssss mt-2">
                        {star.employeeName}{" "}
                        <span className="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                            {star.organization}
                        </span>{" "}
                    </h4>
                </div>
            ))}
        </div>
    );
}
