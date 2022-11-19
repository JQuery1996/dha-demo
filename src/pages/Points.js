import { Badge, Tab, Tabs } from "react-bootstrap";
import Appfooter from "../components/Appfooter";
import { GivePoints } from "../components/GivePoints";
import Header from "../components/Header";
import { HistoryPoint } from "../components/HistoryPoints";
import Leftnav from "../components/Leftnav";
import { MilestonesPoint } from "../components/MilestonesPoint";
import { Nominate } from "../components/Nominate";
import Pagetitle from "../components/Pagetitle";
import Popupchat from "../components/Popupchat";
import { Rewards } from "../components/Rewards";
import Rightchat from "../components/Rightchat";
import { ROLE } from "../config";
import useAuth from "../hooks/useAuth";
import { GoldenCoinIcon } from "../illustration";

export default function Points() {
    const { user } = useAuth();
    return (
        <>
            <Header />
            <Leftnav />
            <Rightchat />
            <Popupchat />
            <Appfooter />
            <div className="main-content right-chat-active">
                <div className="middle-sidebar-bottom">
                    <div className="middle-sidebar-left pe-0">
                        <div className="row">
                            <div className="col-xl-12">
                                <Pagetitle title="Points" />
                                <div className="row ps-2 pe-1 d-flex justify-content-center">
                                    <div className="col-md-12 col-sm-12 pe-2 ps-2">
                                        <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-3 shadow-lg">
                                            <div className="card-body d-block w-100 p-4 text-center">
                                                <figure className="avatar ms-auto me-auto mb-0 position-relative w140 z-index-1">
                                                    <GoldenCoinIcon />
                                                </figure>
                                                <div className="clearfix"></div>
                                                <Badge
                                                    className="mt-4 p-0 btn p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl font-xsss fw-700 ls-lg"
                                                    bg="primary"
                                                    text="white"
                                                >
                                                    {user.totalPoints} Points
                                                </Badge>
                                            </div>
                                        </div>
                                        <Tabs
                                            defaultActiveKey="GivePoints"
                                            className="mb-3"
                                            fill
                                            justify
                                            variant="pills"
                                        >
                                            <Tab
                                                eventKey="GivePoints"
                                                title="Give Points"
                                            >
                                                <GivePoints />
                                            </Tab>
                                            <Tab
                                                eventKey="History"
                                                title="History"
                                            >
                                                <HistoryPoint />
                                            </Tab>
                                            <Tab
                                                eventKey="Milestones"
                                                title="Milestones"
                                            >
                                                <MilestonesPoint />
                                            </Tab>

                                            {user.role !== ROLE.NORMAL && (
                                                <Tab
                                                    eventKey="Nominate"
                                                    title="Nominate"
                                                >
                                                    <Nominate />
                                                </Tab>
                                            )}
                                            <Tab
                                                eventKey="Rewards"
                                                title="Rewards"
                                            >
                                                <Rewards />
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
