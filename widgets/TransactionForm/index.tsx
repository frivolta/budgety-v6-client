import {Transaction} from "../../data-structures/definitions/transactions";
import {FC, useEffect, useState} from "react";
import {TransactionFormProps} from "./interface";
import {useTransactionsDrawer} from "../TransactionsDrawer/hooks/userTransactionsDrawer";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Col, Row} from "antd";

const getValues = (values: Transaction | null) => ({
    id: values?.id ?? null,
    category: values?.category ?? null,
    amount: values?.amount ?? 0,
    description: values?.description ?? "",
    date: values?.date ?? null
})

const DEFAULT_UI_COLOR = "#04f"

const TransactionForm: FC<TransactionFormProps>=({transaction, })=>{
    const {closeDrawer} = useTransactionsDrawer()
    const [uiColor, setuiColor] = useState(DEFAULT_UI_COLOR)
    const {handleSubmit, control, reset, formState: {errors}, getValues: getFormValues} = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {...getValues(null)},
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined,
        //resolver: yupResolver(CreateUpdateCategorySchema)
    })

    useEffect(() => {
        if (transaction) {
            reset(getValues(transaction))
        } else {
            reset(getValues(null))
        }
    }, [JSON.stringify(transaction)])

    const onSubmit = (data: any) => {
        console.log(data);
        closeDrawer()
    }

    return (
        <Row gutter={16}>
            <Col span={24}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column"}}>

                </form>
            </Col>
        </Row>
    )
}

export default TransactionForm