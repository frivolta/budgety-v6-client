import {Transaction} from "../../data-structures/definitions/transactions";
import {FC, useEffect, useMemo, useState} from "react";
import {TransactionFormFields, TransactionFormProps} from "./interface";
import {useTransactionsDrawer} from "../TransactionsDrawer/hooks/userTransactionsDrawer";
import {Controller, useForm} from "react-hook-form";
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";
import {getSelectCategoriesValues, transactionTypeOptions} from "./formFields/formFields";
import {convertToFormDate} from "../../utils/helpers/dates";

const getValues = (values: Transaction | null): TransactionFormFields => ({
    id: values?.id ?? null,
    transactionType: values?.transactionType ?? transactionTypeOptions[0].value,
    category: values?.category?.id ?? null,
    amount: values?.amount ?? 0,
    description: values?.description ?? "",
    date: values?.date ? convertToFormDate(values.date) : null
})

const DEFAULT_UI_COLOR = "#04f"

const TransactionForm: FC<TransactionFormProps> = ({transaction}) => {
    const {closeDrawer} = useTransactionsDrawer()
    const [uiColor, setuiColor] = useState(DEFAULT_UI_COLOR)
    const {
        handleSubmit,
        control,
        reset,
        formState: {errors},
        getValues: getFormValues,
        setValue: setFormValue,
        resetField,
    } = useForm<TransactionFormFields>({
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

    const onTransactionTypeSelect = (val) => {
        // @ts-ignore
        resetField("category")
        setFormValue("category", getSelectCategoriesValues(val)[0].value)
    }

    const onSubmit = (data: any) => {
        console.log(data);
        closeDrawer()
    }
    const transactionIsPresent: boolean = useMemo(() => !!transaction, [JSON.stringify(transaction)])


    // @ts-ignore
    // @ts-ignore
    return (
        <Row gutter={16}>
            <Col span={24}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column"}}>
                    <Controller
                        control={control}
                        name="transactionType"
                        render={({field}) =>
                            <Form.Item
                                label="Transaction type: "
                                validateStatus={!!errors?.transactionType ? "error" : ""}
                                help={!!errors.transactionType ? errors.transactionType.message : ""}
                            >
                                <Select onSelect={onTransactionTypeSelect} defaultValue={transactionTypeOptions[0]}
                                        onChange={field.onChange}
                                        value={field.value}
                                        disabled={transactionIsPresent}
                                >
                                    {transactionTypeOptions.map(option => (
                                        <Select.Option value={option.value}
                                                       key={option.value}>{option.label}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        }
                    />
                    <Controller
                        control={control}
                        name="category"
                        render={({field}) =>
                            <Form.Item
                                label="Category: "
                                validateStatus={!!errors?.category ? "error" : ""}
                                help={!!errors.category ? errors.category.message : ""}
                            >
                                <Select disabled={!getFormValues("transactionType")} onChange={field.onChange}

                                        value={field.value}>
                                    {getSelectCategoriesValues(getFormValues("transactionType")).map(option => (
                                        <Select.Option value={option.value}
                                                       key={option.value}>{option.label}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        }
                    />
                    <Controller
                        control={control}
                        name="date"
                        render={({field}) =>
                            <Form.Item
                                label="Date: "
                                validateStatus={!!errors?.date ? "error" : ""}
                                help={""}
                            >
                                <DatePicker
                                    //@ts-ignore
                                    value={field.value}
                                    format="DD/MM/yyyy"
                                    onChange={field.onChange}
                                />
                            </Form.Item>
                        }
                    />
                    <Controller
                        control={control}
                        name="amount"
                        render={({field}) =>
                            <Form.Item
                                label="amount"
                                validateStatus={!!errors?.amount ? "error" : ""}
                                help={!!errors.amount ? errors.amount.message : ""}
                            >
                                <Input
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </Form.Item>
                        }
                    />
                    <Controller
                        control={control}
                        name="description"
                        render={({field}) =>
                            <Form.Item
                                label="description"
                                validateStatus={!!errors?.description ? "error" : ""}
                                help={!!errors.description ? errors.description.message : ""}
                            >
                                <Input
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </Form.Item>
                        }
                    />
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </form>
            </Col>
        </Row>
    )
}

export default TransactionForm