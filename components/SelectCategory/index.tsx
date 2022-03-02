import {Col, Row} from "antd";
import {AllowedIcons} from "../../utils/constants/AllowedIcons";
import iconComponentFactory from "../Factories/iconComponentFactory";
import {FC} from "react";

interface SelectCategoryProps{
    value: number;
    onChange: (key:string)=>void;
    background: string;
}

const SelectCategory: FC<SelectCategoryProps> = ({value, onChange, background})=>{
    console.log("value",value,background)
    return (
        <div style={{overflow: "hidden", overflowY: "scroll", maxHeight: "300px"}}>
            <Row gutter={[16, 16]}>
                {AllowedIcons.map((iconKey) => {
                    return <Col span={4} key={iconKey}
                                onClick={() => onChange(iconKey)} style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: 16,
                        cursor: "pointer",
                    }}>{iconComponentFactory(iconKey, {
                        style: {
                            backgroundColor: background ?? "#04f",
                            color: "#fff",
                            fontSize: 16,
                            padding: 8,
                            borderRadius: 8
                        }
                    })}</Col>
                })}
            </Row>
        </div>
    )
}

export default SelectCategory