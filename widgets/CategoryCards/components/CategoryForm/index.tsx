import {Button, Col, Form, Input, Row, Select} from "antd";
import {CategoryFormProps} from "./interfaces";
import {FC, useEffect, useState} from "react";
import * as yup from 'yup'
import {CategoryType} from "../../../../data-structures/definitions/categories";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import SelectCategory from "../../../../components/SelectCategory";
import {CirclePicker} from 'react-color';
import {useCategoriesDrawer} from "../../../CategoriesDrawer/hooks/useCategoriesDrawer";

// @ToDo: Fix Ui Problems, form
// @ToDo: Fix Ui Problems, divide in subcomponents
// @ToDo: Fix Ui Problems, Selected category
// @ToDo: Fix Ui Problems, add correct colors
// @ToDo: Fix Ui Problems, restrict icons number
// @ToDo: Fix Ui Problems, Validation and validations message components

const CreateUpdateCategorySchema = yup.object().shape({
    category_name: yup.string()
        .required('Required')
        .min(3, 'Enter a valid category name (min. 3 chars.)'),
});

const getValues = (values: CategoryType | null) =>
    ({
        id: values?.id ?? null,
        category_name: values?.category_name ?? "",
        category_slug: values?.category_slug ?? "",
        icon: values?.icon ?? "",
        color: values?.color ?? "",
        category_type: values?.category_type ?? ""
    })

const DEFAULT_UI_COLOR = "#04f"

const CategoryForm: FC<CategoryFormProps> = ({category}) => {
    const [uiColor, setuiColor] = useState(" #04f")
    const {closeDrawer} = useCategoriesDrawer()
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
        resolver: yupResolver(CreateUpdateCategorySchema)
    })


    useEffect(() => {
        if (category) {
            reset(getValues(category))
            setuiColor(getValues(category).color)
        } else {
            reset(getValues(null))
            setuiColor(DEFAULT_UI_COLOR)
        }
    }, [JSON.stringify(category)])


    const onSubmit = (data: any) => {
        console.log(data);
        closeDrawer()
    };

    return (
        <Row gutter={16}>
            <Col span={24}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection: "column"}}>
                    <Controller
                        control={control}
                        name="category_name"
                        render={({field}) =>
                            <Form.Item
                                label="Category name: "
                                validateStatus={!!errors?.category_name ? "error" : ""}
                                help={!!errors.category_name ? errors.category_name.message : ""}
                            >
                                <Input name="category_name" onChange={field.onChange} value={field.value}/>
                            </Form.Item>
                        }
                    />
                    {/*Select category type*/}
                    {!getFormValues("id") &&
                        <Controller
                            control={control}
                            name="category_type"
                            render={({field}) => <Form.Item
                                label="Category type: "
                                validateStatus={!!errors?.category_type ? "error" : ""}
                                help={!!errors.category_type ? errors.category_type.message : ""}
                            >
                                <Select value={field.value} onChange={field.onChange}>
                                    <Select.Option value="expense">Expense</Select.Option>
                                    <Select.Option value="income">Income</Select.Option>
                                    <Select.Option value="saving">
                                        Saving
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                            }

                        />}
                    {/* Image selector */}
                    <Row>
                        <Form.Item>
                            <Controller
                                control={control}
                                name="icon"
                                render={({field}) =>
                                    <Form.Item
                                        label="Category icon: "
                                        validateStatus={!!errors?.category_name ? "error" : ""}
                                        help={!!errors.category_name ? errors.category_name.message : ""}

                                    >
                                        <SelectCategory value={parseInt(field.value)} onChange={field.onChange}
                                                        background={uiColor}/>
                                    </Form.Item>
                                }
                            />
                        </Form.Item>
                    </Row>
                    {/* Color picker*/}
                    <Form.Item>
                        <Controller
                            control={control}
                            name="color"
                            render={({field}) =>
                                <Form.Item
                                    label="Category color: "
                                    validateStatus={!!errors?.color ? "error" : ""}
                                    help={!!errors.category_name ? errors.category_name.message : ""}
                                >
                                    <CirclePicker color={field.value} onChange={(c) => {
                                        field.onChange(c.hex)
                                        setuiColor(c.hex)
                                    }}/>
                                </Form.Item>
                            }
                        />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        {category?.id ? "Update Category" : "Save Category"}
                    </Button>
                </form>
            </Col>
        </Row>
    )
}

export default CategoryForm