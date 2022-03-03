import {createContext, FC} from "react";
import {Form, FormInstance} from "antd";
import {EditableRowProps} from "./interface";

export const EditableRowContext = createContext<FormInstance<any> | null>(null);

export const EditableRow:FC<EditableRowProps> = ({index, ...props})=>{
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableRowContext.Provider value={form}>
                <tr {...props}/>
            </EditableRowContext.Provider>
        </Form>
    )
}