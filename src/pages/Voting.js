import { Button } from "react-bootstrap";
import Appfooter from "../components/Appfooter";
import Header from "../components/Header";
import Leftnav from "../components/Leftnav";
import Pagetitle from "../components/Pagetitle";
import Popupchat from "../components/Popupchat";
import { USER_IMAGES_DIRECTORY, VOTING_LIST } from "../config";

export default function Voting() {
    function handleFireWork(e) {
        for (let i = 0; i < 30; i++) {
            createParticle(e.clientX, e.clientY, e.target.dataset.type);
        }

        function createParticle(x, y, type) {
            const particle = document.createElement("particle");
            document.body.appendChild(particle);

            const size = Math.floor(Math.random() * 20 + 5);

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            const destinationX = x + (Math.random() - 0.5) * 2 * 75;
            const destinationY = y + (Math.random() - 0.5) * 2 * 75;

            switch (type) {
                case "square":
                    particle.style.background = `hsl(${
                        Math.random() * 90 + 270
                    }, 70%, 60%)`;
                    particle.style.border = "1px solid white";
                    break;
                case "circle":
                    particle.style.background = `hsl(${
                        Math.random() * 90 + 180
                    }, 70%, 60%)`;
                    particle.style.borderRadius = "50%";
                    break;
                default:
                    particle.style.background = `hsl(${
                        Math.random() * 90 + 180
                    }, 70%, 60%)`;
            }

            const animation = particle.animate(
                [
                    {
                        // Set the origin position of the particle
                        // We offset the particle with half its size to center it around the mouse
                        transform: `translate(${x - size / 2}px, ${
                            y - size / 2
                        }px)`,
                        opacity: 1,
                    },
                    {
                        // We define the final coordinates as the second keyframe
                        transform: `translate(${destinationX}px, ${destinationY}px)`,
                        opacity: 0,
                    },
                ],
                {
                    duration: 500 + Math.random() * 1000,
                    easing: "cubic-bezier(0, .9, .57, 1)",
                    delay: Math.random() * 200,
                },
            );

            animation.onfinish = () => particle.removeParticle;
        }

        function removeParticle(e) {
            e.srcElement.effect.target.remove();
        }
    }
    return (
        <>
            <Header />
            <Leftnav />
            <Popupchat />
            <Appfooter />
            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <div className="col-xl-12">
                                <Pagetitle title="Badge" />

                                <div className="row ps-2 pe-1">
                                    {VOTING_LIST.map((data, index) => (
                                        <div
                                            key={index}
                                            className="col-md-4 col-sm-6 pe-2 ps-2"
                                        >
                                            <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 shadow-lg">
                                                <div className="card-body d-block w-100 p-4 text-center">
                                                    <figure className="avatar ms-auto me-auto mb-0 position-relative w90 z-index-1">
                                                        <img
                                                            src={`${USER_IMAGES_DIRECTORY}${data.avatar}`}
                                                            alt="avater"
                                                            className="float-right p-1 bg-white rounded-circle w-100"
                                                        />
                                                    </figure>
                                                    <div className="clearfix"></div>
                                                    <h4 className="fw-700 font-xss mt-3 mb-0">
                                                        {data.user}{" "}
                                                    </h4>
                                                    <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3">
                                                        {data.organization}
                                                    </p>
                                                    <ul className="d-flex align-items-center justify-content-center mt-1">
                                                        {data.numberOfVoters.map(
                                                            (
                                                                {
                                                                    label,
                                                                    votes,
                                                                },
                                                                index,
                                                            ) => (
                                                                <li
                                                                    className="m-2"
                                                                    key={index}
                                                                >
                                                                    <h4 className="fw-700 font-sm">
                                                                        {votes}{" "}
                                                                        <span className="font-xsssss fw-500 mt-1 text-grey-500 d-block">
                                                                            {
                                                                                label
                                                                            }
                                                                        </span>
                                                                    </h4>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                    <ul className="d-flex align-items-center justify-content-center mt-1">
                                                        {data.badges.map(
                                                            (Badge, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="m-1"
                                                                >
                                                                    <Badge
                                                                        style={{
                                                                            width: 50,
                                                                            height: 50,
                                                                        }}
                                                                    />
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                    <Button
                                                        varint="primary"
                                                        className="firework firework-second mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-primary font-xsss fw-700 ls-lg text-white"
                                                        data-type="square"
                                                        onClick={handleFireWork}
                                                    >
                                                        Vote
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Popupchat />
            <Appfooter />
        </>
    );
}
