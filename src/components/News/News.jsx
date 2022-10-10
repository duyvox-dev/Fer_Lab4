import React from "react";
import { Container, Tabs, Tab } from "react-materialize";
import { filmNews } from "../../shared/ListOfNews";
import { truncate } from "../../utils/textUtil";
export default function News() {
    return (
        <Container>
            <h3>Weekly News</h3>
            <Tabs
                className="tab-demo z-depth-1"
                options={{
                    swipeable: true,
                }}
                scope="tabs-33"
            >
                {filmNews.map((filmNew, index) => {
                    return (
                        <Tab
                            className="pink lighten-3"
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false,
                            }}
                            title={truncate(filmNew.title, 20)}
                        >
                            <img
                                src={filmNew.image}
                                alt=""
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 1,
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 2,
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                }}
                            ></div>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                    zIndex: 3,
                                    color: "white",
                                    padding: "1rem 2rem",
                                }}
                            >
                                <h4 className="red-text text-accent-1">
                                    {filmNew.title}
                                </h4>
                                <p>{filmNew.description}</p>
                            </div>
                        </Tab>
                    );
                })}
            </Tabs>
        </Container>
    );
}
