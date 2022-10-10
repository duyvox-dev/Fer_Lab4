import React from "react";
import { useEffect } from "react";
import {
    Container,
    Collapsible,
    CollapsibleItem,
    Icon,
} from "react-materialize";
export default function About() {
    useEffect(() => {
        document.title = "About us";
    }, []);
    return (
        <Container>
            <h3>About us</h3>
            <Collapsible accordion>
                <CollapsibleItem
                    expanded={false}
                    header="More than 5000 movies"
                    icon={<Icon>local_movies</Icon>}
                    node="div"
                >
                    We have many hot films for you to enjoy.
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Across platform"
                    icon={<Icon>devices</Icon>}
                    node="div"
                >
                    Yeah, you can watch movie on any devices, Top Films Ever
                    also support mobile devices as well.
                </CollapsibleItem>
            </Collapsible>
        </Container>
    );
}
