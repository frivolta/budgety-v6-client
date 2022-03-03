import React, {FC, ReactNode, useContext, useEffect, useRef, useState} from "react";
import {EditableRowContext} from "../EditableRow";
import {Form, Input} from "antd";
import {BudgetDataType, BudgetRecordDataType} from "../../interface";
import getFieldValue from "react-hook-form/dist/logic/getFieldValue";
import {bool} from "yup";

interface EditableCellProps {
    title: ReactNode;
    children: ReactNode;
    editable: boolean;
    dataIndex: keyof BudgetRecordDataType;
    record: BudgetRecordDataType;
}


export const EditableCell: FC<EditableCellProps> = ({dataIndex, record, children, editable, title, ...restProps}) => {
    const [editing, setEditing] = useState(false)
    const form = useContext(EditableRowContext)
    const inputRef = useRef<Input>();

    useEffect(() => {
        if (editing && inputRef?.current?.focus) {
            inputRef.current.focus()
        }
    }, [editing])

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            console.log(values)
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({[dataIndex]: record[dataIndex]})
    };

    const getChildNode = (editable: boolean, editing: boolean) => {
        if (editable) {
            return editing ? (
                <Form.Item
                    style={{margin: 0}}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required`
                        },
                    ]}
                >
                    <Input ref={inputRef}  onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div className="editable-cell-value-wrap" style={{paddingRight: 24}} onClick={toggleEdit}>
                    {children}
                </div>
            )
        }
        return (
            <div style={{paddingRight: 24}}>
                {dataIndex==="category" ? <strong>{children}</strong> : children}
            </div>
        )
    }

    return (
        <td {...restProps}>{getChildNode(editable, editing)}</td>
    )

}