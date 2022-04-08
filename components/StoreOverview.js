import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import MyCard from "./MyCard"

export default function StoreOverview() {
    return ( 
        <>
            < Row xs={1} md={4}
                className="g-2"> {
                    Array
                        .from({ length: 32 })
                        .map((_, idx) => (
                            <Col>
                                <MyCard />
                            </Col>
                        ))
                }
            </Row>
        </>
    )
}